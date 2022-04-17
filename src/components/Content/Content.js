import React from "react";
import video_1 from "../../assets/__TEST-MEDIA__/ledl-trailer-Apple Devices HD (Most Compatible).m4v"
import video_2 from "../../assets/__TEST-MEDIA__/sputum-trailer-Apple Devices HD (Most Compatible).m4v"

import "./Content.scss";

export default function Content() {

    return(
        <>
            <video className="video-player" controls>
                <source src={video_2} type="video/mp4"/>
            </video>
        </>
    );
}