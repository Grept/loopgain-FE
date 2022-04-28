import React, {useContext, useEffect, useState} from "react";
import "./CommentInput.scss"
import Counter from "../Counter/Counter";
import {withRouter} from "react-router-dom";
import {useForm} from "react-hook-form";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";

function CommentInput({currentTime, commentList, setCommentList}) {

    const [composingComment, setComposingComment] = useState(false);
    const {time} = useContext(MediaPlayerContext)
    const {register, handleSubmit, formState:{errors}} = useForm();

    useEffect(() => {
        console.log("commentListChanged:")
        console.log(commentList);

    },[commentList])

    function procesComment(data) {
        const newComment = {...data, time};
        addCommentToList(newComment);
        console.log(newComment);
        clearForm();
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