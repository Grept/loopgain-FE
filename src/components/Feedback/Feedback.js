import React, {useState} from "react";
import "./Feedback.scss"
import Comment from "../Comment/Comment";
import axios from "axios";
import Popup from "../GlobalComponents/Popup/Popup";

export default function Feedback({commentList, setCommentList, mediaId, getUserFeedbackString}) {

    // HOOKS
    const [saveFeedbackMessage, setSaveFeedbackMessage] = useState();
    const [showSaveAlert, setShowSaveAlert] = useState(false);

    // METHODS
    function toggleShowSaveAlert() {
        setShowSaveAlert(!showSaveAlert);
    }

    function removeComment(comment) {
        const newList = commentList.filter((element) => {
            return element !== comment;
        })

        // Comments coming from the DB already have an ID. Those comments we also need to delete from the DB.
        // If a comment does not have an ID, that means it is not in the DB so we dont have to make a
        // DELETE-request to the DB; we'll skip this step.
        if (comment.id !== undefined) {
            deleteCommentFromFeedbackString(comment);
        }

        setCommentList(newList);
    }

    async function deleteCommentFromFeedbackString(comment) {
        try {
            // Use comment ID to delete comment
            await axios.delete(`http://localhost:8080/media/${mediaId}/comments/${comment.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
        } catch (e) {
            console.error(e);
        }
    }

    function saveFeedback() {
        // Check if feedbackstring contains any comments.
        if (commentList.length !== 0) {
            uploadNewFeedbackString();
            setSaveFeedbackMessage("The Feedback String has been saved.")
        } else {
            setSaveFeedbackMessage("There were no comments in the Feedback String. Nothing saved.")
        }

    }

    async function uploadNewFeedbackString() {
        try {
            await axios.post(`http://localhost:8080/media/${mediaId}/feedback`, commentList, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            // Do a new request for the feedbackstring so all comments have ID's.
            // This is necessary so they can be deleted without having to reload the page.
            getUserFeedbackString(mediaId);
        } catch (e) {
            console.error(e);
        }
    }

    // RENDER
    return (
        <div className="feedback">
            <section className="feedback__list--container">
                <h2 className="feedback__header">Feedback String</h2>
                <ul className="feedback__list">
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

            <button className="feedback__btn-save" onClick={() => {
                saveFeedback();
                toggleShowSaveAlert();
            }}>
                Save Feedback
            </button>

            {showSaveAlert &&
            <Popup toggle={toggleShowSaveAlert}>
                <section className="message__container">
                    <h3 className="message__header">Attention!</h3>
                    <p className="message__text">{saveFeedbackMessage}</p>
                </section>
            </Popup>
            }
        </div>
    );
}