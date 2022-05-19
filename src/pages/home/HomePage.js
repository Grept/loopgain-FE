import React, {useContext, useEffect} from "react";
import {ProjectContext} from "../../context/ProjectContext";
import Popup from "../../components/GlobalComponents/Popup/Popup";
import {PopupContext} from "../../context/PopupContext";
import Counter from "../../components/Counter/Counter";
import AddProjectForm from "../../components/AddForms/AddProjectForm/AddProjectForm";

export default function HomePage() {

    const {project} = useContext(ProjectContext);
    const {showPopup, togglePopup} = useContext(PopupContext);

    useEffect(() => {
        console.log(project);
    }, [])

    return (
        <>
            <h1>Home Page</h1>
        </>
    );
}