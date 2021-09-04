import { IUserState } from '..'

export type ICGoogleCallbackContainer = () => JSX.Element

export interface ICGoogleCallbackProps {
    userOAuth2LoginData: IUserState['userOAuth2LoginData']
    userOAuth2LoginLoading: IUserState['userOAuth2LoginLoading']
    userOAuth2LoginError: IUserState['userOAuth2LoginError']
}
export type ICGoogleCallback = (props: ICGoogleCallbackProps) => JSX.Element

export type IGoogleCallback = () => void

export type ICGoogleCallbackInterfaceProps = ICGoogleCallbackProps

export type ICGoogleCallbackInterface = (
    props: ICGoogleCallbackInterfaceProps
) => JSX.Element
