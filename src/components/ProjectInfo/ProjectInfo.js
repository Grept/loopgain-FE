import React, {useContext, useState} from "react";
import "./ProjectInfo.scss"
import AddMediaForm from "../AddForms/AddMediaForm/AddMediaForm";
import {ProjectContext} from "../../context/ProjectContext";
import MediafileCard from "../MediafileCard/MediafileCard";
import Popup from "../GlobalComponents/Popup/Popup";
import VerifyDelete from "../VerifyDelete/VerifyDelete";
import axios from "axios";

export default function ProjectInfo() {

    // HOOKS
    const [showAddMedia, setShowAddMedia] = useState(false);
    const [showVerifyDeleteProject, setShowVerifyDeleteProject] = useState(false);

    const {project, getAllProjects} = useContext(ProjectContext);

    // METHODS
    function toggleShowAddMedia() {
        setShowAddMedia(!showAddMedia);
    }

    function toggleShowVerifyDeleteProject() {
        setShowVerifyDeleteProject(!showVerifyDeleteProject);
    }

    async function deleteProject() {
        try {
            await axios.delete(`http://localhost:8080/user/projects/${project.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            getAllProjects();
        } catch (e) {
            console.error(e.getMessage)
        }
    }

    // RENDER
    return (
        <main className="projectInfo__container">
            <section className="projectInfo__info">
                <h1 className="projectInfo__info-title">{project.projectName}</h1>
                <div className="projectInfo__info-other">
                    <p><strong>Director:</strong> {project.director}</p>
                    <p><strong>Producer:</strong> {project.producer}</p>
                </div>
            </section>

            <section className="projectInfo__list-container">
                <h3 className="projectInfo__header">PROJECT MEDIA:</h3>

                <ul className="projectInfo__list">
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

                {showVerifyDeleteProject &&
                <Popup toggle={toggleShowVerifyDeleteProject}>
                    <VerifyDelete
                        togglePopup={toggleShowVerifyDeleteProject}
                        doDelete={deleteProject}
                        itemName={project.projectName}
                    />
                </Popup>
                }
            </section>

            <section className="projectInfo__btn">
                <button
                    type="button"
                    className="projectInfo__btn-addMedia"
                    disabled={project.id === null}
                    onClick={toggleShowAddMedia}
                >
                    Add Media File
                </button>
                <button
                    className="projectInfo__btn-deleteProject"
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