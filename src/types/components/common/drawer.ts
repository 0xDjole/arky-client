import { IAppActions, IAppState } from '../../state'

export interface ICDrawerProps {
    drawerWidth: IAppState['drawer']['drawerWidth']
    drawerOpened: IAppState['drawer']['drawerOpened']
    drawerPosition: IAppState['drawer']['drawerPosition']
    toggleDrawer: IAppActions['toggleDrawer']
    children: React.ReactChild
    style?: React.CSSProperties
}

export type ICDrawer = (props: ICDrawerProps) => JSX.Element

export type ICDrawerInterfaceProps = ICDrawerProps

export type ICDrawerInterface = (props: ICDrawerInterfaceProps) => JSX.Element
