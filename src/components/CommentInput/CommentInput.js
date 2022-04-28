import React, {useContext, useEffect, useState} from "react";
import "./CommentInput.scss"
import Counter from "../Counter/Counter";
import {withRouter} from "react-router-dom";
import {useForm} from "react-hook-form";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";

function CommentInput({currentTime, commentList, setCommentList}) {

    const [composingComment, setComposingComment] = useState(false);
    const [commentTime, setCommentTime] = useState(0);
    const {time} = useContext(MediaPlayerContext)
    const {register, handleSubmit, formState:{errors}} = useForm();

    useEffect(() => {
        console.log("Composing comment?: " + composingComment)
        console.log(time)
        setCommentTime(time)
    }, [composingComment])

    useEffect(() => {
        const textArea = document.getElementById("commentInput");
        textArea.addEventListener("input", checkIfEmpty)
    }, [])

    useEffect(() => {
        console.log("commentListChanged:")
        console.log(commentList);

    },[commentList])


    // Check if a comment is being composed. If user is writing, save current time.
    function checkIfEmpty(){
        const field = this.value;
        if(field !== "") {
            setComposingComment(true);
        } else {
            setComposingComment(false)
        }
    }

    function procesComment(data) {
        const newComment = {...data, time: commentTime};
        addCommentToList(newComment);
        console.log(newComment);
        clearForm();
        setComposingComment(false);
    }

    function addCommentToList(comment) {
        setCommentList([...commentList, comment])
    }

    function clearForm() {
        const form = document.getElementById("newCommentForm")
        form.reset();
    }

    return(
        <>
            <div className="commentInput__container">
                <Counter className="commentInput__counter"/>
                <form id="newCommentForm" onSubmit={handleSubmit(procesComment)}>
                    <div className="textArea__container">
                        <textarea
                            className="commentInput__textarea"
                            {...register("newComment")}
                            id="commentInput"
                            placeholder="Write your comment..."
                        />
                    </div>
                    <div className="commentInput__buttons">
                        <button
                            type="button"
                            className="commentInput__buttons-btn"
                            onClick={clearForm}
                        >
                            clear
                        </button>
                        <button
                            className="commentInput__buttons-btn"
                            type="submit"
                        >
                            save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default withRouter(CommentInput);