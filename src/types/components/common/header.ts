import { IAppActions, IAppState } from '../..'

export interface ICHeaderProps {
    headerHeight: IAppState['header']['headerHeight']
    headerOpened: IAppState['header']['headerOpened']
    headerPosition: IAppState['header']['headerPosition']
    toggleHeader: IAppActions['toggleHeader']
    toggleHeaderPosition: IAppActions['toggleHeaderPosition']
    children: React.ReactChild
    reverse: boolean
    style?: React.CSSProperties
}

export type ICHeader = (props: ICHeaderProps) => JSX.Element

export type ICHeaderInterfaceProps = ICHeaderProps

export type ICHeaderInterface = (props: ICHeaderInterfaceProps) => JSX.Element
