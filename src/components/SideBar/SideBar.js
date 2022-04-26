import React, {useContext, useEffect, useState} from "react";
import "./SideBar.scss";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import {logDOM} from "@testing-library/react";
import {ProjectContext} from "../../context/ProjectContext";

function SideBar({toggleAddProject, showAddProject, loadProjectMedia, setCurrentProject}) {

    const [projectList, setProjectList] = useState([])
    const {setProject} = useContext(ProjectContext)


    useEffect(() => {
        getAllProjects();
        // console.log(projects);
        // setProjectList(projects);
    }, [])

    useEffect(() => {

    }, [projectList])

    async function getAllProjects() {
        console.log("Request project List")
        try {
            const {data: {projectDtoList: userProjects}} = await axios.get(`http://localhost:8080/getUserData`, {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setProjectList(userProjects);
            // return userProjects;
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <section className="sidebar">
            {/*<section className="sidebar sidebar__userDetails">*/}
            {/*    <h4>User Details</h4>*/}
            {/*    <p>Tom Jansen</p>*/}
            {/*    <p>Project Host</p>*/}
            {/*</section>*/}
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
                onClick={() => toggleAddProject()}
            >
                {!showAddProject ? <>Add New Project</> : <>See Media List</>}
            </button>
        </section>
    );
}

export default withRouter(SideBar);