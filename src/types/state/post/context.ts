/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloClient } from '@apollo/client'
import { NextRouter } from 'next/router'

import { Action, IPost, IPostActions, IProviderData } from '../..'

export interface IPostState {
    postGetRandomData: IPost
    postGetRandomLoading: boolean
    postGetRandomError: string
}

export interface IPostContext {
    state: IPostState
    dispatch: React.Dispatch<Action>
    client: ApolloClient<object>
    router: NextRouter
}
export type IUsePostContext = () => {
    state: IPostState
    actions: IPostActions
}

export type IPostProvider = (providerData: IProviderData) => React.ReactElement

export type IPostReducer = (state: IPostState, action: Action) => IPostState
