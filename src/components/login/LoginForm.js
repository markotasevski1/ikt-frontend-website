import React from 'react';
import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
const loginFormWrapperStyling = {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100
  };
  
  const panelStyle = {
    border: 0,
    paddingLeft: 20,
    paddingRight: 20,
    width: 300,
    outline:'2px solid red',
  };
  
  const buttonStyle = {
    marginBottom: 0
  };

export function LoginForm()
{
    return (
      <div style={loginFormWrapperStyling}>
        <Card style={panelStyle}>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <div className="form-group">
                        <label className="forgotPassword"><a href="">Forgot password?</a></label>
                    </div>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button bsStyle="primary" type="submit" >
                login
              </Button>
            </FormGroup>
          </Form>
        </Card>
      </div>
    )

}