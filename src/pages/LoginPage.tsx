import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function LoginPages() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // form send fnc
  const sendLogin = (evt: React.FormEvent ) => {
    evt.preventDefault() // form gönderimini durdur.
    console.log("Form Send", email, password)
  }  

  return (
    <>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
            <h2>User Login</h2>
            <form onSubmit={sendLogin}>
                <div className='mb-3'>
                    <input onChange={(evt) => setEmail(evt.target.value)} required type='email' className='form-control' placeholder='E-Mail' />
                </div>
                <div className='mb-3'>
                    <input onChange={(evt) => setPassword(evt.target.value)}  required type='password' className='form-control' placeholder='Password' />
                </div>
                <div className='mb-3'>
                    <button className='btn btn-success' type='submit'>Login</button>
                    <NavLink to="/register" className="btn btn-info float-end">Register</NavLink>
                </div>
            </form>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </>
  )
}

export default LoginPages