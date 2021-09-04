import axios from 'axios'

import { IUserOAuth2TokenData } from '../../../types'
import { handleAsync } from '../..'

const userOAuth2RefreshAccessTokenApi = async (
    refreshToken: string,
    provider: string
): Promise<IUserOAuth2TokenData> => {
    const [
        userOAuth2RefreshAccessTokenError,
        userOAuth2RefreshAccessTokenData
    ] = await handleAsync(
        axios.post(
            'https://3cm2llblzbenhaohn26uwmxxmu.appsync-api.eu-central-1.amazonaws.com/graphql',
            {
                operationName: 'userOAuth2RefreshAccessToken',
                query: `mutation userOAuth2RefreshAccessToken(
                        $payload: userOAuth2RefreshAccessTokenInput!
                    ) {
                        userOAuth2RefreshAccessToken(payload: $payload) {
                            provider
                            accessToken
                            expiresAt
                            refreshToken
                            scope
                            tokenType
                            idToken
                        }
                    }
                `,
                variables: {
                    payload: {
                        refreshToken,
                        provider
                    }
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'da2-lemtboaawjchdah4n4hfpvv4qi'
                }
            }
        )
    )

    if (userOAuth2RefreshAccessTokenError) {
        throw new Error(userOAuth2RefreshAccessTokenError.message)
    }

    return {
        ...userOAuth2RefreshAccessTokenData.data.userOAuth2Login,
        expiresAt: new Date(
            userOAuth2RefreshAccessTokenData.data.userOAuth2Login.expiresAt
        )
    }
}

export default userOAuth2RefreshAccessTokenApi
