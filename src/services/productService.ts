import { IAllProducts } from "../models/IAllProducts"
import { apiConfig } from "./apiConfig"

export const getAllProducts = (page: number) => { 
    const sendObj = { page: page, per_page: 10 }
    return apiConfig.get<IAllProducts>(`products`, { params: sendObj })
}