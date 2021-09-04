import React from 'react'

import { ICGoogleCallback } from '../../types'
import Interface from './interface'

const GoogleCallback: ICGoogleCallback = (props): JSX.Element => {
    return <Interface {...props} />
}

export default GoogleCallback
