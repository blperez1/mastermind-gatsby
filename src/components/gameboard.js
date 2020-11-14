import React from "react"
import Colorbox from "../components/colorbox"


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
                        {/* <Colorbox key="checkbox-2" colorName="brown" radioClasses={["checkBox", "checkBox-Mask bg-brown"]}/>
                        <Colorbox key="checkbox-3" colorName="yellow" radioClasses={["checkBox", "checkBox-Mask bg-yellow"]}/>
                        <Colorbox key="checkbox-4" colorName="orange" radioClasses={["checkBox", "checkBox-Mask bg-orange"]}/>
                        <Colorbox key="checkbox-5" colorName="green" radioClasses={["checkBox", "checkBox-Mask bg-green"]}/> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gameboard