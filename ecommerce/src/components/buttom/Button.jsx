import React from 'react'
import "./button.scss"
export default function Button({children, inverted,google,...otehrProps}) {
    return (
        <button className={`custom-button ${inverted ? 'inverted':''} `} {...otehrProps} style={{backgroundColor: google ? 'blue':'' }}>
{children}
        </button>
    )
}
