import React from 'react'
import { AiFillHome, AiOutlineHistory } from 'react-icons/ai'
import { RiLogoutBoxRLine } from 'react-icons/ri'

import { Navbar, NavbarItem } from '../../../../components'
import { ICHomeNavbar } from '../../../../types'
import styles from './style.module.scss'

const HomeNavbar: ICHomeNavbar = ({
    reverse,
    navbarPosition,
    navbarHeight,
    navbarOpened,
    toggleNavbar,
    toggleNavbarPosition,
    userOAuth2Logout
}) => {
    return (
        <Navbar
            navbarOpened={navbarOpened}
            navbarHeight={navbarHeight}
            navbarPosition={navbarPosition}
            toggleNavbar={toggleNavbar}
            toggleNavbarPosition={toggleNavbarPosition}
            reverse={reverse}
        >
            <>
                <NavbarItem disabled>
                    <AiOutlineHistory />
                </NavbarItem>
                <NavbarItem className={styles.navbarItem}>
                    <AiFillHome fill="#eba55c" />
                </NavbarItem>
                <NavbarItem onClick={() => userOAuth2Logout()}>
                    <RiLogoutBoxRLine />
                </NavbarItem>
            </>
        </Navbar>
    )
}

export default HomeNavbar
