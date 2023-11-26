import React, { createContext, useState } from "react";
export const addProjectResponseContext = createContext()
export const editProjectResponseContext = createContext()
function ContextSahare({ children }) {
    const [addProjectResponse, setAddProjectResponse] = useState({})
    const [editProjectResponse, setEditProjectResponse] = useState({})
    return (
        <>
            <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}><editProjectResponse.Provider value={{ editProjectResponse, setEditProjectResponse }}>{children}</editProjectResponse.Provider></addProjectResponseContext.Provider>
        </>
    )
}

export default ContextSahare