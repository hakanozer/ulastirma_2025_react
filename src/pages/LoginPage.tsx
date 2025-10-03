import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { validateEmail } from '../utils/valid'
import { toast } from 'react-toastify'
import { userLogin } from '../services/userService'
import { apiConfig } from '../services/apiConfig'
import Seo from '../components/Seo'

function LoginPages() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // form send fnc
  const sendLogin = (evt: React.FormEvent ) => {
    evt.preventDefault() // form gönderimini durdur.
    if(!validateEmail(email)) {
        toast.error('Invalid E-Mail Address')
    }else if (password.length < 5 || password.length > 12) {
        toast.error('Invalid Password')
    } else {
      // login işlemi
      userLogin(email, password).then(res => {
        const dt = res.data
        localStorage.setItem('token', dt.data.access_token)
        apiConfig.defaults.headers.common['Authorization'] = `Bearer ${dt.data.access_token}`;
        navigate('/dashboard', {replace: true})
      }).catch(err => {
        toast.error('E-Mail or Password Fail!')
      })
    }
  }

  return (
    <>
    <Seo title='Login' desc='Login Description'/>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
            <h2>User Login</h2>
            <form onSubmit={sendLogin}>
                <div className='mb-3'>
                    <input onChange={(evt) => setEmail(evt.target.value)}  type='email' className='form-control' placeholder='E-Mail' />
                </div>
                <div className='mb-3'>
                    <input onChange={(evt) => setPassword(evt.target.value)}   type='password' className='form-control' placeholder='Password' />
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