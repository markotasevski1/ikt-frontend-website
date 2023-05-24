import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import {useContext} from 'react'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const LOGIN_URL = '/auth/login'

export function LoginForm() {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const errRef = useRef(null)
  //const userRef = useRef(null)

  // useEffect(() => {
  //   userRef.current.focus()
  // }, [])
  useEffect(() => {
    setErrMsg('Cannot login')
  }, [email, password])

  const navigate = useNavigate()
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            'Content-Type': 'application/json',
            withCredentials: true,
          },
        }
      )

      const accessToken = response.data.token
      setAuth(accessToken); 
      if (response.status === 200) {
        navigate('/home')
      
      }
    } catch (error) {
      console.log('Invalid credentials')
      
    }
  }
  return (
    <Card className="panelStyle">
      <p ref={errRef} className={errMsg ? 'error' : 'offscreenError'}>
        {errMsg}
      </p>
      <Form
        
        className="LoginForm"
        controlId="loginForm"
        onSubmit={handleLoginSubmit}
      >
        <FormGroup controlId="formEmail" className="formGroup">
          <FormControl
            type="email"
            controlId="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="formInput"
          />
        </FormGroup>
        <FormGroup controlId="formPassword" className="formGroup">
          <FormControl
            controlId="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="formInput"
          />
        </FormGroup>
        <div className="formGroup">
          <label className="forgotPassword">
            {/**put router link here */}
            <a href="">Forgot password?</a>
          </label>
        </div>
        <FormGroup className="formGroup" controlId="formSubmit">
          <Button type="submit" className="btn formButton">
            Login
          </Button>
        </FormGroup>
      </Form>
    </Card>
  )
}
