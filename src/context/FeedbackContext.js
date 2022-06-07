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

        // Beceause find returns undefined when nothing is found we'll check if commend is defined before we pass
        // it to the function setCurrentComment().
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
