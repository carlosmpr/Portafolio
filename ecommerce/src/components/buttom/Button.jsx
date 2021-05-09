import React from 'react'
import "./button.scss"
export default function Button({children, ...otehrProps}) {
    return (
        <button className="custom-button" {...otehrProps}>
{children}
        </button>
    )
}
