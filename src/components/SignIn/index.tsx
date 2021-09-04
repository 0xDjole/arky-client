import React from 'react'

import { ICSignIn } from '../../types'
import Interface from './interface'

const SignIn: ICSignIn = (props): JSX.Element => {
    return <Interface {...props} />
}

export default SignIn
