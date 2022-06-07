import React, {useContext} from "react";
import "./SideBar.scss";
import {ProjectContext} from "../../context/ProjectContext";

export default function SideBar({toggleAddProject, loadProjectMedia}) {

    // HOOKS
    const {setProject, project, projectCollection} = useContext(ProjectContext)

    // RENDER
    return(
        <section className="sidebar">
            <section className="sidebar__projectList">
                <h3>Project List</h3>
                <ul>
                    {
                        projectCollection.map((p) => {
                            return(
                                <li key={`${p.id} + ${p.projectName}`}>
                                    <button
                                        className={
                                            `projectList__btn 
                                            ${project.projectName === p.projectName ? "selectedProject" : ""}`
                                        }
                                        onClick={() => {
                                            loadProjectMedia(p.projectMedia);
                                            setProject(p);
                                        }}
                                    >
                                        {p.projectName}
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
            <button
                className="projectList__btn-addNew"
                type="button"
                onClick={() => {
                    toggleAddProject();
                }}
            >
                Add New Project
            </button>
        </section>
    );
}