import { createContext, useEffect, useState } from "react";
import DP from "../images/pexels-yurii-hlei-1545743.jpg";


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || false
    );

    const login = () => {
        // react context api reference
        console.log("Before setting user:", currentUser);
        setCurrentUser({
            id: 1,
            name: "Driver 1",
            profilePic: DP // Using imported image directly
        });
        console.log("After setting user:", currentUser);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider value = {{ currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
};