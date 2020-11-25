import React from "react"
import Colorbox from "../components/colorbox"
import ColorCell from "../components/colorcell"
import Button from "../components/button"
import Row from "../components/row"


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
                </div>
                <div id="colorSequence">
                        {/* id doesn't render */}
                        <ColorCell key="color-1" cellClasses="cell bg-grey"></ColorCell>
                        <ColorCell key="color-2" cellClasses="cell bg-grey"></ColorCell>
                        <ColorCell key="color-3" cellClasses="cell bg-grey"></ColorCell>
                        <ColorCell key="color-4" cellClasses="cell bg-grey"></ColorCell>
                    </div>
                    {/* id not rendered */}
                    <Button key={"submit"} context="Assert"/>

                    <div className="responses">
                        <div className="header"><h3>Response:</h3></div>
                        <div id="guessMatrix">
                                <Row context="Attempt-1"></Row>
                                <Row context="Attempt-2"></Row>
                                <Row context="Attempt-3"></Row>
                                <Row context="Attempt-4"></Row>
                                <Row context="Attempt-5"></Row>
                                <Row context="Attempt-6"></Row>
                                <Row context="Attempt-7"></Row>
                                <Row context="Attempt-8"></Row>
                                <Row context="Attempt-9"></Row>
                                <Row context="Attempt-10"></Row>
                        </div>
                        <button id="done"><span className="red">Show</span> <span className="white">Solution</span></button>
                    </div>
                </div>
            </div>
    )
}

export default Gameboard