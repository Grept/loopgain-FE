import React, {useEffect} from "react";
import "./Feedback.scss"
import Comment from "../Comment/Comment";
import {withRouter} from "react-router-dom";
import axios from "axios";

function Feedback({commentList, setCommentList, mediaId}) {

    useEffect(() => {

    }, [commentList])

    function removeComment(comment) {
        const newList = commentList.filter((element) => {
            return element !== comment;
        })

        console.log(newList);
        setCommentList(newList);
    }

    function saveFeedback() {
        if (commentList.length !== 0) {
            console.log("save all comments...")
            requestNewFeedbackString();
        } else {
            console.log("no comments in list...")
        }

    }

    async function requestNewFeedbackString() {
        console.log("commentList: ")
        console.log(commentList)
        try {
            const response = await axios.post(`http://localhost:8080/media/${mediaId}/feedback`, commentList,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            console.log("Created feedback String")
            console.log(response)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="feedback">
            <section className="feedback__list">
                <h2 className="feedback__header">Feedback String</h2>
                <ul>
                    {commentList &&
                    commentList.map((comment) => {
                        return (
                            <li key={`${comment.commentText}+${comment.timeStamp}`}>
                                <Comment

                                    comment={comment}
                                    removeComment={removeComment}
                                />
                            </li>
                        );
                    })
                    }
                </ul>
            </section>
            <button className="feedback__btn-save" onClick={saveFeedback}>
                Save Feedback
            </button>
        </div>
    );
}

export default withRouter(Feedback);