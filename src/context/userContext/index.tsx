import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    useApolloClient
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useRouter } from 'next/router'
import React, { useContext, useReducer } from 'react'

import { getOAuth2Cookies } from '../../services/utils'
import {
    EUserOAuth2TokenKey,
    IUserActions,
    IUserContext,
    IUserProvider,
    IUserState,
    IUseUserContext
} from '../../types'
import * as actions from './actions'
import initialState from './initialState'
import reducer from './reducer'

export const UserContext = React.createContext<IUserContext>(null)

export const UserProvider: IUserProvider = ({ children }) => {
    const initState: IUserState = initialState

    const [state, dispatch] = useReducer(reducer, initState)

    const httpLink = createHttpLink({
        uri:
            'https://3cm2llblzbenhaohn26uwmxxmu.appsync-api.eu-central-1.amazonaws.com/graphql'
    })

    const authLink = setContext((_, { headers }) => {
        const { idToken, expiresAt } = getOAuth2Cookies([
            EUserOAuth2TokenKey.ID_TOKEN,
            EUserOAuth2TokenKey.EXPIRES_AT
        ])

        if (expiresAt < new Date()) {
            const refreshInit = actions.userOAuth2RefreshAccessToken({
                state,
                dispatch
            })

            return refreshInit().then(refreshTokenData => {
                return {
                    headers: {
                        ...headers,
                        'x-api-key': 'da2-lemtboaawjchdah4n4hfpvv4qi',
                        authorization: refreshTokenData.idToken || ''
                    }
                }
            })
        }

        return {
            headers: {
                ...headers,
                'x-api-key': 'da2-lemtboaawjchdah4n4hfpvv4qi',
                authorization: idToken || ''
            }
        }
    })

    const client = useApolloClient()
    client.setLink(authLink.concat(httpLink))

    const router = useRouter()

    return (
        <UserContext.Provider
            value={{
                state,
                dispatch,
                client,
                router
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext: IUseUserContext = () => {
    const { state, dispatch, client, router } = useContext(UserContext)

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
        {} as IUserActions
    )

    return {
        state,
        actions: actionsForCalling
    }
}
