import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useContext, useReducer } from 'react'

import {
    IPostActions,
    IPostContext,
    IPostProvider,
    IPostState,
    IUsePostContext
} from '../../types'
import * as actions from './actions'
import initialState from './initialState'
import reducer from './reducer'

export const PostContext = React.createContext<IPostContext>(null)

export const PostProvider: IPostProvider = ({ children }) => {
    const initState: IPostState = initialState

    const [state, dispatch] = useReducer(reducer, initState)
    const client = useApolloClient()
    const router = useRouter()

    return (
        <PostContext.Provider
            value={{
                state,
                dispatch,
                client,
                router
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export const usePostContext: IUsePostContext = () => {
    const { state, dispatch, client, router } = useContext(PostContext)

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
        {} as IPostActions
    )

    return {
        state,
        actions: actionsForCalling
    }
}
