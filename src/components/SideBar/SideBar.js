import React, {useContext, useEffect, useState} from "react";
import "./SideBar.scss";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import {logDOM} from "@testing-library/react";
import {ProjectContext} from "../../context/ProjectContext";
import {PopupContext} from "../../context/PopupContext";
import ProjectCard from "../ProjectCard/ProjectCard";

function SideBar({toggleAddProject, showAddProject, loadProjectMedia, setCurrentProject, projectList, setProjectList}) {

    // STATE
    const {setProject, project, projectCollection, setProjectCollection} = useContext(ProjectContext)
    const {togglePopup} = useContext(PopupContext)


    // EFFECTS
    useEffect(() => {
        console.log("projectCollection:")
        console.log(projectCollection)
        console.log("projectList:")
        console.log(projectList)
    }, [projectCollection])

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
                                        {/*<ProjectCard project={p}/>*/}
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
                    togglePopup();
                }}
            >
                Add New Project
            </button>
        </section>
    );
}

export default withRouter(SideBar);