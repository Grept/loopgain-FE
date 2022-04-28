import {createContext, useState} from "react";

export const MediaPlayerContext = createContext({});

export default function MediaPlayerContextProvider({children}) {

    const [time, setTime] = useState()

    const data = {
        time: time,
        setTime: setTime
    }

    return(
        <MediaPlayerContext.Provider value={data}>
            {children}
        </MediaPlayerContext.Provider>
    );
}