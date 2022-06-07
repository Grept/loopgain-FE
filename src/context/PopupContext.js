import React, {createContext, useEffect, useState} from "react";

export const PopupContext = createContext({})

export default function PopupContextProvider({children}) {

    // WEG???

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        console.log("showPopup: " + showPopup)
    }, [showPopup])

    function togglePopup() {
        setShowPopup(!showPopup);
    }

    const data = {
        showPopup: showPopup,
        togglePopup: togglePopup,
        setShowPopup: setShowPopup
    }


    return(
        <PopupContext.Provider value={data}>
            {children}
        </PopupContext.Provider>
    );
}