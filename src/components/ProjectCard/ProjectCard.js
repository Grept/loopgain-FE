import React from "react";

export default function ProjectCard({project}) {

    return(
        <>
            <p><strong>{project.projectName}</strong></p>
            <p><em>{project.director}</em></p>
        </>
    );
}