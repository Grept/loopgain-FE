import {createContext, useState, useEffect} from "react";

export const ProjectContext = createContext({});

export default function ProjectContextProvider({children}) {
    const [project, setProject] = useState({
        projectName: "dummy name",
        director: "director x",
        producer: "producer b"
    })

    const data = {
        project: project,
        setProject: setProject
    };

    return(
        <ProjectContext.Provider value={data}>
            {children}
        </ProjectContext.Provider>
    );
}