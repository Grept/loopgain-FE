import React, {useContext, useEffect} from "react";
import {ProjectContext} from "../../context/ProjectContext";

export default function HomePage() {

    const {project} = useContext(ProjectContext);

    useEffect(() => {
        console.log(project);
    }, [])

    return(
        <>
            <h1>Home Page</h1>

        </>
    );
}