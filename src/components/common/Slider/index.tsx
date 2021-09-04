import React from 'react'

import { ICSlider } from '../../../types'
import Interface from './interface'

const Slider: ICSlider = ({
    setUserMapDistance,
    userMapDistance,
    label
}): JSX.Element => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const distanceValue = Number(e.target.value)

        setUserMapDistance(distanceValue)
    }

    return (
        <Interface
            onChange={handleOnChange}
            value={userMapDistance}
            label={label}
        />
    )
}

export default Slider
