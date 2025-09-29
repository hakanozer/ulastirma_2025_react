import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { validateEmail, validateName, validatePassword } from '../utils/valid'

function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sendRegister = (evt: React.FormEvent ) => {
        evt.preventDefault()
        if (!validateName(name)) {
            alert('Name is not valid - only letters and space - min 3 max 30 char - no number') 
        } else if (!validateEmail(email)) {
            alert('Email is not valid - must be a valid email address')
        } else if (!validatePassword(password)) {
            alert('Password is not valid - 6 to 12 chars - at least one uppercase, one lowercase and one number')
        } else {
            console.log("Form Send", name, email, password)
        }
    }

  return (
        <>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
            <h2>User Register</h2>
            <form onSubmit={sendRegister}>
                <div className='mb-3'>
                    <input onChange={(evt) => setName(evt.target.value)} type='text' className='form-control' placeholder='Name' />
                </div>
                <div className='mb-3'>
                    <input onChange={(evt) => setEmail(evt.target.value)} type='email' className='form-control' placeholder='E-Mail' />
                </div>
                <div className='mb-3'>
                    <input onChange={(evt) => setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password' />
                </div>
                <div className='mb-3'>
                    <button className='btn btn-success' type='submit'>Register</button>
                    <NavLink to="/" className="btn btn-info float-end">Login</NavLink>
                </div>
            </form>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </>
  )
}

export default RegisterPage