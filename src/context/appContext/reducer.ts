import { IAppReducer } from '../../types'
import initialState from './initialState'
import appTypes from './types'

const userReducer: IAppReducer = (state, { type, data }) => {
    switch (type) {
        case appTypes.TOGGLE_DRAWER: {
            return {
                ...initialState,
                ...state,
                drawer: {
                    ...state.drawer,
                    drawerOpened: data.drawer.drawerOpened
                }
            }
        }

        case appTypes.TOGGLE_DRAWER_POSITION: {
            return {
                ...initialState,
                ...state,
                drawer: {
                    ...state.drawer,
                    drawerPosition: data.drawer.drawerPosition
                }
            }
        }

        case appTypes.TOGGLE_HEADER: {
            return {
                ...initialState,
                ...state,
                header: {
                    ...state.header,
                    headerOpened: data.header.headerOpened
                }
            }
        }

        case appTypes.TOGGLE_HEADER_POSITION: {
            return {
                ...initialState,
                ...state,
                header: {
                    ...state.header,
                    headerPosition: data.header.headerPosition
                }
            }
        }

        case appTypes.TOGGLE_NAVBAR: {
            return {
                ...initialState,
                ...state,
                navbar: {
                    ...state.navbar,
                    navbarOpened: data.navbar.navbarOpened
                }
            }
        }

        case appTypes.TOGGLE_NAVBAR_POSITION: {
            return {
                ...initialState,
                ...state,
                navbar: {
                    ...state.navbar,
                    navbarPosition: data.navbar.navbarPosition
                }
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

export default userReducer
