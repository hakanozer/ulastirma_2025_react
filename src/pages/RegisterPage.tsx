import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { validateEmail, validateName, validatePassword } from '../utils/valid'
import { toast } from 'react-toastify';
import { userRegister } from '../services/userService';

function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sendRegister = (evt: React.FormEvent ) => {
        evt.preventDefault()
        if (!validateName(name)) {
            toast.error('Name is not valid - only letters and space - min 3 max 30 char - no number')
        } else if (!validateEmail(email)) {
            toast.error('Email is not valid - must be a valid email address')
        } else if (!validatePassword(password)) {
            toast.error('Password is not valid - 8 to 12 chars - at least one uppercase, one lowercase and one number')
        } else {
           userRegister(name, email, password).then(res => {
            // işlem başarılı olduysa - 200 ve ailesi döndüyse
            const dt = res.data
            console.log(dt)
           }).catch(err => {
            // işlem 200 ve ailesi dışında ise
            if (err.status === 422) {
                toast.error('The email has already been taken.')
            }else {
                toast.error('Please try again later.')
            }
           })
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