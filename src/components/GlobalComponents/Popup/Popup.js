import React, {useContext} from "react";
import "./Popup.scss";
import {PopupContext} from "../../../context/PopupContext";

export default function Popup({children, toggle}) {

    const {togglePopup} = useContext(PopupContext)

    return(
        <div className="popup" onClick={toggle}>
            {/*
                e.stopPropagation() prevents togglePopup is being called when the child is clicked.
            */}
            <div className="popup__window" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
