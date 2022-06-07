import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

export default function UserPage() {
    const {user} = useContext(AuthContext)

    if(user.role === "PROJECT_HOST") {
        console.log("role:" + user.role)
        return(
            <>
                <Redirect exact to="projecthost" />
            </>
        );
    } else if(user.role === "REVIEWER") {
        console.log("role:" + user.role)
        return(
            <>
                <Redirect exact to="review-requests" />
            </>
        );
    }
}