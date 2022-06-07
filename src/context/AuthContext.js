import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({})

export default function AuthContextProvider({children}) {
    const history = useHistory();

    // HOOKS
    const [userAuth, setUserAuth] = useState({
        isAuth: false,
        user: {},
        status: "pending"
    })

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            getUserData(token)
        } else {
            setUserAuth({
                ...userAuth,
                status: "done"
            });
        }
    }, [])

    useEffect(() => {
        console.log("userAuth has changed:")
        console.log(userAuth);
    }, [userAuth])

    // METHODS
    async function getUserData(jwtToken) {
        try {
            const {data} = await axios.get(`http://localhost:8080/getUserData`, {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${jwtToken}`
                }
            })

            setUserAuth({
                ...userAuth,
                isAuth: true,
                user: data,
                status: "done"
            })

            history.push("/user");

        } catch (e) {
            console.log(e);
        }
    }

    function logIn(jwtToken) {
        localStorage.setItem("token", jwtToken);
        getUserData(localStorage.getItem("token"));
    }

    function logOut() {
        localStorage.removeItem("token");
        setUserAuth({
            ...userAuth,
            isAuth: false,
            user: null,
            status: "done"
        });

        console.log("User is logged out.");
        history.push("/");
    }

    const data = {
        auth: userAuth.isAuth,
        user: userAuth.user,
        loginFunction: logIn,
        logoutFunction: logOut
    }

    // RENDER
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}