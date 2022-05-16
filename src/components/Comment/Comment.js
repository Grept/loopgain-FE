import React, {useContext} from "react";
import "./Comment.scss"
import {withRouter} from "react-router-dom";
import formatCurrentTime from "../../helpers/formatCurrentTime";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";

    function Comment({comment, removeComment, currentComment, setCurrentComment}) {

    const {time, setPlayHead} = useContext(MediaPlayerContext)

    function playerToTimestamp() {
        console.log(`Video to timestamp ${formatCurrentTime(comment.timeStamp)}.`);
        setPlayHead(comment.timeStamp)
    }

    function isCurrentComment() {
        if(time >= comment.timeStamp){
            return true
        }
    }

    return (
        <div className="comment-card">
            <div
                className={`comment ${isCurrentComment() ? "highlight" : ""}`}
                onClick={playerToTimestamp}
            >
                <h4 className="comment__timestamp">{formatCurrentTime(comment.timeStamp)}</h4>
                <p>
                    {comment.commentText}
                </p>
            </div>

            <button className="comment-card__btn" onClick={() => {
                removeComment(comment);
            }}>
                <strong>-</strong>
            </button>
        </div>
    );
}

export default withRouter(Comment);