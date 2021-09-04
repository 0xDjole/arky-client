import { useRouter } from 'next/router'
import React from 'react'

import { ICGoogleCallbackInterface } from '../../types'
import { Error, Loader } from '..'
import styles from './style.module.scss'

const Interface: ICGoogleCallbackInterface = ({
    userOAuth2LoginData,
    userOAuth2LoginError,
    userOAuth2LoginLoading
}): JSX.Element => {
    const router = useRouter()

    if (userOAuth2LoginError) {
        return (
            <Error
                text={userOAuth2LoginError}
                className={styles.errorContainer}
            />
        )
    }

    if (
        userOAuth2LoginLoading ||
        !userOAuth2LoginData.accessToken ||
        !router.isReady
    ) {
        return (
            <div className={styles.loaderContainer}>
                <div className={styles.loaderWrapper}>
                    <Loader load />
                </div>
            </div>
        )
    }

    return null
}
export default Interface
