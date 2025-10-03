import React, { useEffect, useState } from 'react'
import { IProfile } from '../models/IUser'
import { userLogout } from '../services/userService'
import { NavLink } from 'react-router-dom'
import { allLikes } from '../utils/likesStore'
import { useDispatch, useSelector } from 'react-redux'
import { ELikes, ILikeAction } from '../useRedux/likesReducer'
import { StateType } from '../useRedux/store'

function Navbar(props: {user?: IProfile}) {

// redux data send
const dispatch = useDispatch()

// redux data pull
const likesArr = useSelector((state: StateType) => state.likesReducer)

useEffect(() => {
    const arr = allLikes()
    const likesObj: ILikeAction = {
        type: ELikes.LIST,
        payload: arr
    }
    dispatch(likesObj)
}, [])  

const logout = () => {
    userLogout().then(res => {
        localStorage.removeItem('token')
        window.location.href = '/'
    })
}

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand">App Title</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to={'/dashboard'} className="nav-link" aria-current="page" >Products</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={'/likes'} className="nav-link">Likes</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li onClick={logout} role='button'><a className="dropdown-item">Logout</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Sn. {props.user?.data.name} - ({likesArr.length})</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default Navbar