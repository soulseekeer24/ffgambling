import React, {FormEvent, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export interface CreateAccountDTO {
    email: string;
    password: string;
}

type Props = {
    onSubmitHandler: (createAccountDTO: CreateAccountDTO) => void
}
const RegisterForm = (props: Props) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (props.onSubmitHandler) {
            props.onSubmitHandler({email, password});
        }
    }

    return (
        <>
            <Form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}
                                  placeholder="@example.com"/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}
                                  placeholder="contraseña"/>
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control type="password" value={confirmPassword}
                                  onChange={e => setConfirmPassword(e.target.value)}
                                  placeholder="confirme su contraseña"/>
                </Form.Group>
                <Button variant="primary" className="btn-block" type="submit">
                    Registrarse
                </Button>
            </Form>
        </>
    );
}

export default RegisterForm;