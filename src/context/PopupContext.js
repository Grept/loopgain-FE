import React, {createContext, useState} from "react";

export const PopupContext = createContext({})

export default function PopupContextProvider({children}) {

    const [showPopup, setShowPopup] = useState(false);

    function togglePopup() {
        setShowPopup(!showPopup);
    }

    const data = {
        showPopup: showPopup,
        togglePopup: togglePopup
    }


    return(
        <PopupContext.Provider value={data}>
            {children}
        </PopupContext.Provider>
    );
}