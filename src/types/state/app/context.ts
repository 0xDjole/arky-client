/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloClient } from '@apollo/client'
import { NextRouter } from 'next/router'

import { Action, IProviderData } from '../..'
import { IAppActions } from './actions'

export interface IAppState {
    drawer: {
        drawerWidth: number
        drawerOpened: boolean
        drawerPosition: 'left' | 'right' | any
    }
    header: {
        headerHeight: number
        headerOpened: boolean
        headerPosition: 'top' | 'bottom' | any
    }
    navbar: {
        navbarHeight: number
        navbarOpened: boolean
        navbarPosition: 'top' | 'bottom' | any
    }
}

export interface IAppContext {
    state: IAppState
    dispatch: React.Dispatch<Action>
    client: ApolloClient<object>
    router: NextRouter
}
export type IUseAppContext = () => {
    state: IAppState
    actions: IAppActions
}

export type IAppProvider = (providerData: IProviderData) => React.ReactElement

export type IAppReducer = (state: IAppState, action: Action) => IAppState
