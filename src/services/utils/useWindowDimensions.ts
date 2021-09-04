import { useEffect, useState } from 'react'

import { IDimension } from '../../types'

const getWindowDimensions = (): IDimension => {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height
    }
}

export default (): IDimension => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}
