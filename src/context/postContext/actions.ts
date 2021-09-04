import { handleAsync, postGetRandomApi } from '../../services'
import { IPostContextAction, PostGetRandom } from '../../types'
import postTypes from './types'

export const postGetRandom: IPostContextAction<PostGetRandom> = ({
    dispatch,
    client
}) => async ({
    longitude,
    latitude,
    userMapDistance,
    categories,
    matchAllCategories
}) => {
    dispatch({
        type: postTypes.GET_RANDOM_POST_REQUEST
    })

    const [postGetRandomError, postGetRandomData] = await handleAsync(
        postGetRandomApi(client, {
            longitude,
            latitude,
            userMapDistance,
            categories,
            matchAllCategories
        })
    )

    if (postGetRandomError) {
        dispatch({
            type: postTypes.GET_RANDOM_POST_FAILURE,
            data: {
                postGetRandomError: postGetRandomError.message
            }
        })
        return null
    }

    dispatch({
        type: postTypes.GET_RANDOM_POST_SUCCESS,
        data: {
            postGetRandomData
        }
    })
    return null
}
