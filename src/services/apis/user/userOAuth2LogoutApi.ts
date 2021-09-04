import { ApolloClient } from '@apollo/client'
import gql from 'graphql-tag'

import { handleAsync } from '../..'

const userOAuth2LogoutApi = async (
    client: ApolloClient<object>,
    token: string,
    provider: string
): Promise<string> => {
    const [userOAuth2LogoutError, userOAuth2LogoutData] = await handleAsync(
        client.mutate({
            fetchPolicy: 'no-cache',
            mutation: gql`
                mutation userOAuth2Logout($payload: userOAuth2LogoutInput!) {
                    userOAuth2Logout(payload: $payload)
                }
            `,
            variables: {
                payload: {
                    token,
                    provider
                }
            }
        })
    )

    if (userOAuth2LogoutError) {
        throw new Error(userOAuth2LogoutError.message)
    }

    return userOAuth2LogoutData.data.userOAuth2Logout
}

export default userOAuth2LogoutApi
