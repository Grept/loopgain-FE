import React from "react";
import "./CommentInput.scss"
import Counter from "../Counter/Counter";

export default function CommentInput() {

    return(
        <>
            <div className="commentInput__container">
                <Counter className="commentInput__counter" />
                <textarea
                    className="commentInput__textarea"
                    name=""
                    id=""
                    placeholder="Write your comment..."
                />
                <div className="commentInput__buttons">
                    <button
                        className="commentInput__buttons-button"
                    >
                        clear
                    </button>
                    <button className="commentInput__buttons-button">save</button>
                </div>
            </div>
        </>
    );
}