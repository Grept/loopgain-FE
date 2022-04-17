import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logos/loopgain_gradient_circle-play.svg";
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
                <Link type="button" className="account account__btn">
                    signin
                </Link>
                <Link type="button" className="account account__btn">
                    register
                </Link>
            </div>
        </nav>
    );
}