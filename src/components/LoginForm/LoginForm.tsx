import React, {FormEvent, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";
import styled from "styled-components";
import {CreateAccountDTO} from "../RegisterForm/RegisterForm";

const Style = styled.div`
.mt-1 {
  margin-top: 0.25rem !important;
}`;


export interface LoginDTO {
    email: string;
    password: string;
}

type Props = {
    onSubmitHandler: (loginDTO: LoginDTO) => void
}
const LoginForm = (props: Props) => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (props.onSubmitHandler) {
            props.onSubmitHandler({email, password});
        }
    }


    return (
        <Style>
            <Form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                                  value={email} onChange={e => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password}
                                  onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" className="btn-block" type="submit">
                    Iniciar sesión
                </Button>
                <span> inicia sesion con</span>
                <FacebookLoginButton/>
                <GoogleLoginButton/>
            </Form>
        </Style>
    );
}

export default LoginForm;