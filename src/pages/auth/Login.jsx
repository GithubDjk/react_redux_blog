import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { login, setStatus, setToken } from '../../../store/authSlice'
import store from '../../../store/store'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const {user, status, token} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const handleLogin = (data) => {
    dispatch(login(data))
  }

  useEffect(()=>{
    if(status === STATUSES.SUCCESS){
      navigate('/')
      localStorage.setItem('jwttoken', token )
      dispatch(setToken(token))
      dispatch(setStatus(null))
    }
  }, [status])

  return ( 
  <Form type='Login' onSubmit={handleLogin} />
  )
}

export default Login