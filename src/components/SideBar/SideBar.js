import React, {useEffect, useState} from "react";
import "./SideBar.scss";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import {logDOM} from "@testing-library/react";

function SideBar() {

    const [projectList, setProjectList] = useState(["item 1", "item 2", "item 3"])

    useEffect(() => {
        // setProjectList(getAllProjects());
    }, [])

    async function getAllProjects(jwtToken) {
        console.log("Request project List")
        try {
            const result = await axios.get("http://localhost:8080/projects", {
                header: {
                    "Content-Type" : "application/json",
                    Authentication: `Bearer ${jwtToken}`
                }
            })

            console.log(result);
            return result;
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <section className="sidebar">
            <section className="sidebar sidebar__userDetails">
                <h4>User Details</h4>
                <p>Tom Jansen</p>
                <p>Project Host</p>
                <p></p>
            </section>
            <section className="sidebar sidebar__projectList">
                <h3>Project List</h3>
                <ul>
                    {/*{projectList.map(() => {*/}
                    {/*    return (*/}
                    {/*        <li>item</li>*/}
                    {/*    )*/}
                    {/*})}*/}

                </ul>
            </section>
        </section>
    );
}

export default withRouter(SideBar);