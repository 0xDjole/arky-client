import React from 'react'

import { ICSliderInterface } from '../../../types'
import styles from './style.module.scss'

const Interface: ICSliderInterface = ({ onChange, value, label }) => {
    return (
        <div className={styles.slider}>
            {label && <span className={styles.label}>{label}</span>}
            <input
                className={styles.input}
                type="range"
                min="1"
                max="1000"
                onChange={onChange}
                value={value}
            />
            <div className={styles.distance}>
                <span>{value}</span>
                <span>km</span>
            </div>
        </div>
    )
}

export default Interface
