/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloClient } from '@apollo/client'
import { NextRouter } from 'next/router'

import { Action, ICategory, ICategoryActions, IProviderData } from '../..'

export interface ICategoryState {
    categoriesData: ICategory[]
    categoriesLoading: boolean
    categoriesError: string
    matchAllCategories: false
}

export interface ICategoryContext {
    state: ICategoryState
    dispatch: React.Dispatch<Action>
    client: ApolloClient<object>
    router: NextRouter
}
export type IUseCategoryContext = () => {
    state: ICategoryState
    actions: ICategoryActions
}

export type ICategoryProvider = (
    providerData: IProviderData
) => React.ReactElement

export type ICategoryReducer = (
    state: ICategoryState,
    action: Action
) => ICategoryState
