import React from "react"
import "../styles/checkbox.css"
const ColorBox = ({colorKey, colorName, radioClasses}) => {
    const [checkbox, checkBoxMask] = radioClasses
    return (
        <>
            <input id={colorKey} className={checkbox} name="color-1" data-color={colorName} type="radio"/>
			<label for={colorKey} className={checkBoxMask}></label>
        </>
    )
}

export default ColorBox