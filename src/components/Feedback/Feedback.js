import React from "react";
import "./Feedback.scss"
import Comment from "../Comment/Comment";

export default function Feedback() {

    return(
        <div className="feedbackContainer">
            <h2>Feedback String</h2>
            <ul>
                <li><Comment /></li>
                <li><Comment /></li>
                <li><Comment /></li>
                <li><Comment /></li>
                <li><Comment /></li>
                <li><Comment /></li>
            </ul>
        </div>
    );
}