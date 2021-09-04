import { IAppState } from '../../types'
import POSITIONS from './positions'

const initialState: IAppState = {
    drawer: {
        drawerWidth: 25,
        drawerOpened: false,
        drawerPosition: POSITIONS.LEFT
    },
    header: {
        headerHeight: 50,
        headerOpened: false,
        headerPosition: POSITIONS.TOP
    },
    navbar: {
        navbarHeight: 50,
        navbarOpened: true,
        navbarPosition: POSITIONS.BOTTOM
    }
}

export default initialState
