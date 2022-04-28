import React, {useContext, useEffect} from "react";
import {ProjectContext} from "../../context/ProjectContext";
import Popup from "../../components/Popup/Popup";
import {PopupContext} from "../../context/PopupContext";

export default function HomePage() {

    const {project} = useContext(ProjectContext);
    const {showPopup, togglePopup} = useContext(PopupContext);

    useEffect(() => {
        console.log(project);
    }, [])

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={togglePopup}>popup</button>
            {showPopup &&
            <Popup>
                <h1>This is a popup</h1>
            </Popup>
            }
        </>
    );
}