import React from 'react'

import { ICNavbarInterface } from '../../../types'
import styles from './style.module.scss'

const Interface: ICNavbarInterface = ({
    navbarHeight,
    navbarPosition,
    children
}): JSX.Element => {
    return (
        <div
            className={[
                styles.navbar,
                navbarPosition === 'top' ? 'top-0' : 'bottom-0'
            ].join(' ')}
            style={{
                height: `${navbarHeight}px`
            }}
        >
            {children}
        </div>
    )
}

export default Interface
