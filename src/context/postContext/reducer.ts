import { IPostReducer } from '../../types'
import initialState from './initialState'
import postTypes from './types'

const postReducer: IPostReducer = (state, { type, data }) => {
    switch (type) {
        case postTypes.GET_RANDOM_POST_REQUEST: {
            return {
                ...initialState,
                ...state,
                postGetRandomLoading: true,
                postGetRandomError: ''
            }
        }

        case postTypes.GET_RANDOM_POST_SUCCESS: {
            return {
                ...initialState,
                ...state,
                postGetRandomLoading: false,
                postGetRandomData: data.postGetRandomData,
                postGetRandomError: ''
            }
        }

        case postTypes.GET_RANDOM_POST_FAILURE: {
            return {
                ...initialState,
                ...state,
                postGetRandomLoading: false,
                postGetRandomData: initialState.postGetRandomData,
                postGetRandomError: data.postGetRandomError
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

export default postReducer
