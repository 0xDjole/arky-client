import { ApolloClient } from '@apollo/client'
import gql from 'graphql-tag'

import { IPost, IPostGetRandom } from '../../../types'
import { handleAsync } from '../..'

const postGetRandomApi = async (
    client: ApolloClient<object>,
    postGetRandomInput: IPostGetRandom
): Promise<IPost> => {
    const [postGetRandomError, postGetRandomData] = await handleAsync(
        client.query({
            fetchPolicy: 'no-cache',
            query: gql`
                query postGetRandom($payload: postGetRandomInput!) {
                    postGetRandom(payload: $payload) {
                        id
                        name
                        image
                        createdAt
                        location {
                            latitude
                            longitude
                        }
                        categories {
                            id
                            name
                            image
                        }
                        address
                        city
                        country
                    }
                }
            `,
            variables: {
                payload: {
                    location: {
                        latitude: postGetRandomInput.latitude,
                        longitude: postGetRandomInput.longitude
                    },
                    distance: postGetRandomInput.userMapDistance * 1000,
                    categoryNames: postGetRandomInput.categories.map(
                        categoryItem => categoryItem.name
                    ),
                    matchAllCategories: postGetRandomInput.matchAllCategories
                }
            }
        })
    )

    if (postGetRandomError) {
        throw new Error('No location found, increase the distance')
    }
    const randomPost = postGetRandomData.data.postGetRandom

    return {
        id: randomPost.id,
        name: randomPost.name,
        image: randomPost.image,
        categories: randomPost.categories,
        location: {
            latitude: randomPost.location.latitude,
            longitude: randomPost.location.longitude
        },
        address: randomPost.address,
        city: randomPost.city,
        country: randomPost.country,
        createdAt: randomPost.createdAt
    }
}

export default postGetRandomApi
