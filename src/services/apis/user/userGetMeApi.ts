import { ApolloClient } from '@apollo/client'
import gql from 'graphql-tag'

import { IUser } from '../../../types'
import { handleAsync } from '../..'

const userGetMeApi = async (client: ApolloClient<object>): Promise<IUser> => {
    const [userGetMeError, userGetMeData] = await handleAsync(
        client.query({
            fetchPolicy: 'no-cache',
            query: gql`
                query userGetMe {
                    userGetMe {
                        id
                        name
                        email
                        image
                        createdAt
                    }
                }
            `
        })
    )

    if (userGetMeError) {
        throw new Error(userGetMeError.message)
    }

    const me = userGetMeData.data.userGetMe

    return {
        id: me.id,
        email: me.email,
        name: me.name,
        image: me.image,
        createdAt: me.createdAt
    }
}

export default userGetMeApi
