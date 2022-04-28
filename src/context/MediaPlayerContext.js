import {createContext, useState} from "react";

export const MediaPlayerContext = createContext({});

export default function MediaPlayerContextProvider({children}) {

    const [time, setTime] = useState(0)
    const [playHead, setPlayHead] = useState(0)

    const data = {
        time: time,
        setTime: setTime,
        playHead: playHead,
        setPlayHead: setPlayHead

    }

    return(
        <MediaPlayerContext.Provider value={data}>
            {children}
        </MediaPlayerContext.Provider>
    );
}