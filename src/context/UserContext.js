import React, {createContext, useState} from "react";

export const UserContext = createContext({})

export default function UserContextProvider({children}) {

    const [userDetails, setUserDetails] = useState({})

}
