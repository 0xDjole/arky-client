import React from 'react'

import { ICButtonInterface } from '../../../types'
import styles from './style.module.scss'

const Interface: ICButtonInterface = ({
    onClick,
    text,
    className,
    rounded,
    children,
    backgroundColor,
    style,
    disabled = false,
    defaultButton = true
}) => {
    const buttonClassName = [
        styles.focus,
        defaultButton ? styles.defaultButton : '',
        className,
        rounded || styles.rounded,
        disabled ? styles.disabled : styles.notDisabled
    ].join(' ')

    return (
        <button
            disabled={disabled}
            className={buttonClassName}
            style={{
                ...style,
                backgroundColor:
                    backgroundColor ||
                    (defaultButton ? '#ffae49' : 'transparent')
            }}
            type="button"
            onClick={onClick}
        >
            {text && <span className={styles.text}>{text}</span>}
            {children}
        </button>
    )
}

export default Interface
