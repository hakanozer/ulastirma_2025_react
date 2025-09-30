import React, { JSX } from 'react'
import { Navigate } from 'react-router-dom'

function Control(props: {item: JSX.Element }) {

  const stToken = localStorage.getItem('token')  

  return (
    stToken ? 
    props.item
    :
    <Navigate to={'/'} replace={true} />
  )
}

export default Control