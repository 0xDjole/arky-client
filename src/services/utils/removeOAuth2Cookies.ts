import Cookies from 'js-cookie'

import { EUserOAuth2TokenKey, IUserOAuth2TokenData } from '../../types'

const removeOAuth2Cookies = (
    userOAuth2TokenKeys: EUserOAuth2TokenKey[]
): IUserOAuth2TokenData => {
    const keys = [...new Set(userOAuth2TokenKeys)].reduce(
        (accumulated, currentValue) => {
            return {
                ...accumulated,
                [currentValue]: Cookies.remove(currentValue)
            }
        },
        {} as IUserOAuth2TokenData
    )

    return keys
}

export default removeOAuth2Cookies
