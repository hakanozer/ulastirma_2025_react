import { UnknownAction } from "redux"

export enum ELikes {
    LIST='LIST'
}

export interface ILikeAction extends UnknownAction{
    type: ELikes,
    payload: number[]
}

export const likesReducer = (state: number[] = [], action: ILikeAction) => {

    switch (action.type) {
        case ELikes.LIST:
            return action.payload
        default:
            return state
    }

}