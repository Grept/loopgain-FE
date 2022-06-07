import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Content from "../../components/Content/Content";
import CommentInput from "../../components/CommentInput/CommentInput";
import Feedback from "../../components/Feedback/Feedback";
import "./ContentReviewPage.scss"
import axios from "axios";

export default function ContentReviewPage() {

    // HOOKS
    const [commentList, setCommentList] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getUserFeedbackString(id)
    }, [])

    // METHODS
    async function getUserFeedbackString(mediaId) {
        // The backend API makes sure only feedback owned by the logged-in user gets retrieved.
        try {
            const {data: {commentList}} = await axios.get(`http://localhost:8080/media/${mediaId}/feedback`, {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            setCommentList(commentList)
        } catch (e) {
            console.error(e);
        }
    }

    // RENDER
    return (
        <>
            <main className="contentReviewPage">
                <div className="contentReviewPage__liveContainer">
                    <Content
                        className="contentReviewPage__content"
                        id={id}
                    />
                    <CommentInput
                        className="contentReviewPage__commentInput"
                        commentList={commentList}
                        setCommentList={setCommentList}
                    />
                </div>
                <Feedback
                    className="contentReviewPage__feedback"
                    commentList={commentList}
                    setCommentList={setCommentList}
                    mediaId={id}
                    getUserFeedbackString={getUserFeedbackString}
                />
            </main>
        </>
    );
}