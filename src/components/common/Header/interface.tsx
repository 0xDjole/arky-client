import React from 'react'

import { ICHeaderInterface } from '../../../types'
import styles from './style.module.scss'

const Interface: ICHeaderInterface = ({
    headerOpened,
    headerHeight,
    headerPosition,
    children,
    reverse,
    style
}) => {
    let headerStyle

    if (headerPosition === 'top') {
        headerStyle = {
            marginTop: !headerOpened
                ? `-${headerHeight + 150}px`
                : style.marginTop
        }
    }
    if (headerPosition === 'bottom') {
        headerStyle = {
            marginBottom: !headerOpened
                ? `-${headerHeight + 150}px`
                : style.marginBottom
        }
    }

    return (
        <div
            className={[
                styles.headerContainer,
                headerPosition === 'top' ? 'top-0' : 'bottom-0',
                reverse ? 'flex-row-reverse' : ''
            ].join(' ')}
            style={{
                height: `${headerHeight}px`,
                ...headerStyle
            }}
        >
            {children}
        </div>
    )
}

export default Interface
