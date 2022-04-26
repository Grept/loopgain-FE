import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {Redirect, Route} from "react-router-dom";

export default function AuthRoute({children, ...rest}) {

    const {auth} = useContext(AuthContext)

    return(
        <Route {...rest}>
            {auth ? children : <Redirect to="/signin" />}
        </Route>
    );
}