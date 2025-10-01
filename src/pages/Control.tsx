import React, { JSX, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { userProfile } from '../services/userService'
import { apiConfig } from '../services/apiConfig'
import Navbar from '../components/Navbar'
import { IProfile } from '../models/IUser'

function Control(props: {item: JSX.Element }) {

  const stToken = localStorage.getItem('token')
  apiConfig.defaults.headers.common['Authorization'] = `Bearer ${stToken}`;

  const [user, setUser] = useState<IProfile>()
  useEffect(() => {
    userProfile().then((res) => {
        const user = res.data
        setUser(user)
    }).catch(err => {
      localStorage.removeItem('token')
      window.location.href = '/'
    })
  }, [])

  return (
    stToken ?
    <>
      <Navbar user={user}/>
      {props.item}
    </>
    :
    <Navigate to={'/'} replace={true} />
  )

}

export default Control