import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


// register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}


// Login
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// addProject
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/projects/add`,reqBody,reqHeader)
}


//homeProjects

export const homeProjectsAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home-projects`,"","")
}

export const allProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all`,"",reqHeader)
}