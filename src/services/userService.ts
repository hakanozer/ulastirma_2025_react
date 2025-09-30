import { IUser } from "../models/IUser"
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
