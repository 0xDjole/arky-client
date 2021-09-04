import { IUserState } from '..'

export type ICSignInContainer = () => JSX.Element

export interface ICSignInProps {
    userOAuth2LoginUrlGetData: IUserState['userOAuth2LoginUrlGetData']
    userOAuth2LoginUrlGetLoading: IUserState['userOAuth2LoginUrlGetLoading']
    userOAuth2LoginUrlGetError: IUserState['userOAuth2LoginUrlGetError']
}
export type ICSignIn = (props: ICSignInProps) => JSX.Element

export type ISignIn = () => void

export type ICSignInInterfaceProps = ICSignInProps

export type ICSignInInterface = (props: ICSignInInterfaceProps) => JSX.Element
