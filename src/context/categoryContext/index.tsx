import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useContext, useReducer } from 'react'

import {
    ICategoryActions,
    ICategoryContext,
    ICategoryProvider,
    ICategoryState,
    IUseCategoryContext
} from '../../types'
import * as actions from './actions'
import initialState from './initialState'
import reducer from './reducer'

export const CategoryContext = React.createContext<ICategoryContext>(null)

export const CategoryProvider: ICategoryProvider = ({ children }) => {
    const initState: ICategoryState = initialState

    const [state, dispatch] = useReducer(reducer, initState)
    const client = useApolloClient()
    const router = useRouter()

    return (
        <CategoryContext.Provider
            value={{
                state,
                dispatch,
                client,
                router
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategoryContext: IUseCategoryContext = () => {
    const { state, dispatch, client, router } = useContext(CategoryContext)

    const actionsForCalling = Object.keys(actions).reduce(
        (obj, actionName) =>
            Object.assign(obj, {
                [actionName]: actions[actionName]({
                    state,
                    dispatch,
                    client,
                    router
                })
            }),
        {} as ICategoryActions
    )

    return {
        state,
        actions: actionsForCalling
    }
}
