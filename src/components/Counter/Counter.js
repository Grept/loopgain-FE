import React, {useContext} from "react";
import "./Counter.scss"
import formatCurrentTime from "../../helpers/formatCurrentTime";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";

export default function Counter() {

    // HOOKS
    const {time} = useContext(MediaPlayerContext)

    // RENDER
    return(
        <>
            <div className="counter__container">
                <p className="counter__clock">{formatCurrentTime(time)}</p>
            </div>
        </>
    );
}