import { ICategory, SelectCategory } from '..'

export interface ICCategoryProps {
    category: ICategory
    selectCategory: SelectCategory
}

export type ICCategory = (props: ICCategoryProps) => JSX.Element

export type ICCategoryInterfaceProps = ICCategoryProps

export type ICCategoryInterface = (
    props: ICCategoryInterfaceProps
) => JSX.Element

export interface ICCategoryListProps {
    categories: ICategory[]
    categoriesLoading?: boolean
    categoriesError?: string
    selectCategory?: SelectCategory
}

export type ICCategoryList = (props: ICCategoryListProps) => JSX.Element

export type ICCategoryListInterfaceProps = ICCategoryListProps

export type ICCategoryListInterface = (
    props: ICCategoryListInterfaceProps
) => JSX.Element
