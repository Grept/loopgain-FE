import React, {useEffect, useState} from "react";
import "./ProjectInfo.scss"
import {Link, withRouter} from "react-router-dom";
import AddMediaForm from "../AddMediaForm/AddMediaForm";

function ProjectInfo({currentProject}) {

    const [showAddMedia, setShowAddMedia] = useState(false);

    useEffect(() => {
        console.log("page load")
    }, [])

    useEffect(() => {
        console.log(`showAddMedia: ${showAddMedia}`);
    }, [showAddMedia])

    function toggleShowAddMedia() {
        setShowAddMedia(!showAddMedia);
    }

    return (
        <main className="projectInfo__container">
            <h3 className="projectInfo__title">Media List</h3>
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