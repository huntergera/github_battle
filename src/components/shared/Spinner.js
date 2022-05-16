import React from "react";
import { Bars } from  'react-loader-spinner'

export const Spinner = ({height, width, color}) => {
    return (
        <div className='spinnerWrap'>
            <Bars heigth={height} width={width} color={color} ariaLabel="loading-indicator" />
        </div>
    )
}
