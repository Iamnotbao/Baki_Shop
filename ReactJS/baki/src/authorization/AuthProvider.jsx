import React, { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext();
export const AuthProvider=({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);



    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            setIsAuthenticated(true)
        }
    },[])
    const login=(token,userId)=>{
        localStorage.setItem("token",token);
        localStorage.setItem("userId",userId);
        setIsAuthenticated(true);
    }
    const logout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("cart");
        setIsAuthenticated(false);

    }
    
    return(
        <AuthContext.Provider value={{isAuthenticated,login, logout}}>
           {children} 
        </AuthContext.Provider>
    )
}

export const useAuthentication = ()=>{
    return useContext(AuthContext);
}
