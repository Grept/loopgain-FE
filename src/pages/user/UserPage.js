import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import "./UserPage.scss";

export default function UserPage() {

    return(
        <main className="userPage__container">
            {/*<h3>User Page</h3>*/}
            <SideBar />
            <ProjectInfo />
        </main>
    );
}