import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import MediafileCard from "../../components/MediafileCard/MediafileCard";
import "./ReviewRequestsPage.scss"

export default function ReviewRequestsPage() {

    const [allMedia, setAllMedia] = useState([])

    useEffect(() => {
        console.log("ReviewRequestPage Loaded...")
        getAllMedia();
    }, [])

    async function getAllMedia() {
        try {
            const {data: response} = await axios.get("http://localhost:8080/media", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setAllMedia(response)
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <main className="reviewRequestPage">
            <h1 className="reviewRequestPage__header">Review Request Page</h1>
            <section className="reviewRequestPage__mediaList">
                <ul>
                    {
                        allMedia.map((file) => {
                            return (
                                <li key={`${file.contentId}`}>
                                    <MediafileCard mediafile={file} />
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </main>
    );
}