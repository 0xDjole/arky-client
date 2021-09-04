import { IAppContext } from '../..'

export type ToggleDrawer = (opened?: boolean) => void

export type ToggleDrawerPosition = () => void

export type ToggleHeader = (opened?: boolean) => void

export type ToggleHeaderPosition = () => void

export type ToggleNavbar = (opened?: boolean) => void

export type ToggleNavbarPosition = () => void

export interface IAppActions {
    toggleDrawer: ToggleDrawer
    toggleDrawerPosition: ToggleDrawerPosition
    toggleHeader: ToggleHeader
    toggleHeaderPosition: ToggleHeaderPosition
    toggleNavbar: ToggleNavbar
    toggleNavbarPosition: ToggleNavbarPosition
}

export type IAppContextAction<T> = (context: IAppContext) => T

export type IAppContextActions = {
    [key in keyof IAppActions]: IAppContextAction<IAppActions[key]>
}
