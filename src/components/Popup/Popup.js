import React, {useContext} from "react";
import "./Popup.scss";
import {PopupContext} from "../../context/PopupContext";

export default function Popup({children}) {

    const {togglePopup} = useContext(PopupContext)

    return(
        <div className="popup" onClick={togglePopup}>
            <div className="popup__window">
                {children}
            </div>
        </div>
    );
}
