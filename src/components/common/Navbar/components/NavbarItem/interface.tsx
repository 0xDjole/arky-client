import React from 'react'

import { ICNavbarItemInterface } from '../../../../../types'
import { Button } from '../../../..'
import styles from './style.module.scss'

const Interface: ICNavbarItemInterface = ({
    children,
    onClick,
    className,
    disabled = false
}) => {
    return (
        <Button
            disabled={disabled}
            onClick={onClick}
            className={[styles.button, className || ''].join(' ')}
            defaultButton={false}
        >
            {children}
        </Button>
    )
}

export default Interface
