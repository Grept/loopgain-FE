import React, {useContext, useEffect} from "react";
import "./Counter.scss"
import {withRouter} from "react-router-dom";
import formatCurrentTime from "../../helpers/formatCurrentTime";
import {MediaPlayerContext} from "../../context/MediaPlayerContext";

function Counter({currentTime}) {

    const {time} = useContext(MediaPlayerContext)

    // useEffect(() => {
    //     console.log("currentTime changed")
    //
    //     hh = Math.floor(currentTime / 3600);
    //     mm = Math.floor((currentTime - (hh * 3600)) / 60);
    //     ss = Math.floor(currentTime - (hh * 3600) - (mm * 60));
    // }, [currentTime])

    // useEffect(() => {
    // }, [currentTime])

    return(
        <>
            <div className="counter__container">
                <p className="counter__clock">{formatCurrentTime(time)}</p>
            </div>
        </>
    );
}

export default withRouter(Counter);