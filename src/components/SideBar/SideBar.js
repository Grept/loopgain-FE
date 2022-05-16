import React, {useContext, useEffect, useState} from "react";
import "./SideBar.scss";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import {logDOM} from "@testing-library/react";
import {ProjectContext} from "../../context/ProjectContext";
import {PopupContext} from "../../context/PopupContext";

function SideBar({toggleAddProject, showAddProject, loadProjectMedia, setCurrentProject, projectList, setProjectList}) {

    // STATE
    const {setProject} = useContext(ProjectContext)
    const {togglePopup} = useContext(PopupContext)


    // EFFECTS
    useEffect(() => {
        console.log("project list changed...")
    }, [projectList])

    return(
        <section className="sidebar">
            <section className="sidebar__projectList">
                <h3>Project List</h3>
                <ul>
                    {
                        projectList.map((p) => {
                            return(
                                <li key={`${p.id} + ${p.projectName}`}>
                                    <button
                                        className="projectList__btn"
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
                    togglePopup();
                }}
            >
                Add New Project
            </button>
        </section>
    );
}

export default withRouter(SideBar);