import React from "react"
import Colorbox from "../components/colorbox"
import ColorCell from "../components/colorcell"


const Gameboard = () => {
    const colorOptions = [,"blue", "brown", "yellow", "orange", "green", "pink"]
    return (
        <div id="gameBoard">
            <div className="colorSelections">
                <div className="colorField">
                    <p>Color Keys:</p>
                    <div className="colorOptions">
                        {colorOptions.map((color, i) => {
                            console.log(i)
                            return <Colorbox colorKey={`checkbox-${i}`} colorName={color} radioClasses={["checkBox", `checkBox-Mask bg-${color}`]}/>
                        })}
                    </div>
                    <div id="colorSequence">
                        {/* id doesn't render */}
                        <ColorCell key="color-1" cellClasses="cell bg-grey"></ColorCell>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gameboard