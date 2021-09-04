import React from 'react'

import { GoogleCallbackContainer } from '../../containers'
import { UserProvider } from '../../context'

const GoogleCallback = (): JSX.Element => {
    return (
        <UserProvider>
            <GoogleCallbackContainer />
        </UserProvider>
    )
}

export default GoogleCallback
