import { IPostState, IUserState } from '..'

export interface ICGoogleMapProps {
    postData: IPostState['postGetRandomData']
    userLocationData: IUserState['userLocationData']
}

export type ICGoogleMap = (props: ICGoogleMapProps) => JSX.Element

export type ICGoogleMapInterfaceProps = ICGoogleMapProps

export type ICGoogleMapInterface = (
    props: ICGoogleMapInterfaceProps
) => JSX.Element
