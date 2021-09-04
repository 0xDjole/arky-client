import {
    getOAuth2Cookies,
    handleAsync,
    removeOAuth2Cookies,
    setOAuth2Cookies,
    userGetMeApi,
    userOAuth2LoginApi,
    userOAuth2LoginUrlGetApi,
    userOAuth2LogoutApi,
    userOAuth2RefreshAccessTokenApi
} from '../../services'
import {
    EUserOAuth2TokenKey,
    GetUserLocation,
    IUserContextAction,
    SetUserMapDistance,
    UserGetMe,
    UserOAuth2Login,
    UserOAuth2LoginUrlGet,
    UserOAuth2Logout,
    UserOAuth2RefreshAccessToken
} from '../../types'
import userTypes from './types'

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

export const userOAuth2LoginUrlGet: IUserContextAction<UserOAuth2LoginUrlGet> = ({
    dispatch,
    client
}) => async () => {
    dispatch({
        type: userTypes.USER_OAUTH2_LOGIN_URL_GET_REQUEST
    })

    const [
        userOAuth2LoginUrlGetError,
        userOAuth2LoginUrlGetData
    ] = await handleAsync(userOAuth2LoginUrlGetApi(client, 'GOOGLE'))

    if (userOAuth2LoginUrlGetError) {
        dispatch({
            type: userTypes.USER_OAUTH2_LOGIN_URL_GET_FAILURE,
            data: {
                userError: userOAuth2LoginUrlGetError.message
            }
        })
        return null
    }
    dispatch({
        type: userTypes.USER_OAUTH2_LOGIN_URL_GET_SUCCESS,
        data: {
            userOAuth2LoginUrlGetData
        }
    })
    return null
}

export const userOAuth2Login: IUserContextAction<UserOAuth2Login> = ({
    dispatch,
    client,
    router
}) => async () => {
    dispatch({
        type: userTypes.USER_OAUTH2_LOGIN_REQUEST
    })

    const [userOAuth2LoginError, userOAuth2LoginData] = await handleAsync(
        userOAuth2LoginApi(client, router.query.code as string, 'GOOGLE')
    )

    if (userOAuth2LoginError) {
        dispatch({
            type: userTypes.USER_OAUTH2_LOGIN_FAILURE,
            data: {
                userError: userOAuth2LoginError.message
            }
        })
        return null
    }
    const isSet = setOAuth2Cookies(userOAuth2LoginData)

    if (isSet) {
        router.push('/')
        return null
    }

    if (!isSet) {
        router.push('/signin')
        return null
    }

    dispatch({
        type: userTypes.USER_OAUTH2_LOGIN_SUCCESS,
        data: {
            userOAuth2LoginData
        }
    })
    return null
}

export const userOAuth2RefreshAccessToken: IUserContextAction<UserOAuth2RefreshAccessToken> = ({
    dispatch
}) => async () => {
    dispatch({
        type: userTypes.USER_OAUTH2_REFRESH_ACCESS_TOKEN_REQUEST
    })

    const { refreshToken } = getOAuth2Cookies([
        EUserOAuth2TokenKey.REFRESH_TOKEN
    ])
    const [
        userOAuth2RefreshAccessTokenError,
        userOAuth2RefreshAccessTokenData
    ] = await handleAsync(
        userOAuth2RefreshAccessTokenApi(refreshToken, 'GOOGLE')
    )

    if (userOAuth2RefreshAccessTokenError) {
        dispatch({
            type: userTypes.USER_OAUTH2_REFRESH_ACCESS_TOKEN_FAILURE,
            data: {
                userError: userOAuth2RefreshAccessTokenError.message
            }
        })
        return null
    }

    const isSet = setOAuth2Cookies(userOAuth2RefreshAccessTokenData)

    if (!isSet) {
        dispatch({
            type: userTypes.USER_OAUTH2_REFRESH_ACCESS_TOKEN_FAILURE,
            data: {
                userError: userOAuth2RefreshAccessTokenError.message
            }
        })
        return null
    }

    dispatch({
        type: userTypes.USER_OAUTH2_REFRESH_ACCESS_TOKEN_SUCCESS,
        data: {
            userOAuth2RefreshAccessTokenData
        }
    })

    return userOAuth2RefreshAccessTokenData
}

