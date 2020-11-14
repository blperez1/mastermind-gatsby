import React from "react"
import Button from "../components/button"

const Header = () => {
    return (
        <>
            <h1 id="top">Break Me</h1>
            <p>(check console for description)</p>
            <h2 className="colorDescription"><span className="red">Red</span> = right color right spot | <span className="white">White</span> = right color wrong spot</h2>
            <h5 className="thin">(no particular order)</h5><br/>
            {/* id not rendered */}
            <Button key={"increaseDiff"} context="Hard Mode"/>
            <p id="isHardMode"></p>
		    <p className="otherColors">(Hard Mode Adds: <span className="grey">Grey</span>, <span className="cyan">Cyan</span>, <span
				className="olive">Olive</span>, <span className="tan">Tan</span>, <span className="purple">Purple</span> and <span
				className="lime">Lime</span>)</p>
                {/* id not rendered */}
		    <Button key={"newGame"} context="Start Game"/>
            <p className="easyOptions"><span><strong>Options: </strong></span><span className="blue">Blue</span>, <span
				className="brown">Brown</span>, <span className="yellow">Yellow</span>, <span className="orange">Orange</span>,
			<span className="green">Green</span> and <span className="pink">Pink</span></p>
        </>
    )
}

export default Header