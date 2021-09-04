import { IUser } from '../..'

export interface IWithAuthenticationExtra {
    user?: IUser
}

export interface IWithAuthenticationProps {
    showLoader: boolean
}

export type IWithAuthentication = <P extends IWithAuthenticationExtra>(
    WrappedComponent: React.FC<P>,
    props: IWithAuthenticationProps
) => React.FC<P>
