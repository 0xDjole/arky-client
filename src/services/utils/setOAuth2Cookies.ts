import Cookies from 'js-cookie'

import { IUserOAuth2TokenData } from '../../types'

const setOAuth2Cookies = (oAuth2TokenData: IUserOAuth2TokenData): boolean => {
    if (
        !oAuth2TokenData.provider ||
        !oAuth2TokenData.refreshToken ||
        !oAuth2TokenData.accessToken ||
        !oAuth2TokenData.expiresAt ||
        !oAuth2TokenData.scope ||
        !oAuth2TokenData.tokenType ||
        !oAuth2TokenData.idToken
    )
        return false

    Cookies.set('provider', oAuth2TokenData.provider)

    Cookies.set('refreshToken', oAuth2TokenData.refreshToken)

    Cookies.set('accessToken', oAuth2TokenData.accessToken, {
        expires: oAuth2TokenData.expiresAt
    })

    Cookies.set('expiresAt', oAuth2TokenData.expiresAt.toISOString(), {
        expires: oAuth2TokenData.expiresAt
    })

    Cookies.set('scope', oAuth2TokenData.scope, {
        expires: oAuth2TokenData.expiresAt
    })
    Cookies.set('tokenType', oAuth2TokenData.tokenType, {
        expires: oAuth2TokenData.expiresAt
    })
    Cookies.set('idToken', oAuth2TokenData.idToken, {
        expires: oAuth2TokenData.expiresAt
    })

    return true
}

export default setOAuth2Cookies
