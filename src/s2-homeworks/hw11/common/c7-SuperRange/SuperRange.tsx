import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    console.log(props.value);

    // const handleChange = (event: any, newValue: number | number[]) => {
    //     setValue(newValue as number[]);
    // };
    //
    return (
        <Slider
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
