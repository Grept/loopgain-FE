import React, {useContext} from "react";
import "./Comment.scss"
import formatCurrentTime from "../../helpers/formatCurrentTime";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";
import {AuthContext} from "../../context/AuthContext";

export default function Comment({comment, removeComment}) {

    // HOOKS
    const {time, setPlayHead} = useContext(MediaPlayerContext);
    const {user} = useContext(AuthContext);

    // METHODS
    function playerToTimestamp() {
        setPlayHead(comment.timeStamp);
    }

    function isCurrentComment() {
        if (time === comment.timeStamp) {
            return true;
        }
    }

    // RENDER
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
                    {comment.reviewer}
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