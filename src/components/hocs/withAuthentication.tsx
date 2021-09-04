/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useUserContext } from '../../context'
import { removeOAuth2Cookies } from '../../services'
import { EUserOAuth2TokenKey, IWithAuthentication } from '../../types'
import { Loader } from '..'
import styles from './style.module.scss'

const withAuthentication: IWithAuthentication = (
    WrappedComponent,
    { showLoader }
) => {
    return props => {
        const {
            state: { userData, userLoading, userError },
            actions: { userGetMe }
        } = useUserContext()
        const router = useRouter()

        useEffect(() => {
            userGetMe()
        }, [])

        if (userError) {
            removeOAuth2Cookies([
                EUserOAuth2TokenKey.ACCESS_TOKEN,
                EUserOAuth2TokenKey.REFRESH_TOKEN,
                EUserOAuth2TokenKey.EXPIRES_AT,
                EUserOAuth2TokenKey.SCOPE,
                EUserOAuth2TokenKey.ID_TOKEN,
                EUserOAuth2TokenKey.TOKEN_TYPE
            ])
            router.push('/signin')
        }

        if (showLoader && (userLoading || !userData.id)) {
            return (
                <div className={styles.loaderContainer}>
                    <div className={styles.loaderWrapper}>
                        <Loader load />
                    </div>
                </div>
            )
        }

        return <WrappedComponent {...props} user={userData} />
    }
}

export default withAuthentication
