import React from "react";
import "./Comment.scss"
import {withRouter} from "react-router-dom";

function Comment(props) {

    const timestamp = "00:02:04:22"

    function playerToTimestamp() {
        console.log("Video to timestamp x.");
    }

    return (
        <div
            className="comment"
            onClick={playerToTimestamp}
        >
            <h4 className="comment__timestamp">{timestamp}</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, optio?
            </p>
        </div>
    );
}

export default withRouter(Comment);