import React, {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {Redirect, Route} from "react-router-dom";

export default function AuthRoute({children, ...rest}) {

    // HOOKS
    const {auth} = useContext(AuthContext)

    // RENDER
    return(
        <Route {...rest}>
            {auth ? children : <Redirect to="/signin" />}
        </Route>
    );
}