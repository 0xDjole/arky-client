import { RequestError } from '.'

export interface ICategory {
    id: string
    name: string
    image: string
    createdAt: Date
    selected?: boolean
}

export type ICategoryError = RequestError
