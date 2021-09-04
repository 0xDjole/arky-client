import { categoriesGetFilteredApi, handleAsync } from '../../services'
import {
    ICategory,
    ICategoryContextAction,
    IPostContextAction,
    PostGetRandom,
    SelectCategory,
    ToggleMatchAllCategories
} from '../../types'
import categoryTypes from './types'

export const getCategories: IPostContextAction<PostGetRandom> = ({
    dispatch,
    client
}) => async () => {
    dispatch({
        type: categoryTypes.GET_CATEGORIES_REQUEST
    })

    const [getCategoriesError, getCategoriesData] = await handleAsync(
        categoriesGetFilteredApi(client)
    )

    if (getCategoriesError) {
        dispatch({
            type: categoryTypes.GET_CATEGORIES_FAILURE,
            data: {
                getCategoriesError: getCategoriesError.message
            }
        })
        return null
    }

    dispatch({
        type: categoryTypes.GET_CATEGORIES_SUCCESS,
        data: {
            categoriesData: getCategoriesData
        }
    })

    return null
}

export const selectCategory: ICategoryContextAction<SelectCategory> = ({
    dispatch,
    state
}) => async categoryId => {
    const newCategoriesData = state.categoriesData.map(
        (category: ICategory) => {
            if (category.id === categoryId) {
                return {
                    ...category,
                    selected: !category.selected
                }
            }

            return category
        }
    )

    dispatch({
        type: categoryTypes.SELECT_CATEGORY,
        data: {
            categoriesData: newCategoriesData
        }
    })
}

export const toggleMatchAllCategories: ICategoryContextAction<ToggleMatchAllCategories> = ({
    dispatch,
    state
}) => () => {
    dispatch({
        type: categoryTypes.TOGGLE_ALL_CATEGORIES_MATCHED,
        data: {
            matchAllCategories: !state.matchAllCategories
        }
    })
}
