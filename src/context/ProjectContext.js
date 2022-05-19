import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const ProjectContext = createContext({});

export default function ProjectContextProvider({children}) {

    const [project, setProject] = useState({
        id: null,
        projectName: "NO PROJECT SELECTED",
        director: null,
        producer: null,
        projectMedia: []
    })

    const [projectCollection, setProjectCollection] =useState([])

    useEffect(() => {
        getAllProjects();
    }, [])

    useEffect(() => {
        console.log("Project Collection:")
        console.log(projectCollection)
    }, [projectCollection])

    useEffect(() => {
        console.log("project changed")
    }, [project])

    async function getAllProjects() {
        console.log("Request project List")
        try {
            const {data: {projectDtoList: userProjects}} = await axios.get(`http://localhost:8080/getUserData`, {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log("userProjects:")
            console.log(userProjects)
            setProjectCollection(userProjects)
        } catch (e) {
            console.log(e);
        }
    }

    const data = {
        project: project,
        setProject: setProject,
        projectCollection: projectCollection,
        getAllProjects: getAllProjects
    };

    return(
        <ProjectContext.Provider value={data}>
            {children}
        </ProjectContext.Provider>
    );
}