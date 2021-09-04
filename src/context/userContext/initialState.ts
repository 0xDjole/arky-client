import { IUserState } from '../../types'

const initialState: IUserState = {
    userOAuth2LoginUrlGetData: '',
    userOAuth2LoginUrlGetError: '',
    userOAuth2LoginUrlGetLoading: false,
    userOAuth2LoginData: {
        provider: '',
        idToken: '',
        accessToken: '',
        refreshToken: '',
        tokenType: '',
        expiresAt: new Date(),
        scope: ''
    },
    userOAuth2LoginError: '',
    userOAuth2LoginLoading: false,
    userOAuth2RefreshAccessTokenData: {
        provider: '',
        idToken: '',
        accessToken: '',
        refreshToken: '',
        tokenType: '',
        expiresAt: new Date(),
        scope: ''
    },
    userOAuth2RefreshAccessTokenError: '',
    userOAuth2RefreshAccessTokenLoading: false,
    userOAuth2LogoutData: false,
    userOAuth2LogoutError: '',
    userOAuth2LogoutLoading: false,
    userData: {
        id: '',
        name: '',
        email: '',
        image: '',
        createdAt: new Date()
    },
    userLoading: false,
    userError: '',
    userLocationData: {
        longitude: 0,
        latitude: 0,
        userMapDistance: 1
    },
    userLocationLoading: false,
    userLocationError: ''
}

export default initialState
