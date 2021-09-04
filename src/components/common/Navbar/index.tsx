import React from 'react'

import { ICNavbar } from '../../../types'
import { NavbarItem } from './components'
import Interface from './interface'

const Navbar: ICNavbar = (props): JSX.Element => {
    return <Interface {...props} />
}

export default Navbar

export { NavbarItem }
