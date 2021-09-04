import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useContext, useReducer } from 'react'

import {
    IAppActions,
    IAppContext,
    IAppProvider,
    IAppState,
    IUseAppContext
} from '../../types'
import * as actions from './actions'
import initialState from './initialState'
import reducer from './reducer'

export const AppContext = React.createContext<IAppContext>(null)

export const AppProvider: IAppProvider = ({ children }) => {
    const initState: IAppState = initialState

    const [state, dispatch] = useReducer(reducer, initState)
    const client = useApolloClient()
    const router = useRouter()

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
                client,
                router
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext: IUseAppContext = () => {
    const { state, dispatch, client, router } = useContext(AppContext)

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
        {} as IAppActions
    )

    return {
        state,
        actions: actionsForCalling
    }
}
