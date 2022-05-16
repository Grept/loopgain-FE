import React, {useContext, useEffect, useState} from "react";
import "./ProjectInfo.scss"
import {Link, withRouter} from "react-router-dom";
import AddMediaForm from "../AddForms/AddMediaForm/AddMediaForm";
import {ProjectContext} from "../../context/ProjectContext";
import MediafileCard from "../MediafileCard/MediafileCard";

function ProjectInfo() {

    const [showAddMedia, setShowAddMedia] = useState(false);
    const {project} = useContext(ProjectContext);

    useEffect(() => {
        console.log("page load")
        console.log(project)
    }, [])

    useEffect(() => {
        console.log(`showAddMedia: ${showAddMedia}`);
    }, [showAddMedia])

    function toggleShowAddMedia() {
        setShowAddMedia(!showAddMedia);
    }

    // function reloadPage() {
    //     window.location.reload(true);
    // }

    return (
        <main className="projectInfo__container">
            <section className="projectInfo__info">
                <h1 className="projectInfo__info-title">{project.projectName}</h1>
                <div className="projectInfo__info-other">
                    <p>Director: {project.director}</p>
                    <p>Producer: {project.producer}</p>
                </div>
            </section>

            <section className="projectInfo__list-container">
                <section className="projectInfo__list">
                    <h3 className="projectInfo__header">Project Media:</h3>
                    {
                        showAddMedia
                            ?
                            <AddMediaForm toggleShowAddMedia={toggleShowAddMedia}/>
                            :
                            <ul>
                                {project &&
                                project.projectMedia.map((m) => {
                                    return (
                                        <li
                                            key={`${m.id} + ${m.fileName}`}
                                        >
                                            <Link exact to={`/content/${m.id}`}>
                                                <MediafileCard mediafile={m}/>
                                            </Link>
                                        </li>
                                    )
                                })
                                }
                            </ul>
                    }
                </section>


                <button
                    className="projectInfo__btn-addMedia"
                    onClick={toggleShowAddMedia}
                >
                    Add Media File
                </button>
            </section>
        </main>
    );
}

export default withRouter(ProjectInfo);