export enum ELikes {
    LIST='LIST'
}

export interface ILikeAction {
    type: ELikes,
    payload: number[]
}

export const likesReducer = () => {

}