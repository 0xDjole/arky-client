import React from 'react'

import { SignInContainer } from '../containers'
import { UserProvider } from '../context'

const SignIn = (): JSX.Element => {
    return (
        <UserProvider>
            <SignInContainer />
        </UserProvider>
    )
}

export default SignIn
