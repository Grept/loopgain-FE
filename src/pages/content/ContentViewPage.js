import React, {useEffect, useState} from "react";
import Content from "../../components/Content/Content";
import CommentInput from "../../components/CommentInput/CommentInput";
import Feedback from "../../components/Feedback/Feedback";
import "./ContentViewPage.scss"
import {useParams} from "react-router-dom";
import axios from "axios";
import CollectedFeedback from "../../components/Feedback/CollectedFeedback";
import {set} from "react-hook-form";

export default function ContentViewPage() {

    const [mediaData, setMediaData] = useState({});
    const [currentComment, setCurrentComment] = useState()
    const {id} = useParams();

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

                setMediaData(response.data);
            } catch (e) {
                console.error(e)
            }
        }

        getMediaData();
    }, [])

    return(
        <main className="contentViewPage">
            <div className="contentViewPage__liveContainer">
                <Content
                    className="contentViewPage__content"
                    id={id}
                />
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