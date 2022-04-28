import React, {useEffect, useState} from "react";
import "./CommentInput.scss"
import Counter from "../Counter/Counter";
import {withRouter} from "react-router-dom";
import {useForm} from "react-hook-form";

function CommentInput({currentTime, commentList, setCommentList}) {

    const [composingComment, setComposingComment] = useState(false);
    // const [commentList, setCommentList] = useState([]);
    const {register, handleSubmit, formState:{errors}} = useForm();


    useEffect(() => {
        console.log("commentListChanged:")
        console.log(commentList);

    },[commentList])


    function procesComment(data) {
        const newComment = {...data, currentTime};
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
                <Counter className="commentInput__counter" currentTime={currentTime}/>
                <form id="newCommentForm" onSubmit={handleSubmit(procesComment)}>
                    <textarea
                        className="commentInput__textarea"
                        {...register("newComment")}
                        id="commentInput"
                        placeholder="Write your comment..."
                    />
                    <div className="commentInput__buttons">
                        <button
                            type="button"
                            className="commentInput__buttons-button"
                            onClick={clearForm}
                        >
                            clear
                        </button>
                        <button
                            className="commentInput__buttons-button"
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