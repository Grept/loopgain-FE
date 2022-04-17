import React from "react";
import Content from "../../components/Content/Content";
import CommentInput from "../../components/CommentInput/CommentInput";
import Feedback from "../../components/Feedback/Feedback";
import "./ContentViewPage.scss"

export default function ContentViewPage() {

    return(
        <main className="contentViewPage">
            <div className="liveContainer">
                <Content />
                <CommentInput />
            </div>
            <Feedback />
        </main>
    );
}