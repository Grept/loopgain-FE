import React, {useEffect, useState} from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import "./UserPage.scss";
import axios from "axios";
import AddProjectForm from "../../components/AddProject/AddProjectForm";

export default function UserPage() {

    // STATE
    const [isAddProject, setIsAddProject] = useState(false);

    useEffect(() => {
        getProjectList();
    }, [])

    function toggleAddProject(){
        setIsAddProject(!isAddProject);
    }

    async function getProjectList() {
        try {
            const response = await axios.get("http://localhost:8080/user/projects", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <main className="userPage__container">
            {/*<h3>User Page</h3>*/}
            <SideBar
                isAddProject={isAddProject}
                toggleAddProject={toggleAddProject}
            />
            {!isAddProject ? <ProjectInfo /> : <AddProjectForm /> }
        </main>
    );
}