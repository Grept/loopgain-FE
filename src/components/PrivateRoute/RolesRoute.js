import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {Redirect} from "react-router-dom";

export default function RolesRoute({children, allowedRole}) {

    const {user: {role}} = useContext(AuthContext)

    return(
        <>
            {role === allowedRole ? children : <Redirect to="/" />}
        </>
    );
}