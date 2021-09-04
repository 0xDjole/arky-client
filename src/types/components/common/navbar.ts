import { IAppActions, IAppState } from '../..'

export interface ICNavbarProps {
    navbarHeight: IAppState['navbar']['navbarHeight']
    navbarOpened: IAppState['navbar']['navbarOpened']
    navbarPosition: IAppState['navbar']['navbarPosition']
    toggleNavbar: IAppActions['toggleNavbar']
    toggleNavbarPosition: IAppActions['toggleNavbarPosition']
    children: React.ReactChild
    reverse: boolean
    style?: React.CSSProperties
}

export type ICNavbar = (props: ICNavbarProps) => JSX.Element

export type ICNavbarInterfaceProps = ICNavbarProps

export type ICNavbarInterface = (props: ICNavbarInterfaceProps) => JSX.Element

export interface ICNavbarItemProps {
    children: JSX.Element
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
    disabled?: boolean
}

export type ICNavbarItem = (props: ICNavbarItemProps) => JSX.Element

export type ICNavbarItemInterfaceProps = ICNavbarItemProps

export type ICNavbarItemInterface = (
    props: ICNavbarItemInterfaceProps
) => JSX.Element
