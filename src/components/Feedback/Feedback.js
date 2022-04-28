import React, {useEffect} from "react";
import "./Feedback.scss"
import Comment from "../Comment/Comment";
import {withRouter} from "react-router-dom";

function Feedback({commentList, setCurrentTime}) {

    useEffect(() => {

    }, [commentList])

    return(
        <div className="feedbackContainer">
            <h2>Feedback String</h2>
            <ul>
                {commentList &&
                    commentList.map((comment) => {
                        return(
                          <li key={`${comment.newComment}+${comment.currentTime}`}>
                              <Comment
                                  timestamp={comment.currentTime}
                                  comment={comment.newComment}
                                  setCurrentTime={setCurrentTime}
                              />
                          </li>
                        );
                    })
                }

                {/*<li><Comment /></li>*/}
                {/*<li><Comment /></li>*/}
                {/*<li><Comment /></li>*/}
                {/*<li><Comment /></li>*/}
                {/*<li><Comment /></li>*/}
                {/*<li><Comment /></li>*/}
            </ul>
        </div>
    );
}

export default withRouter(Feedback);