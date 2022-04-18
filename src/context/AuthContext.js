import React, {createContext, useEffect, useState} from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({})

export default function AuthContextProvider({children}) {

    const [userAuth, setUserAuth] = useState({
        isAuth: false,
        user: null,
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
    })

    const history = useHistory();

    async function getUserData(jwtToken) {
        console.log("getting user data...")
        const decodedToken = jwtDecode(jwtToken);
        console.log(decodedToken);
        // const {sub: userId} = jwtDecode(jwtToken);

        // try {
        //     const {data} = await axios.get(`http://localhost:8080/users/$userId`, {
        //         headers: {
        //             "Content-Type" : "apllication/json",
        //             Authorization: `Bearer ${jwtToken}`
        //         }
        //     })
        //
        //     setUserAuth({
        //         ...userAuth,
        //         isAuth: true,
        //         user: null,
        //         status: "done"
        //     })
        // } catch (e) {
        //     console.log(e);
        // }
    }

    function logIn(jwtToken) {
        console.log("in login function...")
        localStorage.setItem("token", jwtToken);
        getUserData(jwtToken);
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

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}