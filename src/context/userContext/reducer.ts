import { IUserReducer } from '../../types'
import initialState from './initialState'
import userTypes from './types'

const userReducer: IUserReducer = (state, { type, data }) => {
    switch (type) {
        case userTypes.USER_OAUTH2_LOGIN_URL_GET_REQUEST: {
            return {
                ...initialState,
                ...state,
                userOAuth2LoginUrlGetLoading: true,
                userOAuth2LoginUrlGetData:
                    initialState.userOAuth2LoginUrlGetData,
                userOAuth2LoginUrlGetError: ''
            }
        }

        case userTypes.USER_OAUTH2_LOGIN_URL_GET_SUCCESS: {
            return {
                ...initialState,
                ...state,
                userOAuth2LoginUrlGetLoading: false,
                userOAuth2LoginUrlGetData: data.userOAuth2LoginUrlGetData,
                userOAuth2LoginUrlGetError: ''
            }
        }

        case userTypes.USER_OAUTH2_LOGIN_URL_GET_FAILURE: {
            return {
                ...initialState,
                ...state,
                userOAuth2LoginUrlGetLoading: false,
                userOAuth2LoginUrlGetData:
                    initialState.userOAuth2LoginUrlGetData,
                userOAuth2LoginUrlGetError: data.userOAuth2LoginUrlGetError
            }
        }

        case userTypes.USER_OAUTH2_LOGIN_REQUEST: {
            return {
                ...initialState,
                ...state,
                userOAuth2LoginLoading: true,
                userOAuth2LoginData: initialState.userOAuth2LoginData,
                userOAuth2LoginError: ''
            }
        }

        case userTypes.USER_OAUTH2_LOGIN_SUCCESS: {
            return {
                ...initialState,
                ...state,
                userOAuth2LoginLoading: false,
                userOAuth2LoginData: data.userOAuth2LoginData,
                userOAuth2LoginError: ''
            }
        }

        case userTypes.USER_OAUTH2_LOGIN_FAILURE: {
            return {
                ...initialState,
                ...state,
                userOAuth2LoginLoading: false,
                userOAuth2LoginData: initialState.userOAuth2LoginData,
                userOAuth2LoginError: data.userOAuth2LoginError
            }
        }

        case userTypes.USER_OAUTH2_REFRESH_ACCESS_TOKEN_REQUEST: {
            return {
                ...initialState,
                ...state,
                userOAuth2RefreshAccessTokenLoading: true,
                userOAuth2RefreshAccessTokenData:
                    initialState.userOAuth2RefreshAccessTokenData,
                userOAuth2RefreshAccessTokenError: ''
            }
        }

        case userTypes.USER_OAUTH2_REFRESH_ACCESS_TOKEN_SUCCESS: {
            return {
                ...initialState,
                ...state,
                userOAuth2RefreshAccessTokenLoading: false,
                userOAuth2RefreshAccessTokenData:
                    data.userOAuth2RefreshAccessTokenData,
                userOAuth2RefreshAccessTokenError: ''
            }
        }

        case userTypes.USER_OAUTH2_REFRESH_ACCESS_TOKEN_FAILURE: {
            return {
                ...initialState,
                ...state,
                userOAuth2RefreshAccessTokenLoading: false,
                userOAuth2RefreshAccessTokenData:
                    initialState.userOAuth2RefreshAccessTokenData,
                userOAuth2RefreshAccessTokenError:
                    data.userOAuth2RefreshAccessTokenError
            }
        }

        case userTypes.USER_OAUTH2_LOGOUT_REQUEST: {
            return {
                ...initialState,
                ...state,
                userOAuth2LogoutLoading: true,
                userOAuth2LogoutData: initialState.userOAuth2LogoutData,
                userOAuth2LogoutError: ''
            }
        }

        case userTypes.USER_OAUTH2_LOGOUT_SUCCESS: {
            return {
                ...initialState,
                ...state,
                userOAuth2LogoutLoading: false,
                userOAuth2LogoutData: data.userOAuth2LogoutData,
                userOAuth2LogoutError: ''
            }
        }

        case userTypes.USER_OAUTH2_LOGOUT_FAILURE: {
            return {
                ...initialState,
                ...state,
                userOAuth2LogoutLoading: false,
                userOAuth2LogoutData: initialState.userOAuth2LogoutData,
                userOAuth2LogoutError: data.userOAuth2LogoutError
            }
        }

        case userTypes.GET_ME_REQUEST: {
            return {
                ...initialState,
                ...state,
                userLoading: true,
                userData: initialState.userData,
                userError: ''
            }
        }

        case userTypes.GET_ME_SUCCESS: {
            return {
                ...initialState,
                ...state,
                userLoading: false,
                userData: data.userData,
                userError: ''
            }
        }

        case userTypes.GET_ME_FAILURE: {
            return {
                ...initialState,
                ...state,
                userLoading: false,
                userData: initialState.userData,
                userError: data.userError
            }
        }

        case userTypes.GET_USER_LOCATION_REQUEST: {
            return {
                ...initialState,
                ...state,
                userLocationLoading: true,
                userLocationData: initialState.userLocationData,
                userLocationError: ''
            }
        }

        case userTypes.GET_USER_LOCATION_SUCCESS: {
            return {
                ...initialState,
                ...state,
                userLocationLoading: false,
                userLocationData: {
                    ...state.userLocationData,
                    ...data.userLocationData
                },
                userLocationError: ''
            }
        }

        case userTypes.GET_USER_LOCATION_FAILURE: {
            return {
                ...initialState,
                ...state,
                userLocationLoading: false,
                userLocationData: initialState.userLocationData,
                userLocationError: data.userLocationError
            }
        }
        case userTypes.SET_USER_MAP_DISTANCE: {
            return {
                ...initialState,
                ...state,
                userLocationData: {
                    ...state.userLocationData,
                    userMapDistance: data.userLocationData.userMapDistance
                }
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

export default userReducer
