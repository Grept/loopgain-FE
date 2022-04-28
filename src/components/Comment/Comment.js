import React, {useContext} from "react";
import "./Comment.scss"
import {withRouter} from "react-router-dom";
import formatCurrentTime from "../../helpers/formatCurrentTime";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";

function Comment({timestamp, comment}) {

    const {setPlayHead} = useContext(MediaPlayerContext)

    function playerToTimestamp() {
        console.log(`Video to timestamp ${formatCurrentTime(timestamp)}.`);
        setPlayHead(timestamp)
    }

    return (
        <div className="comment-card">
            <div
                className="comment"
                onClick={playerToTimestamp}
            >
                <h4 className="comment__timestamp">{formatCurrentTime(timestamp)}</h4>
                <p>
                    {comment}
                </p>
            </div>
            <button className="comment-card__btn">-</button>
        </div>
    );
}

export default withRouter(Comment);