export const userOAuth2Logout: IUserContextAction<UserOAuth2Logout> = ({
    dispatch,
    client,
    router
}) => async () => {
    dispatch({
        type: userTypes.USER_OAUTH2_LOGOUT_REQUEST
    })

    const { refreshToken } = getOAuth2Cookies([
        EUserOAuth2TokenKey.REFRESH_TOKEN
    ])

    const [userOAuth2LogoutError, userOAuth2LogoutData] = await handleAsync(
        userOAuth2LogoutApi(client, refreshToken, 'GOOGLE')
    )

    if (userOAuth2LogoutError) {
        dispatch({
            type: userTypes.USER_OAUTH2_LOGOUT_FAILURE,
            data: {
                userError: userOAuth2LogoutError.message
            }
        })
        return null
    }

    router.push('/signin')

    dispatch({
        type: userTypes.USER_OAUTH2_LOGOUT_SUCCESS,
        data: {
            userOAuth2LogoutData
        }
    })

    removeOAuth2Cookies([
        EUserOAuth2TokenKey.ACCESS_TOKEN,
        EUserOAuth2TokenKey.REFRESH_TOKEN,
        EUserOAuth2TokenKey.EXPIRES_AT,
        EUserOAuth2TokenKey.SCOPE,
        EUserOAuth2TokenKey.ID_TOKEN,
        EUserOAuth2TokenKey.TOKEN_TYPE
    ])

    return null
}

export const userGetMe: IUserContextAction<UserGetMe> = ({
    dispatch,
    client
}) => async () => {
    dispatch({
        type: userTypes.GET_ME_REQUEST
    })

    const { idToken } = getOAuth2Cookies([EUserOAuth2TokenKey.ID_TOKEN])

    if (!idToken) {
        dispatch({
            type: userTypes.GET_ME_FAILURE,
            data: {
                userError: 'Not authenticated'
            }
        })
        return null
    }

    const [userGetMeError, userGetMeData] = await handleAsync(
        userGetMeApi(client)
    )

    if (userGetMeError) {
        dispatch({
            type: userTypes.GET_ME_FAILURE,
            data: {
                userError: userGetMeError.message
            }
        })
        return null
    }

    dispatch({
        type: userTypes.GET_ME_SUCCESS,
        data: {
            userData: userGetMeData
        }
    })

    return null
}

export const getUserLocation: IUserContextAction<GetUserLocation> = ({
    dispatch
}) => async () => {
    dispatch({
        type: userTypes.GET_USER_LOCATION_REQUEST
    })

    if (!navigator.geolocation) {
        dispatch({
            type: userTypes.GET_USER_LOCATION_FAILURE,
            data: {
                userLocationError: 'FAILED_TO_GET_USER_LOCATION'
            }
        })
        return null
    }

    const permission = await navigator.permissions.query({
        name: 'geolocation'
    })

    if (permission.state === 'denied') {
        dispatch({
            type: userTypes.GET_USER_LOCATION_FAILURE,
            data: {
                userLocationError: 'FAILED_TO_GET_USER_LOCATION'
            }
        })
        return null
    }

    const dispatchSuccess = (position: any) => {
        const coordinates = position.coords
        dispatch({
            type: userTypes.GET_USER_LOCATION_SUCCESS,
            data: {
                userLocationData: {
                    longitude: coordinates.longitude,
                    latitude: coordinates.latitude
                }
            }
        })
    }

    const dispatchError = (error: any) => {
        dispatch({
            type: userTypes.GET_USER_LOCATION_FAILURE,
            data: {
                userLocationError: error.message
            }
        })
    }

    if (permission.state === 'granted') {
        navigator.geolocation.getCurrentPosition(dispatchSuccess)
    }

    if (permission.state === 'prompt') {
        navigator.geolocation.getCurrentPosition(
            dispatchSuccess,
            dispatchError,
            options
        )
    }

    permission.onchange = (e: any) => {
        if (e.currentTarget.state === 'granted') {
            navigator.geolocation.getCurrentPosition(dispatchSuccess)
        }

        if (e.currentTarget.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(
                dispatchSuccess,
                dispatchError,
                options
            )
        }
    }

    return null
}

export const setUserMapDistance: IUserContextAction<SetUserMapDistance> = ({
    dispatch
}) => value => {
    dispatch({
        type: userTypes.SET_USER_MAP_DISTANCE,
        data: {
            userLocationData: {
                userMapDistance: value
            }
        }
    })
}
