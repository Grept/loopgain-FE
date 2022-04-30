import React, {useState} from "react";
import {useParams} from "react-router-dom";
import Content from "../../components/Content/Content";
import CommentInput from "../../components/CommentInput/CommentInput";
import Feedback from "../../components/Feedback/Feedback";
import "./ContentReviewPage.scss"

export default function ContentReviewPage() {

    const [commentList, setCommentList] = useState([]);
    const {id} = useParams();

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
                    setCommentList={setCommentList}
                    mediaId={id}
                />
            </main>
        </>
    );
}