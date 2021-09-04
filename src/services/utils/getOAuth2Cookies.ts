import Cookies from 'js-cookie'

import { EUserOAuth2TokenKey, IUserOAuth2TokenData } from '../../types'

const getOAuth2Cookies = (
    userOAuth2TokenKeys: EUserOAuth2TokenKey[]
): IUserOAuth2TokenData => {
    const keys = [...new Set(userOAuth2TokenKeys)].reduce(
        (accumulated, currentValue) => {
            return {
                ...accumulated,
                [currentValue]: Cookies.get(currentValue)
            }
        },
        {} as IUserOAuth2TokenData
    )

    return keys
}

export default getOAuth2Cookies
