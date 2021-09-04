import { ICategoryContext } from '../..'

export type GetCategories = () => void

export type SelectCategory = (categoryId: string) => void

export type ToggleMatchAllCategories = () => void

export interface ICategoryActions {
    getCategories: GetCategories
    selectCategory: SelectCategory
    toggleMatchAllCategories: ToggleMatchAllCategories
}

export type ICategoryContextAction<T> = (context: ICategoryContext) => T

export type ICategoryContextActions = {
    [key in keyof ICategoryActions]: ICategoryContextAction<
        ICategoryActions[key]
    >
}
