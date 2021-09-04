import { useRouter } from 'next/router'
import React from 'react'

import { getOAuth2Cookies } from '../../services'
import { EUserOAuth2TokenKey, ICSignInInterface } from '../../types'
import { Button, Error, Loader } from '..'
import styles from './style.module.scss'

const Interface: ICSignInInterface = ({
    userOAuth2LoginUrlGetData,
    userOAuth2LoginUrlGetError,
    userOAuth2LoginUrlGetLoading
}): JSX.Element => {
    const router = useRouter()
    const renderSignIn = () => {
        if (userOAuth2LoginUrlGetError) {
            return (
                <Error
                    text={userOAuth2LoginUrlGetError}
                    className={styles.errorContainer}
                />
            )
        }

        if (userOAuth2LoginUrlGetLoading) {
            return <Loader load={userOAuth2LoginUrlGetLoading} />
        }

        if (!userOAuth2LoginUrlGetData) {
            return (
                <Error
                    text="Refresh a page"
                    className={styles.errorContainer}
                />
            )
        }

        const { idToken } = getOAuth2Cookies([EUserOAuth2TokenKey.ID_TOKEN])

        if (idToken) {
            router.push('/')
            return null
        }

        return (
            <div className={styles.border}>
                <div className={styles.title}>
                    <span className={styles.textCenter}>Welcome to Tox</span>
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        onClick={() => router.push(userOAuth2LoginUrlGetData)}
                        className={styles.button}
                        backgroundColor={styles.buttonBackground}
                        defaultButton={false}
                    >
                        <img
                            className={styles.image}
                            alt="Google button"
                            src="/google.png"
                        />
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.background}>
            <div className={styles.center}>{renderSignIn()}</div>
        </div>
    )
}
export default Interface
