import React, {useContext, useEffect} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

export default function UserPage() {
    const {user} = useContext(AuthContext)

    useEffect(() => {
        console.log("UserPage Loaded...")
        console.log(user)
    }, [])

    if(user.role === "PROJECT_HOST") {
        console.log("role:" + user.role)
        return(
            <>
                {console.log("Redirect to projecthost")}
                <Redirect exact to="projecthost" />
            </>
        );
    } else if(user.role === "REVIEWER") {
        console.log("role:" + user.role)
        return(
            <>
                {console.log("Redirect to review-request")}
                <Redirect exact to="review-requests" />
            </>
        );

    }



}