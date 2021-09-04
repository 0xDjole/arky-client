import { ApolloClient } from '@apollo/client'
import gql from 'graphql-tag'

import { IUserOAuth2TokenData } from '../../../types'
import { handleAsync } from '../..'

const userOAuth2LoginApi = async (
    client: ApolloClient<object>,
    code: string,
    provider: string
): Promise<IUserOAuth2TokenData> => {
    const [userOAuth2LoginError, userOAuth2LoginData] = await handleAsync(
        client.mutate({
            fetchPolicy: 'no-cache',
            mutation: gql`
                mutation userOAuth2Login($payload: userOAuth2LoginInput!) {
                    userOAuth2Login(payload: $payload) {
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
                    code,
                    provider
                }
            }
        })
    )

    if (userOAuth2LoginError) {
        throw new Error(userOAuth2LoginError.message)
    }

    return {
        ...userOAuth2LoginData.data.userOAuth2Login,
        expiresAt: new Date(userOAuth2LoginData.data.userOAuth2Login.expiresAt)
    }
}

export default userOAuth2LoginApi
