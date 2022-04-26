import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const ProjectContext = createContext({});

export default function ProjectContextProvider({children}) {

    const [project, setProject] = useState({
        id: null,
        projectName: "PROJECT",
        director: null,
        producer: null,
        projectMedia: []
    })

    const [projectCollection, setProjectCollection] =useState([])

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
            // console.log("Get all projects:")
            // console.log(userProjects);
            setProjectCollection([...projectCollection, userProjects])
            // return userProjects;
        } catch (e) {
            console.log(e);
        }
    }

    const data = {
        project: project,
        setProject: setProject,
        getAllProjects: getAllProjects
    };

    return(
        <ProjectContext.Provider value={data}>
            {children}
        </ProjectContext.Provider>
    );
}