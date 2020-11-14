import React from "React"

const ColorCell = ({key, cellClasses}) => {
    return (
        <>
            <p id={key} className={cellClasses}></p>
        </>
    )
}

export default ColorCell