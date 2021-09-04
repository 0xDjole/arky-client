import {
    IAppContextAction,
    ToggleDrawer,
    ToggleDrawerPosition,
    ToggleHeader,
    ToggleHeaderPosition,
    ToggleNavbar,
    ToggleNavbarPosition
} from '../../types'
import POSITIONS from './positions'
import appTypes from './types'

export const toggleDrawer: IAppContextAction<ToggleDrawer> = ({
    dispatch,
    state
}) => opened => {
    dispatch({
        type: appTypes.TOGGLE_DRAWER,
        data: {
            drawer: {
                drawerOpened:
                    opened !== undefined ? opened : !state.drawer.drawerOpened
            }
        }
    })
}

export const toggleDrawerPosition: IAppContextAction<ToggleDrawerPosition> = ({
    dispatch,
    state
}) => () => {
    dispatch({
        type: appTypes.TOGGLE_DRAWER_POSITION,
        data: {
            drawer: {
                drawerPosition:
                    state.drawer.drawerPosition === POSITIONS.LEFT
                        ? POSITIONS.RIGHT
                        : POSITIONS.LEFT
            }
        }
    })
}

export const toggleHeader: IAppContextAction<ToggleHeader> = ({
    dispatch,
    state
}) => opened => {
    dispatch({
        type: appTypes.TOGGLE_HEADER,
        data: {
            header: {
                headerOpened:
                    opened !== undefined ? opened : !state.header.headerOpened
            }
        }
    })
}

export const toggleHeaderPosition: IAppContextAction<ToggleHeaderPosition> = ({
    dispatch,
    state
}) => () => {
    dispatch({
        type: appTypes.TOGGLE_HEADER_POSITION,
        data: {
            header: {
                headerPosition:
                    state.header.headerPosition === POSITIONS.TOP
                        ? POSITIONS.TOP
                        : POSITIONS.BOTTOM
            }
        }
    })
}

export const toggleNavbar: IAppContextAction<ToggleNavbar> = ({
    dispatch,
    state
}) => opened => {
    dispatch({
        type: appTypes.TOGGLE_NAVBAR,
        data: {
            navbar: {
                navbarOpened:
                    opened !== undefined ? opened : !state.navbar.navbarOpened
            }
        }
    })
}

export const toggleNavbarPosition: IAppContextAction<ToggleNavbarPosition> = ({
    dispatch,
    state
}) => () => {
    dispatch({
        type: appTypes.TOGGLE_NAVBAR_POSITION,
        data: {
            navbar: {
                navbarPosition:
                    state.navbar.navbarPosition === POSITIONS.TOP
                        ? POSITIONS.TOP
                        : POSITIONS.BOTTOM
            }
        }
    })
}
