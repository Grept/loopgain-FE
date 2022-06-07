import React, {useContext, useEffect} from "react";
import Comment from "../Comment/Comment";
import "./CollectedFeedback.scss"
import {FeedbackContext} from "../../context/FeedbackContext";

export default function CollectedFeedback({setCurrentComment}) {

    const {commentCollection, setCommentCollection, currentComment} = useContext(FeedbackContext)

    function sortByReviewer() {
        const sortedList = commentCollection.sort((a, b) => a.reviewer > b.reviewer ? 1 : -1);
        // console.log(sortedList)
        setCommentCollection([...sortedList]);
    }

    function sortByTimeStamp() {
        const sortedList = commentCollection.sort((a, b) => a.timeStamp > b.timeStamp ? 1 : -1);
        // console.log(sortedList)
        setCommentCollection([...sortedList]);
    }

    return (
        <div className="collected-feedback">
            <h2 className="collected-feedback__header">Collected Feedback</h2>
            <section className="collected-feedback__btns">
                <button className="collected-feedback__btn" onClick={sortByReviewer}>sort by reviewer</button>
                <button className="collected-feedback__btn" onClick={sortByTimeStamp}>sort by timestamp</button>
            </section>
            <section className="collected-feedback__list">
                <ul>
                    {commentCollection &&
                    commentCollection.map((comment) => {
                        return (
                            <li
                                key={
                                    `${comment.commentText}
                                    +${comment.timeStamp}
                                    +${comment.reviewer}`
                                }
                            >
                                <Comment
                                    comment={comment}
                                    reviewer={comment.reviewer}
                                    currentComment={currentComment}
                                />
                            </li>
                        )
                    })
                    }

                </ul>
            </section>

        </div>
    )
        ;
}