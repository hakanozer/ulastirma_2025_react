import axios from "axios";

const baseURL = 'https://jsonbulut.com/api/'
export const apiConfig = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    //headers: {"token": "token123"},
    //data: {"data": "newData"}
})