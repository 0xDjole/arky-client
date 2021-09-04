import { ApolloClient } from '@apollo/client'
import { NextRouter } from 'next/router'

import {
    Action,
    IProviderData,
    IUser,
    IUserActions,
    IUserOAuth2TokenData
} from '../..'

export interface IUserState {
    userOAuth2LoginUrlGetData: string
    userOAuth2LoginUrlGetError: string
    userOAuth2LoginUrlGetLoading: boolean
    userOAuth2LoginData: IUserOAuth2TokenData
    userOAuth2LoginError: string
    userOAuth2LoginLoading: boolean
    userOAuth2RefreshAccessTokenData: IUserOAuth2TokenData
    userOAuth2RefreshAccessTokenError: string
    userOAuth2RefreshAccessTokenLoading: boolean
    userOAuth2LogoutData: boolean
    userOAuth2LogoutError: string
    userOAuth2LogoutLoading: boolean
    userData: IUser
    userLoading: boolean
    userError: string
    userLocationData: {
        longitude: number
        latitude: number
        userMapDistance: number
    }
    userLocationLoading: boolean
    userLocationError: string
}

export interface IUserContext {
    state: IUserState
    dispatch: React.Dispatch<Action>
    client?: ApolloClient<object>
    router?: NextRouter
}
export type IUseUserContext = () => {
    state: IUserState
    actions: IUserActions
}

export type IUserProvider = (providerData: IProviderData) => React.ReactElement

export type IUserReducer = (state: IUserState, action: Action) => IUserState
