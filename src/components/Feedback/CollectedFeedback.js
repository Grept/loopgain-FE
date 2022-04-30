import React, {useEffect, useState} from "react";
import axios from "axios";
import Comment from "../Comment/Comment";

export default function CollectedFeedback({mediaData, currentComment, setCurrentComment}) {

    const {feedbackStringDtoList: feedbackStrings} = mediaData

    return(
        <div className="collected-feedback">
            <section className="collected-feedback__list">
                <h2 className="collected-feedback__header">Collected Feedback</h2>
                <ul>
                    {feedbackStrings &&
                        feedbackStrings.map((feedbackString) => {
                            return(
                              <>
                                  <h3>{feedbackString.reviewer}</h3>
                                  {
                                      feedbackString.commentList.map((comment) => {
                                          return(
                                              <li
                                                  key={
                                                      `${comment.commentText}
                                                      +${comment.timeStamp}
                                                      +${feedbackString.reviewer}`
                                                  }
                                              >
                                                  <Comment
                                                      comment={comment}
                                                      currentComment={currentComment}
                                                      setCurrentComment={setCurrentComment}
                                                  />
                                              </li>
                                          )
                                      })
                                  }
                              </>
                            );
                        })
                    }
                </ul>
            </section>

        </div>
    );
}