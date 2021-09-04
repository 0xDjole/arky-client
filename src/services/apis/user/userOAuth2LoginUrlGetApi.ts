import { ApolloClient } from '@apollo/client'
import gql from 'graphql-tag'

import { handleAsync } from '../..'

const userOAuth2LoginUrlGetApi = async (
    client: ApolloClient<object>,
    provider: string
): Promise<string> => {
    const [
        userOAuth2LoginUrlGetError,
        userOAuth2LoginUrlGetData
    ] = await handleAsync(
        client.query({
            fetchPolicy: 'no-cache',
            query: gql`
                query userOAuth2LoginUrlGet(
                    $payload: userOAuth2LoginUrlGetInput!
                ) {
                    userOAuth2LoginUrlGet(payload: $payload)
                }
            `,
            variables: {
                payload: {
                    provider
                }
            }
        })
    )

    if (userOAuth2LoginUrlGetError) {
        throw new Error(userOAuth2LoginUrlGetError.message)
    }

    return userOAuth2LoginUrlGetData.data.userOAuth2LoginUrlGet
}

export default userOAuth2LoginUrlGetApi
