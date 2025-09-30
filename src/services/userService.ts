import { apiConfig } from "./apiConfig"













export const userRegister = (name: string, email: string, password: string) => {
    const sendObj = {
        name: name,
        email: email,
        password: password
    }
    return apiConfig.post('auth/signup', sendObj)
}