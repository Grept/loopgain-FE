import React, {useContext, useEffect, useState} from "react";
import Content from "../../components/Content/Content";
import "./ContentViewPage.scss"
import {useParams} from "react-router-dom";
import axios from "axios";
import CollectedFeedback from "../../components/Feedback/CollectedFeedback";
import CommentDisplay from "../../components/CommentDisplay/CommentDisplay";
import {FeedbackContext} from "../../context/FeedbackContext";


export default function ContentViewPage() {

    const [mediaData, setMediaData] = useState({});
    const [currentComment, setCurrentComment] = useState()
    const {id} = useParams();

    const {setCommentCollection, commentCollection} = useContext(FeedbackContext);

    useEffect(() => {
        async function getMediaData() {
            try {
                const response = await axios.get(`http://localhost:8080/media/${id}/data`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })

                console.log("Media Metadata:");
                console.log(response);

                const commentCollection = [];
                response.data.feedbackStringDtoList.map(s => s.commentList.map(c => {
                    c.reviewer = s.reviewer;
                    return commentCollection.push(c);
                }))

                console.log("commentCollection:");
                console.log(commentCollection);

                setMediaData(response.data);
                setCommentCollection(commentCollection)
            } catch (e) {
                console.error(e)
            }
        }

        console.log("Going to fetch media data")
        getMediaData();

    }, [])

    return (
        <main className="contentViewPage">
            <div className="contentViewPage__liveContainer">
                <Content
                    className="contentViewPage__content"
                    id={id}
                />

                <CommentDisplay className="contentViewPage__commentDisplay"/>
            </div>

            <CollectedFeedback
                className="contentViewPage__feedback"
                mediaData={mediaData}
                currentComment={currentComment}
                setCurrentComment={setCurrentComment}
            />
        </main>
    );
}