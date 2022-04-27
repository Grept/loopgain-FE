import React, {useState} from "react";
import {useParams} from "react-router-dom";
import Content from "../../components/Content/Content";
import CommentInput from "../../components/CommentInput/CommentInput";
import Feedback from "../../components/Feedback/Feedback";
import "./ContentReviewPage.scss"

export default function ContentReviewPage() {

    const [currentTime, setCurrentTime] = useState(0);
    const {id} = useParams();

    return(
        <>
            <main className="contentReviewPage">
                <div className="liveContainer">
                    <Content id={id} setCurrentTime={setCurrentTime}/>
                    <CommentInput currentTime={currentTime}/>
                </div>
                <Feedback className="contentReviewPage__feedback" />
            </main>
        </>
    );
}