import { IUserContext, IUserOAuth2TokenData } from '../..'

export type UserOAuth2LoginUrlGet = () => Promise<void>

export type UserOAuth2Login = (code: string) => Promise<void>

export type UserOAuth2RefreshAccessToken = () => Promise<IUserOAuth2TokenData>

export type UserOAuth2Logout = () => Promise<void>

export type UserGetMe = () => Promise<void>

export type GetUserLocation = () => Promise<void>

export type SetUserMapDistance = (value: number) => void

export interface IUserActions {
    userOAuth2LoginUrlGet: UserOAuth2LoginUrlGet
    userOAuth2Login: UserOAuth2Login
    userOAuth2RefreshAccessToken: UserOAuth2RefreshAccessToken
    userOAuth2Logout: UserOAuth2Logout
    userGetMe: UserGetMe
    getUserLocation: GetUserLocation
    setUserMapDistance: SetUserMapDistance
}

export type IUserContextAction<T> = (context: IUserContext) => T

export type IUserContextActions = {
    [key in keyof IUserActions]: IUserContextAction<IUserActions[key]>
}
