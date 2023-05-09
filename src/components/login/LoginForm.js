import React from 'react';
import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export function LoginForm()
{
  return (
    <Card className='panelStyle'>
      <Form horizontal className="LoginForm" id="loginForm">
        <FormGroup controlId="formEmail" className='formGroup'>
          <FormControl type="email" placeholder="Email Address" className='formInput'/>
        </FormGroup>
        <FormGroup controlId="formPassword" className='formGroup'>
          <FormControl type="password" placeholder="Password" className='formInput'/>
        </FormGroup>
        <div className="formGroup">
          <label className="forgotPassword"><a href="">Forgot password?</a></label>
        </div>
        <FormGroup className='formGroup' controlId="formSubmit">
          <Button type="submit" className='btn formButton'>Login</Button>
        </FormGroup>
      </Form>
    </Card>
  )

}