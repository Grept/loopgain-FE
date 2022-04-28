import React from "react";
import "./Comment.scss"
import {withRouter} from "react-router-dom";
import formatCurrentTime from "../../helpers/formatCurrentTime";

function Comment({timestamp, comment, setCurrentTime}) {

    // const timestamp = "00:02:04:22"

    function playerToTimestamp() {
        console.log(`Video to timestamp ${formatCurrentTime(timestamp)}.`);
        setCurrentTime(timestamp)
    }

    return (
        <div
            className="comment"
            onClick={playerToTimestamp}
        >
            <h4 className="comment__timestamp">{formatCurrentTime(timestamp)}</h4>
            <p>
                {comment}
            </p>
        </div>
    );
}

export default withRouter(Comment);