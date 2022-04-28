import React, {useEffect} from "react";
import "./Feedback.scss"
import Comment from "../Comment/Comment";
import {withRouter} from "react-router-dom";

function Feedback({commentList}) {

    useEffect(() => {

    }, [commentList])

    return(
        <div className="feedback">
            <section className="feedback__list">
                <h2 className="feedback__header">Feedback String</h2>
                <ul>
                    {commentList &&
                        commentList.map((comment) => {
                            return(
                              <li key={`${comment.newComment}+${comment.currentTime}`}>
                                  <Comment
                                      timestamp={comment.time}
                                      comment={comment.newComment}
                                  />
                              </li>
                            );
                        })
                    }
                </ul>
            </section>
            <button className="feedback__btn-save">Save Feedback</button>
        </div>
    );
}

export default withRouter(Feedback);