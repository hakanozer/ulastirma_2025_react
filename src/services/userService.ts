import { IProfile, IUser } from "../models/IUser"
import { apiConfig } from "./apiConfig"

export const userRegister = (name: string, email: string, password: string) => {
    const sendObj = {
        name: name,
        email: email,
        password: password
    }
    return apiConfig.post('auth/signup', sendObj)
}

export const userLogin = (email:string, password: string) => {
    const sendObj = {
        email,
        password
    }
    return apiConfig.post<IUser>('auth/login', sendObj)
}

export const userProfile = () => {
    const token = localStorage.getItem('token')
    const headers = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return apiConfig.get<IProfile>('profile/me', headers)
}

export const userLogout = () => {
    return apiConfig.post('auth/logout')
}