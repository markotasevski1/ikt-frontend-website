import React from 'react';
import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default function RegisterForm()
{
    return(
        <Card className='panelStyle'>
            <Form horizontal className="RegisterForm" id="RegisterForm">
                <FormGroup controlId="formFullname" className='formGroup'>
                    <FormControl type="fullname" placeholder="Full Name" className='formInput' />
                </FormGroup>
                <FormGroup controlId="formUsername" className='formGroup'>
                    <FormControl type="username" placeholder="Username" className='formInput' />
                </FormGroup>
                <FormGroup controlId="formEmail" className='formGroup'>
                    <FormControl type="email" placeholder="Email" className='formInput'/>
                </FormGroup>
                <FormGroup controlId="formPassword" className='formGroup'>
                    <FormControl type="password" placeholder="Password" className='formInput' />
                </FormGroup>
                <FormGroup controlId="formPassword" className='formGroup'>
                    <FormControl type="password" placeholder="Repeat Password" className='formInput' />
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