import React, {useEffect, useState} from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import "./ProjectHostPage.scss";
import axios from "axios";
import AddProjectForm from "../../components/AddForms/AddProjectForm/AddProjectForm";
import Popup from "../../components/GlobalComponents/Popup/Popup";

export default function ProjectHostPage() {

    // HOOKS
    const [showAddProject, setShowAddProject] = useState(false);
    const [mediaList, setMediaList] = useState();
    const [currentProject, setCurrentProject] = useState();
    const [projectList, setProjectList] = useState([]);

    // const {projectCollection, setProjectCollection} = useContext(ProjectContext)

    useEffect(() => {
        getAllProjects();
    }, [])

    useEffect(() => {
        console.log("current project:")
        console.log(currentProject)
    }, [currentProject])

    // METHODS
    function toggleAddProject() {
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
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setProjectList(userProjects);
        } catch (e) {
            console.log(e);
        }
    }

    // RENDER
    return (
        <main className="userPage__container">
            <SideBar
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                showAddProject={showAddProject}
                toggleAddProject={toggleAddProject}
                loadProjectMedia={loadProjectMedia}
                projectList={projectList}
                setProjectList={setProjectList}
            />
            <ProjectInfo
                mediaList={mediaList}
                currentProject={currentProject}
            />
            {showAddProject &&
                <Popup toggle={toggleAddProject}>
                    <AddProjectForm
                        toggleAddProject={toggleAddProject}
                        getAllProjects={getAllProjects}
                    />
                </Popup>
            }
        </main>
    );
}