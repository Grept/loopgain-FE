import React, {useState} from "react";
import {useParams} from "react-router-dom";
import Content from "../../components/Content/Content";
import CommentInput from "../../components/CommentInput/CommentInput";
import Feedback from "../../components/Feedback/Feedback";
import "./ContentReviewPage.scss"
import axios from "axios";
export default function ContentReviewPage() {

    const [commentList, setCommentList] = useState([]);
    const {id} = useParams();

    async function newFeedbackString() {
        try {
            const response = await axios.post(`http://localhost:8080/media/${id}/feedback`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            console.log(response);
        } catch (e) {
            console.error(e)
        }
    }

    return(
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
                />
            </main>
        </>
    );
}