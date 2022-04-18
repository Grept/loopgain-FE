import React from "react";
import "./ProjectInfo.scss"
import {Link, withRouter} from "react-router-dom";

function ProjectInfo() {

    return (
        <main className="projectInfo__container">
            <h3 className="projectInfo__title">Media List</h3>
            <div className="projectInfo__list">
                <ul>
                    <li><Link>Media 1</Link></li>
                    <li><Link>Media 2</Link></li>
                    <li><Link>Media 3</Link></li>
                    <li><Link>Media 4</Link></li>
                    <li><Link>Media 5</Link></li>
                    <li><Link>Media 6</Link></li>
                    <li><Link>Media 7</Link></li>
                    <li><Link>Media 8</Link></li>
                </ul>
            </div>
        </main>
    );
}

export default withRouter(ProjectInfo);