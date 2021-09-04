import { ICategoryReducer } from '../../types'
import initialState from './initialState'
import categoryTypes from './types'

const categoryReducer: ICategoryReducer = (state, { type, data }) => {
    switch (type) {
        case categoryTypes.GET_CATEGORIES_REQUEST: {
            return {
                ...initialState,
                ...state,
                categoriesLoading: true,
                categoriesError: ''
            }
        }

        case categoryTypes.GET_CATEGORIES_SUCCESS: {
            return {
                ...initialState,
                ...state,
                categoriesLoading: false,
                categoriesData: data.categoriesData,
                categoriesError: ''
            }
        }

        case categoryTypes.GET_CATEGORIES_FAILURE: {
            return {
                ...initialState,
                ...state,
                categoriesLoading: false,
                categoriesData: initialState.categoriesData,
                categoriesError: data.categoriesError
            }
        }

        case categoryTypes.SELECT_CATEGORY: {
            return {
                ...initialState,
                ...state,
                categoriesData: data.categoriesData
            }
        }

        case categoryTypes.TOGGLE_ALL_CATEGORIES_MATCHED: {
            return {
                ...initialState,
                ...state,
                matchAllCategories: data.matchAllCategories
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

export default categoryReducer
