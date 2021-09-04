import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { ICDrawerInterface } from '../../../types'
import styles from './style.module.scss'

const Interface: ICDrawerInterface = ({
    drawerOpened,
    drawerWidth,
    drawerPosition,
    children,
    style
}) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    let drawerStyle

    if (drawerPosition === 'left') {
        if (isTabletOrMobile) {
            drawerStyle = {
                marginLeft: !drawerOpened ? `-${100 + 5}%` : '0%'
            }
        } else {
            drawerStyle = {
                marginLeft: !drawerOpened ? `-${drawerWidth + 5}%` : '0%'
            }
        }
    }
    if (drawerPosition === 'right') {
        if (isTabletOrMobile) {
            drawerStyle = {
                marginRight: !drawerOpened ? `-${100 + 5}%` : '0%'
            }
        } else {
            drawerStyle = {
                marginRight: !drawerOpened ? `-${drawerWidth + 5}%` : '0%'
            }
        }
    }

    return (
        <div
            className={[
                styles.drawer,
                drawerPosition === 'left' ? 'left-0' : 'right-0'
            ].join(' ')}
            style={{
                width: isTabletOrMobile ? '100%' : `${drawerWidth}%`,
                height: `${style.height}px`,
                ...drawerStyle
            }}
        >
            {children}
        </div>
    )
}

export default Interface
