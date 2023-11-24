import React, { createContext, useState } from "react";
export const addProjectResponseContext = createContext()
function ContextSahare({ children }) {
    const [addProjectResponse, setAddProjectResponse] = useState({})
    return (
        <>
            <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>{children}</addProjectResponseContext.Provider>
        </>
    )
}

export default ContextSahare