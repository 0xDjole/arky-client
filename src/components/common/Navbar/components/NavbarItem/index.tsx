import React from 'react'

import { ICNavbarItem } from '../../../../../types'
import Interface from './interface'

const NavbarItem: ICNavbarItem = props => {
    return <Interface {...props} />
}

export default NavbarItem
