import React, {useEffect, useState} from "react";
import video_1 from "../../assets/__TEST-MEDIA__/ledl-trailer-Apple Devices HD (Most Compatible).m4v"
import video_2 from "../../assets/__TEST-MEDIA__/sputum-trailer-Apple Devices HD (Most Compatible).m4v"

import "./Content.scss";
import {withRouter} from "react-router-dom";
import axios from "axios";

function Content({id, setCurrentTime, currentTime}) {

    const [currentMedia, setCurrentMedia] = useState({})

    useEffect(() => {
        // const player = document.getElementById("player");
        // player.addEventListener("timeupdate", () => {
        //     setCurrentTime(player.currentTime);
        // })
    }, [])



    useEffect(() => {
        const player = document.getElementById("player");
        // player.type = currentMedia.contentMimeType;
        player.src = currentMedia;
        player.load();
    }, [currentMedia])

    useEffect(() => {
        async function getContent(id) {
            try {
                const contentResponse = await axios.get(`http://localhost:8080/media/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    responseType: "blob"
                })

                const contentUrl = URL.createObjectURL(contentResponse.data);

                setCurrentMedia(contentUrl);

            } catch (e) {
                console.error(e)
            }
        }

        getContent(id);
    }, [])

    useEffect(() => {
        setPlaybackToTime(currentTime)
    }, [currentTime])

    function setPlaybackToTime(time) {
        const player = document.getElementById("player");
        player.currentTime = time;
    }

    return (
        <>
            {/*{console.log("currentMedia:")}*/}
            {/*{console.log(currentMedia)}*/}
            {currentMedia &&
                <video id="player" className="video-player" controls>
                    {/*<source id="video" src={`http://localhost:8080/media/${id}`}/>*/}
                    {/*{console.log("In return")}*/}
                    {/*{console.log(currentMedia)}*/}
                    <source id="video" src="" />
                    {/*<source id="video" src={video_1}/>*/}
                </video>
            }
        </>
    );
}

export default Content;