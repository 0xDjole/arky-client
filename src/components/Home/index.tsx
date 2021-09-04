import React from 'react'

import { ICHome } from '../../types'
import Interface from './interface'

const Home: ICHome = props => {
    const handleRandomPost = async () => {
        props.postGetRandom({
            ...props.userLocationData,
            categories: props.categoriesData.filter(
                categoryItem => categoryItem.selected
            ),
            matchAllCategories: props.matchAllCategories
        })
    }

    return <Interface {...props} handleRandomPost={handleRandomPost} />
}

export default Home
