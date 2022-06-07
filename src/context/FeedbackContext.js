import {createContext, useContext, useEffect, useState} from "react";
import {MediaPlayerContext} from "./MediaPlayerContext";

export const FeedbackContext = createContext({});

export default function FeedbackContextProvider({children}) {

    // HOOKS
    const {time} = useContext(MediaPlayerContext);
    const [commentCollection, setCommentCollection] = useState()
    const [currentComment, setCurrentComment] = useState({})

    useEffect(() => {
        commentCollection && findCurrentComment();
    }, [time])

    // METHODS
    function findCurrentComment() {
        const currentTime = Math.floor(time);
        const comment = commentCollection.find(c => Math.floor(c.timeStamp) === currentTime)

        // Omdat find undefined teruggeeft wanneer er niets gevonden wordt moet hier gechecked worden
        // of comment wel een waarde heeft.
        comment && setCurrentComment(comment);
    }

    const data = {
        setCommentCollection:setCommentCollection,
        commentCollection:commentCollection,
        currentComment:currentComment
    }

    // RENDER
    return(
        <FeedbackContext.Provider value={data}>
            {children}
        </FeedbackContext.Provider>
    );

}
