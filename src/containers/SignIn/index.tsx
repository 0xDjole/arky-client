/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { SignIn } from '../../components'
import { useUserContext } from '../../context'

const SignInContainer = (): JSX.Element => {
    const {
        state: {
            userOAuth2LoginUrlGetData,
            userOAuth2LoginUrlGetError,
            userOAuth2LoginUrlGetLoading
        },
        actions: { userOAuth2LoginUrlGet }
    } = useUserContext()

    useEffect(() => {
        userOAuth2LoginUrlGet()
    }, [])

    return (
        <SignIn
            userOAuth2LoginUrlGetData={userOAuth2LoginUrlGetData}
            userOAuth2LoginUrlGetError={userOAuth2LoginUrlGetError}
            userOAuth2LoginUrlGetLoading={userOAuth2LoginUrlGetLoading}
        />
    )
}

export default SignInContainer
