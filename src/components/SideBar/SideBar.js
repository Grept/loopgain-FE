import React from "react";
import "./SideBar.scss";
import {Link} from "react-router-dom";

export default function SideBar() {

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
                    <li><Link>Project 1</Link></li>
                    <li><Link>Project 2</Link></li>
                    <li><Link>Project 3</Link></li>
                    <li><Link>Project 4</Link></li>
                </ul>
            </section>
        </section>
    );
}