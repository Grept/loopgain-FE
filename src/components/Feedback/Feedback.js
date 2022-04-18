import React from "react";
import "./Feedback.scss"
import Comment from "../Comment/Comment";
import {withRouter} from "react-router-dom";

function Feedback() {

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

export default withRouter(Feedback);