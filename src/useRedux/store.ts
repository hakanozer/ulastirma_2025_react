import {legacy_createStore, combineReducers} from 'redux'
import { likesReducer } from './likesReducer'

const combine = combineReducers({
    likesReducer, 
})

export type StateType = ReturnType<typeof combine>

export const store = legacy_createStore(combine)