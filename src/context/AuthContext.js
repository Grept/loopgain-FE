import React, {createContext} from "react";

export const AuthContext = createContext({})

export default function AuthContextProvider({children}) {

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