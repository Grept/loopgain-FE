import React, {useContext, useEffect, useState} from "react";
import "./Content.scss";
import axios from "axios";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";

function Content({id}) {
    const [currentMedia, setCurrentMedia] = useState({})
    const {time, setTime, playHead, setPlayHead} = useContext(MediaPlayerContext)

    useEffect(() => {

        const player = document.getElementById("player");
        player.addEventListener("timeupdate", () => {
            setTime(player.currentTime);
        })

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
        const player = document.getElementById("player");
        player.src = currentMedia;
        player.load();
    }, [currentMedia])

    useEffect(() => {
        setPlaybackToTime(playHead)
    }, [playHead])

    function setPlaybackToTime(playHeadPosition) {
        const player = document.getElementById("player");
        player.currentTime = playHeadPosition;
    }

    return (
        <div className="content__container">
            {currentMedia &&
                <video id="player" className="content__videoplayer" controls>
                    {/*<source id="video" src={`http://localhost:8080/media/${id}`}/>*/}
                    {/*{console.log("In return")}*/}
                    {/*{console.log(currentMedia)}*/}
                    <source id="video" src="" />
                    {/*<source id="video" src={video_1}/>*/}
                </video>
            }
        </div>
    );
}

export default Content;