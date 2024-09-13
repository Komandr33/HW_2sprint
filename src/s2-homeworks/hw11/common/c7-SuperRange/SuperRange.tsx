import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
          color={'secondary'}
          value={props.value}
          onChange={props.onChange}
          max={100}
          min={0}
          valueLabelDisplay={'auto'}
          sx={{
            color: '#00CC22',
            width: 150,
          }}
          {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
