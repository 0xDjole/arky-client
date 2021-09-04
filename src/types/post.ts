import { ICategory, RequestError } from '.'

export interface Location {
    longitude: number
    latitude: number
}

export interface IPost {
    id: string
    name: string
    image: string
    categories?: ICategory[]
    location: Location
    createdAt: Date
    address?: string
    city?: string
    country?: string
}

export type IPostError = RequestError
