import React, {useContext, useEffect} from "react";
import "./Comment.scss"
import {withRouter} from "react-router-dom";
import formatCurrentTime from "../../helpers/formatCurrentTime";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";
import {AuthContext} from "../../context/AuthContext";

    function Comment({comment, reviewer, removeComment, currentComment, setCurrentComment}) {

    const {time, setPlayHead} = useContext(MediaPlayerContext);
    const {user} = useContext(AuthContext);

    function playerToTimestamp() {
        console.log(`Video to timestamp ${formatCurrentTime(comment.timeStamp)}.`);
        setPlayHead(comment.timeStamp)
    }

    function isCurrentComment() {
        if(time === comment.timeStamp){
            console.log("currentComment")
            console.log(comment)
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
                <p className="comment__text">
                    {comment.commentText}
                </p>
                <p className="comment__reviewer">
                    {reviewer}
                </p>
            </div>
            {user.role === "REVIEWER" &&
                <button className="comment-card__btn" onClick={() => {
                    removeComment(comment);
                }}>
                    <strong>x</strong>
                </button>
            }
        </div>
    );
}

export default withRouter(Comment);