import React, {useContext, useEffect, useState} from "react";
import "./ProjectInfo.scss"
import {Link, withRouter} from "react-router-dom";
import AddMediaForm from "../AddMediaForm/AddMediaForm";
import {ProjectContext} from "../../context/ProjectContext";

function ProjectInfo({currentProject}) {

    const [showAddMedia, setShowAddMedia] = useState(false);

    useEffect(() => {
        console.log("page load")
        console.log(currentProject)
    }, [])

    useEffect(() => {
        console.log(`showAddMedia: ${showAddMedia}`);
    }, [showAddMedia])

    function toggleShowAddMedia() {
        setShowAddMedia(!showAddMedia);
    }

    return (
        <main className="projectInfo__container">
            <div className="projectInfo__info">
                <h1 className="projectInfo__info-title">{currentProject.projectName}</h1>
                <div className="projectInfo__info-other">
                    <p>Director: {currentProject.director}</p>
                    <p>Producer: {currentProject.producer}</p>
                </div>
            </div>
            <h3 className="projectInfo__header">Media List</h3>
            <button onClick={toggleShowAddMedia}>Add Media File</button>
            {showAddMedia && <AddMediaForm currentProject={currentProject}/>}
            <div className="projectInfo__list">
                <ul>
                    {currentProject &&
                        currentProject.projectMedia.map((m) => {
                            return(
                                <li
                                    key={`${m.id} + ${m.fileName}`}
                                >
                                    <Link exact to={`/content/${m.id}`}>
                                        <div className="mediaList__container">
                                        <span>{m.fileName}</span>
                                        <span>{m.id}</span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </main>
    );
}

export default withRouter(ProjectInfo);