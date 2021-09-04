import { ApolloClient } from '@apollo/client'
import gql from 'graphql-tag'

import { ICategory } from '../../../types'
import { handleAsync } from '../..'

const categoriesGetFilteredApi = async (
    client: ApolloClient<object>
): Promise<ICategory[]> => {
    const [
        categoriesGetFilteredError,
        categoriesGetFilteredData
    ] = await handleAsync(
        client.query({
            fetchPolicy: 'no-cache',
            query: gql`
                query categoriesGetFiltered(
                    $payload: categoriesGetFilteredInput
                ) {
                    categoriesGetFiltered(payload: $payload) {
                        id
                        name
                        image
                        createdAt
                    }
                }
            `
        })
    )

    if (categoriesGetFilteredError) {
        throw new Error('No categories found')
    }
    const categories: ICategory[] =
        categoriesGetFilteredData.data.categoriesGetFiltered

    return categories.map(categoryItem => ({
        id: categoryItem.id,
        name: categoryItem.name,
        image: categoryItem.image,
        createdAt: categoryItem.createdAt
    }))
}

export default categoriesGetFilteredApi
