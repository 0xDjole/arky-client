/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { GoogleCallback } from '../../components'
import { useUserContext } from '../../context'

const GoogleCallbackContainer = (): JSX.Element => {
    const router = useRouter()

    const {
        state: {
            userOAuth2LoginData,
            userOAuth2LoginError,
            userOAuth2LoginLoading
        },
        actions: { userOAuth2Login }
    } = useUserContext()

    useEffect(() => {
        if (!router.isReady) return
        userOAuth2Login(router.query.code as string)
    }, [router.isReady])

    return (
        <GoogleCallback
            userOAuth2LoginData={userOAuth2LoginData}
            userOAuth2LoginError={userOAuth2LoginError}
            userOAuth2LoginLoading={userOAuth2LoginLoading}
        />
    )
}

export default GoogleCallbackContainer
