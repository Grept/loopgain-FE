import React, {useContext, useEffect} from "react";
import "./CommentDisplay.scss";
import {FeedbackContext} from "../../context/FeedbackContext";
import formatCurrentTime from "../../helpers/formatCurrentTime";

export default function CommentDisplay() {

    const {commentCollection, currentComment} = useContext(FeedbackContext)

    useEffect(() => {
        commentCollection && console.log("CommentDisplay Logs:")
        commentCollection && console.log(commentCollection)
    }, [])


    return (
        <>
            <section className="commentDisplay__container">
                {(commentCollection) &&
                <div className="commentDisplay__comment">
                    <h3 className="commentDisplay__timestamp">
                        {formatCurrentTime(currentComment.timeStamp)}
                    </h3>
                    <p className="commentDisplay__text">
                        {currentComment.commentText}
                    </p>
                    <p className="commentDisplay__reviewer">
                        {currentComment.reviewer}
                    </p>
                </div>
                }

            </section>
        </>
    );
}