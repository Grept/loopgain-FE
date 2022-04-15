import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logos/loopgain_gradient_play.png";
import "./NavBar.scss";

export default function Navbar() {

    return(
        <nav>
            <Link>
                <span className="logo">
                    <img src={logo} alt="loopgain-logo" className="logo--img"/>
                    <h3 className="logo--name">loopgain</h3>
                </span>
            </Link>
            <div className="account">
                <button className="account__btn">
                    sign in
                </button>
                <button className="account__btn">
                    register
                </button>
            </div>
        </nav>
    );
}