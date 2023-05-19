import React from 'react'
import { useState } from 'react'
import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'

const LOGIN_URL = '/auth/login'
let token = null
export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      console.log(response.data)
      console.log(response.status)
      console.log(response.accessToken)
      if (response.status === 200) {
        navigate('/home')
        token = response.data.token
      }
    } catch (error) {
      console.log('Invalid credentials')
    }
  }
  return (
    <Card className="panelStyle">
      <Form
        horizontal
        className="LoginForm"
        id="loginForm"
        onSubmit={handleLoginSubmit}
      >
        <FormGroup controlId="formEmail" className="formGroup">
          <FormControl
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="formInput"
          />
        </FormGroup>
        <FormGroup controlId="formPassword" className="formGroup">
          <FormControl
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="formInput"
          />
        </FormGroup>
        <div className="formGroup">
          <label className="forgotPassword">
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
