import React from 'react'

import { ICPost } from '../../types'
import Interface from './interface'

const Post: ICPost = props => {
    return <Interface {...props} />
}

export default Post
