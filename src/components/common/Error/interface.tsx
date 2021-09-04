import React from 'react'

import { ICErrorInterface } from '../../../types'
import styles from './style.module.scss'

const Interface: ICErrorInterface = ({ text, className }) => {
    return (
        <div className={styles.errorContainer}>
            <span
                className={`${styles.error} ${className}`}
                style={{
                    backgroundColor: '#ffae49'
                }}
            >
                {text}
            </span>
        </div>
    )
}

export default Interface
