import { IPostState, IUserState } from '..'

export interface ICPostProps {
    userLocationData: IUserState['userLocationData']
    postData: IPostState['postGetRandomData']
    postLoading: IPostState['postGetRandomLoading']
    postError: IPostState['postGetRandomError']
}

export type ICPost = (props: ICPostProps) => JSX.Element

export type ICPostInterfaceProps = ICPostProps

export type ICPostInterface = (props: ICPostInterfaceProps) => JSX.Element
