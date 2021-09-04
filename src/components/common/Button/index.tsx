import React from 'react'

import { ICButton } from '../../../types'
import Interface from './interface'

const Button: ICButton = props => {
    return <Interface {...props} />
}

export default Button
