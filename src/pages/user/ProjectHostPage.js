import React, {useState} from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import "./ProjectHostPage.scss";
import AddProjectForm from "../../components/AddForms/AddProjectForm/AddProjectForm";
import Popup from "../../components/GlobalComponents/Popup/Popup";

export default function ProjectHostPage() {

    // HOOKS
    const [showAddProject, setShowAddProject] = useState(false);
    const [mediaList, setMediaList] = useState();

    // METHODS
    function toggleAddProject() {
        setShowAddProject(!showAddProject);
    }

    function loadProjectMedia(mediaList) {
        setMediaList(mediaList);
    }

    // RENDER
    return (
        <main className="userPage__container">
            <SideBar
                showAddProject={showAddProject}
                toggleAddProject={toggleAddProject}
                loadProjectMedia={loadProjectMedia}
            />

            <ProjectInfo
                mediaList={mediaList}
            />

            {showAddProject &&
            <Popup toggle={toggleAddProject}>
                <AddProjectForm
                    toggleAddProject={toggleAddProject}
                />
            </Popup>
            }
        </main>
    );
}