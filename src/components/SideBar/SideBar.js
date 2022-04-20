import React, {useEffect, useState} from "react";
import "./SideBar.scss";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import {logDOM} from "@testing-library/react";

function SideBar({toggleAddProject, isAddProject}) {

    const [projectList, setProjectList] = useState(["item 1", "item 2", "item 3"])

    useEffect(() => {
        getAllProjects();
        // console.log(projects);
        // setProjectList(projects);
    }, [])

    async function getAllProjects() {
        console.log("Request project List")
        try {
            const {data: userProjects} = await axios.get("http://localhost:8080/user/projects", {
                headers: {
                    "Content-Type" : "application/json",
                    Authentication: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log("Get all projects:")
            console.log(userProjects);
            setProjectList(userProjects);
            return userProjects;
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <section className="sidebar">
            <section className="sidebar sidebar__userDetails">
                <h4>User Details</h4>
                <p>Tom Jansen</p>
                <p>Project Host</p>
                <p></p>
            </section>
            <section className="sidebar sidebar__projectList">
                <h3>Project List</h3>
                <ul>
                    {
                        projectList.map((p) => {
                            return(
                                <li key={`${p.id} + ${p.projectName}`}>
                                    {p.projectName}
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
            <button
                type="button"
                onClick={() => toggleAddProject()}
            >
                {!isAddProject ? <>Add New Project</> : <>See Media List</>}
            </button>
        </section>
    );
}

export default withRouter(SideBar);