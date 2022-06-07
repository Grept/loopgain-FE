import React, {useEffect, useState} from "react";
import axios from "axios";
import Comment from "../Comment/Comment";
import "./CollectedFeedback.scss"

export default function CollectedFeedback({mediaData, currentComment, setCurrentComment}) {

    const {feedbackStringDtoList: feedbackStringList} = mediaData

    return (
        <div className="collected-feedback">
            <h2 className="collected-feedback__header">Collected Feedback</h2>
            <section className="collected-feedback__list">
                <ul>
                    {feedbackStringList &&
                    feedbackStringList.map((feedbackString) => {
                        return (
                            <>
                                <h3>{feedbackString.reviewer}</h3>
                                {
                                    feedbackString.commentList.map((comment) => {
                                        return (
                                            <li
                                                key={
                                                    `${comment.commentText}
                                                      +${comment.timeStamp}
                                                      +${feedbackString.reviewer}`
                                                }
                                            >
                                                <Comment
                                                    comment={comment}
                                                    reviewer={feedbackString.reviewer}
                                                    currentComment={currentComment}
                                                    setCurrentComment={setCurrentComment}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </>
                        );
                    })
                    }
                </ul>
            </section>

        </div>
    );
}