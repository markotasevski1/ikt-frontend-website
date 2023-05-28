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

  //passwordStrength
  const [poorPassword, setPoorPassword] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [strongPassword, setStrongPassword] = useState(false);
  const [passwordError, setPasswordErr] = useState("");
  const [button, setButton] = useState(true);

  const passwordStrength = (evnt) => {
    const passwordValue = password;
    const passwordLength = passwordValue.length;
    const poorRegExp = /[a-z]/;
    const weakRegExp = /(?=.*?[0-9])/;;
    const strongRegExp = /(?=.*?[#?!@$%^&*-])/;
    const whitespaceRegExp = /^$|\s+/;
    const poorPassword = poorRegExp.test(passwordValue);
    const weakPassword = weakRegExp.test(passwordValue);
    const strongPassword = strongRegExp.test(passwordValue);
    const whiteSpace = whitespaceRegExp.test(passwordValue);

    if (passwordValue === '') {
      setPasswordErr("Password is Empty");
      setButton(true);
    } else {

      // to check whitespace
      if (whiteSpace) {
        setPasswordErr("Whitespaces are not allowed");
        setButton(true);
      }
      // to check poor password
      if (passwordLength <= 3 && (poorPassword || weakPassword || strongPassword)) {
        setPoorPassword(true);
        setButton(true);
        setPasswordErr("Password is Poor. Password must contain a minimum of 6 characters with at least one uppercase one lowercase one special character and one number");
      }
      // to check weak password
      if (passwordLength >= 4 && poorPassword && (weakPassword || strongPassword)) {
        setWeakPassword(true);
        setButton(true);
        setPasswordErr("Password is Weak. Password must contain a minimum of 6 characters with at least one uppercase one lowercase one special character and one number");
      } else {
        setWeakPassword(false);
      }
      // to check strong Password
      if (passwordLength >= 6 && (poorPassword && weakPassword) && strongPassword) {
        setStrongPassword(true);
        setButton(false);
        setPasswordErr("Password is Strong");
      } else {
        setStrongPassword(false);
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
            placeholder="First Name"
            id="firstName"
            className="formInput"
            value={firstName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="lastName" className="formGroup">
          <input
            type="lastName"
            placeholder="Last Name"
            id="lastName"
            className="formInput"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formUsername" className="formGroup">
          <input
            type="userName"
            placeholder="Username"
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
            onInput={passwordStrength}
          />
        </FormGroup>
        <FormGroup controlId='formPasswordStrength' className='formGroup'>
            <ul className="list-group list-group-horizontal">

              {poorPassword === true ? <li className="list-group-item bg-danger col-4" style={{ padding: "1px 0px" }}></li> : ''}
              {weakPassword === true ? <li className="list-group-item bg-warning col-4" style={{ padding: "1px 0px" }}></li> : ''}
              {strongPassword === true ? <li className="list-group-item bg-success col-4" style={{ padding: "1px 0px" }}></li> : ''}

            </ul>
            <p> {passwordError}</p>
        </FormGroup>
        <div className="formGroup">
          <label className="forgotPassword">
            <a href="/forgot-password">Forgot password?</a>
          </label>
        </div>
        <FormGroup className="formGroup" controlId="formSubmit">
          <Button type="submit" className="btn formButton" disabled={button}>
            Sign up
          </Button>
        </FormGroup>
      </Form>
    </Card>
  )
}
