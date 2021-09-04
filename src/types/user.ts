import { RequestError } from '.'

export interface IUser {
    id: string
    name: string
    email: string
    image: string
    createdAt: Date
}

export interface IUserOAuth2TokenData {
    provider: string
    idToken: string
    accessToken: string
    refreshToken: string
    tokenType: string
    expiresAt: Date
    scope: string
}

export enum EUserOAuth2TokenKey {
    PROVIDER = 'provider',
    ID_TOKEN = 'idToken',
    ACCESS_TOKEN = 'accessToken',
    REFRESH_TOKEN = 'refreshToken',
    TOKEN_TYPE = 'tokenType',
    EXPIRES_AT = 'expiresAt',
    SCOPE = 'scope'
}

export interface IUserLocation {
    longitude: number
    latitude: number
    userMapDistance: number
}

export type IUserError = RequestError
