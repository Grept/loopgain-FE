import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import Footer from "../../components/Footer/Footer";

export default function UserPage() {

    return(
        <>
            <Header />;
            <SideBar />;
            <ProjectInfo />;
            <Footer />;
        </>
    );
}