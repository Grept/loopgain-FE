import React, {useContext, useEffect, useState} from "react";
import "./ProjectInfo.scss"
import {Link, withRouter} from "react-router-dom";
import AddMediaForm from "../AddForms/AddMediaForm/AddMediaForm";
import {ProjectContext} from "../../context/ProjectContext";
import MediafileCard from "../MediafileCard/MediafileCard";
import Popup from "../GlobalComponents/Popup/Popup";
import VerifyDelete from "../VerifyDelete/VerifyDelete";
import axios from "axios";

function ProjectInfo() {

    const [showAddMedia, setShowAddMedia] = useState(false);
    const [showVerifyDeleteProject, setShowVerifyDeleteProject] = useState(false);
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

    function toggleShowVerifyDeleteProject() {
        setShowVerifyDeleteProject(!showVerifyDeleteProject);
    }

    async function deleteProject() {
        try {
            const response = await axios.delete(`http://localhost:8080/user/projects/${project.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(response);

        } catch (e) {
            console.error(e.getMessage)
        }
    }

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

                    <ul>
                        {project &&
                        project.projectMedia.map((m) => {
                            return (
                                <li
                                    key={`${m.id} + ${m.fileName}`}
                                >
                                        <MediafileCard mediafile={m} url={`/content/${m.id}`}/>
                                </li>
                            )
                        })
                        }
                    </ul>
                    {showAddMedia &&
                        <Popup toggle={toggleShowAddMedia}>
                            <AddMediaForm toggleShowAddMedia={toggleShowAddMedia}/>
                        </Popup>
                    }
                </section>

                {showVerifyDeleteProject &&
                    <Popup toggle={toggleShowVerifyDeleteProject}>
                        <VerifyDelete
                            togglePopup={toggleShowVerifyDeleteProject}
                            doDelete={deleteProject}
                            itemName={project.projectName}
                        />
                    </Popup>
                }

                <button
                    type="button"
                    className="projectInfo__btn-addMedia"
                    disabled={project.id === null}
                    onClick={toggleShowAddMedia}
                >
                    Add Media File
                </button>
                <button
                    type="button"
                    onClick={toggleShowVerifyDeleteProject}
                    disabled={project.id === null}
                >
                    Delete Project
                </button>
            </section>
        </main>
    );
}

export default withRouter(ProjectInfo);