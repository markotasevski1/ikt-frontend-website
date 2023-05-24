import React, { useState } from 'react'
import { Card, Form, FormGroup, Button } from 'react-bootstrap'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'

const REGISTER_URL = '/auth/register'
export default function RegisterForm() {
  const [firstName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          userName,
          firstName,
          lastName,
          email,
          password,
          role: 'Tutor',
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            withCredentials: true,
          },
        }
      )
      //console.log(response.data)
      //console.log(response.status)
      // console.log(response.accessToken)
      if (response.status === 200) {
      // Redirect the user to the desired page.
        navigate('/login')
      }
    } catch (error) {
      if (!error.response) {
        console.log('nejkje da se povrze so serverot')
      }
    }
  }

  return (
    <Card className="panelStyle">
      <Form
        
        className="RegisterForm"
        id="RegisterForm"
        onSubmit={handleSubmit}
      >
        <FormGroup controlId="formFullname" className="formGroup">
          <input
            type="name"
            placeholder="Full Name"
            id="firstName"
            className="formInput"
            value={firstName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="lastName" className="formGroup">
          <input
            type="lastName"
            placeholder="lastName"
            id="lastName"
            className="formInput"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formUsername" className="formGroup">
          <input
            type="userName"
            placeholder="userName"
            id="userName"
            className="formInput"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="formEmail" className="formGroup">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="formInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formPassword" className="formGroup">
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="formInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <div className="formGroup">
          <label className="forgotPassword">
            <a href="">Forgot password?</a>
          </label>
        </div>
        <FormGroup className="formGroup" controlId="formSubmit">
          <Button type="submit" className="btn formButton">
            Sign up
          </Button>
        </FormGroup>
      </Form>
    </Card>
  )
}
