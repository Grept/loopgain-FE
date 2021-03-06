import React, {useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import logo from "../../../assets/logos/loopgain_gradient_circle-play.svg";
import "./NavBar.scss";
import {AuthContext} from "../../../context/AuthContext";

export default function Navbar() {

    // HOOKS
    const history = useHistory();
    const {auth, logoutFunction, user} = useContext(AuthContext);

    // RENDER
    return(
        <nav>
            <Link exact to="/">
                <span className="logo">
                    <img src={logo} alt="loopgain-logo" className="logo--img"/>
                    <h3 className="logo--name">loopgain</h3>
                </span>
            </Link>

            {user !== null && <h3>{user.username}</h3>}

            <div className="account">
                {!auth
                    ?
                    <>
                        <button
                            type="button"
                            className="account account__btn"
                            onClick={() => history.push("/signin")}
                        >
                            signin
                        </button>
                        <button
                            type="button"
                            className="account account__btn"
                            onClick={() => history.push("/register")}
                        >
                            register
                        </button>
                    </>
                    :
                    <>
                        <button
                            type="button"
                            className="account account__btn"
                            onClick={() => history.push("/user")}
                        >
                            profile
                        </button>
                        <button
                            type="button"
                            className="account account__btn"
                            onClick={logoutFunction}
                        >
                            logout
                        </button>
                    </>
                }
            </div>
        </nav>
    );
}