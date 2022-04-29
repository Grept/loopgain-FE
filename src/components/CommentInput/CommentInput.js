import React, {useContext, useEffect, useState} from "react";
import "./CommentInput.scss"
import Counter from "../Counter/Counter";
import {withRouter} from "react-router-dom";
import {useForm} from "react-hook-form";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";

export default function CommentInput({commentList, setCommentList}) {

    // HOOKS
    const [composingComment, setComposingComment] = useState(false);
    const [commentTime, setCommentTime] = useState(0);
    const {time} = useContext(MediaPlayerContext)
    const {register, handleSubmit, formState:{errors}} = useForm();

    // STATE
    useEffect(() => {
        const textArea = document.getElementById("commentInput");
        textArea.addEventListener("input", checkIfEmpty)
    }, [])

    useEffect(() => {
        console.log("Composing comment?: " + composingComment)
        console.log(time)
        setCommentTime(time)
    }, [composingComment])

    useEffect(() => {
        console.log("commentListChanged:")
        console.log(commentList);

    },[commentList])


    // METHODS
    function checkIfEmpty(){
        // Check if a comment is being composed. If user is writing, save current time.
        const field = this.value;
        if(field !== "") {
            setComposingComment(true);
        } else {
            setComposingComment(false)
        }
    }

    function procesComment(data) {

        // Empty comments are ignored
        if(data.commentText !== "") {
            const newComment = {...data, timeStamp: commentTime};

            // Duplicate comments are ignored
            // This also solves the unique-key problem in the commentList li-items
            if(!commentAlreadyInList(newComment)) {
                addCommentToList(newComment);
            } else {
                console.log("comment already exists...")
            }
        }

        setComposingComment(false);
        clearForm();
    }

    function commentAlreadyInList(comment) {
        const exists = commentList.find((c) => {
            return (c.commentText === comment.commentText && c.timeStamp === comment.timeStamp)
        })

        return exists !== undefined;
    }

    function addCommentToList(comment) {
        setCommentList([...commentList, comment])
    }

    function clearForm() {
        const form = document.getElementById("newCommentForm")
        form.reset();
    }

    // RENDER
    return(
        <>
            <div className="commentInput__container">
                <Counter className="commentInput__counter"/>
                <form id="newCommentForm" onSubmit={handleSubmit(procesComment)}>
                    <div className="textArea__container">
                        <textarea
                            className="commentInput__textarea"
                            {...register("commentText")}
                            id="commentInput"
                            placeholder="Write your comment..."
                        />
                    </div>
                    <div className="commentInput__buttons">
                        <button
                            className="commentInput__buttons-btn"
                            type="submit"
                        >
                            save
                        </button>
                        <button
                            type="button"
                            className="commentInput__buttons-btn"
                            onClick={clearForm}
                        >
                            clear
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
