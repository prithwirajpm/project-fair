import React, { createContext, useState } from "react";

export const addProjectResponseContext = createContext()


function contextShare({children}){
    const [addProjectResponse,setaddProjectResponse] = useState({})
    return(
        <>
        <addProjectResponseContext.Provider value={{addProjectResponse,setaddProjectResponse}}>{children}</addProjectResponseContext.Provider>
        </>
    )
}

export default contextShare