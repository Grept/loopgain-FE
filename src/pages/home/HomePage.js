import React, {useContext, useEffect} from "react";
import {ProjectContext} from "../../context/ProjectContext";
import background_image from "../../assets/images/background_filmmaking_02.jpg"
import "./HomePage.scss";

export default function HomePage() {

    const {project} = useContext(ProjectContext);


    useEffect(() => {
        console.log(project);
    }, [])

    return (
        <>
            <h1>Home Page</h1>
            <img className="bg_img" src={background_image} alt=""/>
        </>
    );
}