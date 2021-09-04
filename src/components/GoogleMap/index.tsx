import React from 'react'

import { ICGoogleMap } from '../../types'
import Interface from './interface'

const GoogleMap: ICGoogleMap = props => {
    return <Interface {...props} />
}

export default GoogleMap
