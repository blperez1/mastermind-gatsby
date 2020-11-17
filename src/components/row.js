import React from "react"

const Row = ({context}) => {
    return (
        <>
            <div className="row">
                <p className="row-header">{context}</p>
                <p className="color-sequence"></p>
                <p className="results"></p>
            </div>
        </>
    )
}

export default Row