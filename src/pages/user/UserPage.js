import React, {useEffect, useState} from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import "./UserPage.scss";
import axios from "axios";
import AddProjectForm from "../../components/AddProjectForm/AddProjectForm";

export default function UserPage() {

    // STATE
    const [showAddProject, setShowAddProject] = useState(false);
    const [mediaList, setMediaList] = useState([{projectName: "testname"}]);
    const [currentProject, setCurrentProject] = useState({projectMedia:[]});

    // EFFECT
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

    // RENDER
    return(
        <main className="userPage__container">
            {/*<h3>User Page</h3>*/}
            <SideBar
                setCurrentProject={setCurrentProject}
                showAddProject={showAddProject}
                toggleAddProject={toggleAddProject}
                loadProjectMedia={loadProjectMedia}
            />
            {!showAddProject
                ? <ProjectInfo mediaList={mediaList} currentProject={currentProject} />
                : <AddProjectForm toggleAddProject={toggleAddProject}/> }
        </main>
    );
}