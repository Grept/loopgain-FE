import React, {useEffect, useState} from "react";
import axios from "axios";
import Comment from "../Comment/Comment";
import "./CollectedFeedback.scss"

export default function CollectedFeedback({mediaData, currentComment, setCurrentComment}) {

    const {feedbackStringDtoList: feedbackStringList} = mediaData
    // const [commentCollection, setCommentCollection] = useState([]);

    // useEffect(() => {
    //     console.log("feedbackStringList");
    //     console.log(feedbackStringList);
    //
    //
    //     feedbackStringList.map((string) => {
    //         string.commentList.map((c) => {
    //             setCommentCollection(commentCollection.push(c));
    //         })
    //     })
    //
    //
    //     console.log("commentCollection")
    //     console.log(commentCollection)
    //
    // }, [])

    // function sortCommentsByTime() {
    //     const commentsByTime = commentCollection.sort((a, b) => a.timeStamp - b.timeStamp)
    //     setCommentCollection(commentsByTime);
    // }

    return (
        <div className="collected-feedback">
            <section className="collected-feedback__list">
                <h2 className="collected-feedback__header">Collected Feedback</h2>
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