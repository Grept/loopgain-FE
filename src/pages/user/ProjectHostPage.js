import React, {useEffect, useState} from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import "./ProjectHostPage.scss";
import axios from "axios";
import AddProjectForm from "../../components/AddForms/AddProjectForm/AddProjectForm";
import {set} from "react-hook-form";

export default function ProjectHostPage() {

    // STATE
    const [showAddProject, setShowAddProject] = useState(false);
    const [mediaList, setMediaList] = useState([{projectName: "testname"}]);
    const [currentProject, setCurrentProject] = useState({projectMedia:[]});
    const [projectList, setProjectList] = useState([]);

    // EFFECT
    useEffect(() => {
        getAllProjects();
    }, [])

    useEffect(() => {
        console.log("current project:")
        console.log(currentProject)
    }, [currentProject])

    // METHODS
    function toggleAddProject(){
        setShowAddProject(!showAddProject);
    }

    function loadProjectMedia(mediaList) {
        setMediaList(mediaList);
    }

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
        } catch (e) {
            console.log(e);
        }
    }

    // RENDER
    return(
        <main className="userPage__container">
            {/*<h3>User Page</h3>*/}
            <SideBar
                setCurrentProject={setCurrentProject}
                showAddProject={showAddProject}
                toggleAddProject={toggleAddProject}
                loadProjectMedia={loadProjectMedia}
                projectList={projectList}
                setProjectList={setProjectList}
            />
            {!showAddProject
                ? <ProjectInfo
                    mediaList={mediaList}
                    currentProject={currentProject}
                />
                : <AddProjectForm
                    toggleAddProject={toggleAddProject}
                    getAllProjects={getAllProjects}
                /> }
        </main>
    );
}