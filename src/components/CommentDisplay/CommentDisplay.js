import React, {useContext, useEffect} from "react";
import "./CommentDisplay.scss";
import {FeedbackContext} from "../../context/FeedbackContext";
import formatCurrentTime from "../../helpers/formatCurrentTime";

export default function CommentDisplay() {

    // HOOKS
    const {commentCollection, currentComment} = useContext(FeedbackContext)

    // RENDER
    return (
        <>
            <section className="commentDisplay__container">
                {commentCollection &&
                <div className="commentDisplay__comment">
                    <h3 className="commentDisplay__timestamp">
                        {currentComment.timeStamp &&
                        formatCurrentTime(currentComment.timeStamp) ||
                        "Comment Display Field"
                        }
                    </h3>
                    <p className="commentDisplay__text">
                        {currentComment.commentText &&
                        currentComment.commentText ||
                        "Comments will be displayed in this area"
                        }
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