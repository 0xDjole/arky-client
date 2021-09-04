import { ICategory, IPostContext, IUserLocation } from '../..'

export interface IPostGetRandom extends IUserLocation {
    categories: ICategory[]
    matchAllCategories: boolean
}
export type PostGetRandom = (userLocationData: IPostGetRandom) => Promise<void>

export interface IPostActions {
    postGetRandom: PostGetRandom
}

export type IPostContextAction<T> = (context: IPostContext) => T

export type IPostContextActions = {
    [key in keyof IPostActions]: IPostContextAction<IPostActions[key]>
}
