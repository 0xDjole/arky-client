import React, { memo } from 'react'

import styles from './style.module.scss'

const Loader = memo(
    ({ load }: { load: boolean }): JSX.Element => {
        return load ? (
            <div className={styles.loaderContainer}>
                <div
                    className={styles.loader}
                    style={{
                        border: '2px solid rgba(253, 172, 69, 1)'
                    }}
                >
                    <div
                        style={{
                            animationDelay: '0.1s'
                        }}
                        className={`${styles.loaderAnimation} animate-bounce`}
                    />
                    <div
                        style={{
                            animationDelay: '0.2s'
                        }}
                        className={`${styles.loaderAnimation} animate-bounce`}
                    />
                    <div
                        style={{
                            animationDelay: '0.3s'
                        }}
                        className={`${styles.loaderAnimation} animate-bounce`}
                    />
                </div>
            </div>
        ) : null
    }
)

export default Loader
