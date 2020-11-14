import React from "react"

const Button = ({key, context}) => {
    return (
    <button id={key}>{context}</button>
    )
}

export default Button