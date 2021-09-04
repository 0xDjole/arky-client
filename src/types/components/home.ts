import {
    IAppActions,
    IPostActions,
    IPostState,
    IUser,
    IUserActions,
    IUserState,
    SelectCategory,
    ToggleMatchAllCategories
} from '..'
import { IAppState, ICategoryState } from '../state'

export interface IHomeContainerProps {
    user?: IUser
}

export type ICHomeContainer = (props: IHomeContainerProps) => JSX.Element

export interface ICHomeProps {
    postGetRandomLoading: IPostState['postGetRandomLoading']
    postGetRandomData: IPostState['postGetRandomData']
    postGetRandomError: IPostState['postGetRandomError']
    postGetRandom: IPostActions['postGetRandom']
    userLocationData: IUserState['userLocationData']
    categoriesData: ICategoryState['categoriesData']
    matchAllCategories: ICategoryState['matchAllCategories']
}

export type ICHome = (props: ICHomeProps) => JSX.Element

export interface ICHomeInterfaceProps extends ICHomeProps {
    handleRandomPost: () => void
}

export type ICHomeInterface = (props: ICHomeInterfaceProps) => JSX.Element

export interface ICHomeDrawerProps {
    categoriesLoading: ICategoryState['categoriesLoading']
    categoriesError: ICategoryState['categoriesError']
    toggleDrawer: IAppActions['toggleDrawer']
    drawerWidth: IAppState['drawer']['drawerWidth']
    drawerOpened: IAppState['drawer']['drawerOpened']
    drawerPosition: IAppState['drawer']['drawerPosition']
    userLocationData: IUserState['userLocationData']
    setUserMapDistance: IUserActions['setUserMapDistance']
    categoriesData: ICategoryState['categoriesData']
    style: React.CSSProperties
    selectCategory: SelectCategory
    matchAllCategories: boolean
    toggleMatchAllCategories: ToggleMatchAllCategories
}

export type ICHomeDrawer = (props: ICHomeDrawerProps) => JSX.Element

export interface ICHomeHeaderProps {
    toggleDrawer: IAppActions['toggleDrawer']
    drawerWidth: IAppState['drawer']['drawerWidth']
    drawerPosition: IAppState['drawer']['drawerPosition']
    userLocationData: IUserState['userLocationData']
    style: React.CSSProperties
    headerOpened: IAppState['header']['headerOpened']
    headerHeight: IAppState['header']['headerHeight']
    headerPosition: IAppState['header']['headerPosition']
    toggleHeader: IAppActions['toggleHeader']
    toggleHeaderPosition: IAppActions['toggleHeaderPosition']
    categoriesData: ICategoryState['categoriesData']
    postGetRandom: IPostActions['postGetRandom']
    matchAllCategories: ICategoryState['matchAllCategories']
}

export type ICHomeHeader = (props: ICHomeHeaderProps) => JSX.Element

export interface ICHomeNavbarProps {
    navbarPosition: IAppState['navbar']['navbarPosition']
    navbarHeight: IAppState['navbar']['navbarHeight']
    navbarOpened: IAppState['navbar']['navbarOpened']
    toggleNavbar: IAppActions['toggleNavbar']
    toggleNavbarPosition: IAppActions['toggleNavbarPosition']
    userOAuth2Logout: IUserActions['userOAuth2Logout']
    reverse: boolean
}

export type ICHomeNavbar = (props: ICHomeNavbarProps) => JSX.Element
