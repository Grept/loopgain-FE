import React, {useEffect, useState} from "react";
import video_1 from "../../assets/__TEST-MEDIA__/ledl-trailer-Apple Devices HD (Most Compatible).m4v"
import video_2 from "../../assets/__TEST-MEDIA__/sputum-trailer-Apple Devices HD (Most Compatible).m4v"

import "./Content.scss";
import {withRouter} from "react-router-dom";
import axios from "axios";

function Content({id, setCurrentTime}) {

    // const [currentMedia, setCurrentMedia] = useState({})
    // const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const player = document.getElementById("player");
        player.addEventListener("timeupdate", () => {
            setCurrentTime(player.currentTime);
        })
    }, [])



    // useEffect(() => {
    //     console.log("currentMedia changed");
    //     console.log(currentMedia);
    // }, [currentMedia])

    // useEffect(() => {
    //     async function getContent(id) {
    //         try {
    //             const contentResponse = await axios.get(`http://localhost:8080/media/${id}`, {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //                 },
    //                 responseType: "blob"
    //             })
    //
    //             setCurrentMedia(contentResponse);
    //             // const videoPlayer = document.getElementById("video-player")
    //             // videoPlayer.src = URL.createObjectURL(contentResponse);
    //             // videoPlayer.load();
    //         } catch (e) {
    //             console.error(e)
    //         }
    //     }
    //
    //     getContent(id);
    //
    //     console.log(currentMedia)
    // }, [])


    return (
        <>
            <video id="player" className="video-player" controls>
                <source id="video" src={`http://localhost:8080/media/${id}`}/>
                {/*<source id="video" src={video_1}/>*/}
            </video>
        </>
    );
}

export default Content;