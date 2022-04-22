import React, {useEffect, useState} from "react";
import "./CommentInput.scss"
import Counter from "../Counter/Counter";
import {withRouter} from "react-router-dom";

function CommentInput({currentTime}) {

    const [composingComment, setComposingComment] = useState(false)



    useEffect(() => {
        const commentInput = document.getElementById("commentInput");
        commentInput.addEventListener("keyup", () => {
            if(commentInput.select().length > 0) {
                console.log("There is text")
            }
        })

    },[])

    return(
        <>
            <div className="commentInput__container">
                <Counter className="commentInput__counter" currentTime={currentTime}/>
                <textarea
                    className="commentInput__textarea"
                    name=""
                    id="commentInput"
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

export default withRouter(CommentInput);