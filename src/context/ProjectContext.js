import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const ProjectContext = createContext({});

export default function ProjectContextProvider({children}) {

    // HOOKS
    const [project, setProject] = useState({
        id: null,
        projectName: "NO PROJECT SELECTED",
        director: null,
        producer: null,
        projectMedia: []
    })

    const [projectCollection, setProjectCollection] = useState([])

    useEffect(() => {
        getAllProjects();
    }, [])

    // METHODS
    async function getAllProjects() {
        console.log("Request project List")
        try {
            const {data: {projectDtoList: userProjects}} = await axios.get(`http://localhost:8080/getUserData`, {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setProjectCollection(userProjects)
        } catch (e) {
            console.log(e);
        }
    }

    async function getProject(projectId) {
        console.log("Request project")
        try {
            const {data} = await axios.get(`http://localhost:8080/user/projects/${projectId}`, {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setProject(data)
        } catch (e) {
            console.error(e);
        }
    }

    const data = {
        project: project,
        setProject: setProject,
        projectCollection: projectCollection,
        getAllProjects: getAllProjects,
        getProject: getProject
    };

    // RENDER
    return(
        <ProjectContext.Provider value={data}>
            {children}
        </ProjectContext.Provider>
    );
}