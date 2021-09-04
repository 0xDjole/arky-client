import React from 'react'

import { ICPostInterface } from '../../types'
import { Error, Loader } from '..'
import STYLE from './style'
import styles from './style.module.scss'

const Interface: ICPostInterface = ({ postData, postError, postLoading }) => {
    if (postError) {
        return <Error text={postError} className={styles.errorContainer} />
    }

    if (postLoading) {
        return <Loader load={postLoading} />
    }

    if (!postData || !postData.id) {
        return null
    }

    return (
        <div className={styles.mainContainer}>
            <div
                className={`${styles.border} ${STYLE.CARD}`}
                style={{
                    backgroundColor: STYLE.BG_COLOR
                }}
            >
                <div className={styles.center}>
                    <img
                        className={`${styles.image} ${STYLE.CARD_IMAGE}`}
                        alt="Post"
                        src={postData.image}
                    />

                    <div className={styles.postDataNameWrapper}>
                        <div className={styles.postDataBackground}>
                            <span className={styles.postDataName}>
                                {postData.name}
                            </span>
                        </div>
                    </div>

                    <div className={styles.alignItems}>
                        <div className={styles.widthFix}>
                            {postData.categories.map(category => (
                                <div className={styles.resultContainer}>
                                    <img
                                        className={styles.image2}
                                        src={category.image}
                                        alt={category.name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={styles.addressContainer}>
                            {postData.address && (
                                <span>{postData.address}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interface
