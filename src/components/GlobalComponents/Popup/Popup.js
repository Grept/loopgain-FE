import React from "react";
import "./Popup.scss";

export default function Popup({children, toggle}) {

    // RENDER
    return(
        <div className="popup" onClick={toggle}>
            {/* e.stopPropagation() prevents togglePopup is being called when the child is clicked. */}
            <div className="popup__window" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}


