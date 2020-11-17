import React from "react"

const AnswerKey = () => {
    return (
        <>
            <p className="answerKey"></p>
            <div class="answerKey">
                <h3>Answer key:</h3>
                <h2><span id="key1">--</span> | <span id="key2">--</span> | <span id="key3">--</span> | <span
                    id="key4">--</span></h2>
                <button id="link"><a href="#top"><span id="textCycle1">New </span><span id="textCycle2">Game</span></a></button>
            </div>
        </>
    )
}

export default AnswerKey