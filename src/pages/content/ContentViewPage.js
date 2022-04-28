import React, {useState} from "react";
import Content from "../../components/Content/Content";
import CommentInput from "../../components/CommentInput/CommentInput";
import Feedback from "../../components/Feedback/Feedback";
import "./ContentViewPage.scss"
import {useParams} from "react-router-dom";

export default function ContentViewPage() {

    const [currentTime, setCurrentTime] = useState(0);

    const {id} = useParams();

    return(
        <main className="contentViewPage">
            <div className="contentReviewPage__liveContainer">
                <Content id={id} setCurrentTime={setCurrentTime}/>
                <CommentInput currentTime={currentTime}/>
            </div>
            <Feedback />
        </main>
    );
}