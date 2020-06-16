// @flow
import * as React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import styled from 'styled-components';
import LoginForm, {LoginDTO} from "../../components/LoginForm/LoginForm";
import RegisterForm, {CreateAccountDTO} from "../../components/RegisterForm/RegisterForm";
import firebaseApp from "../../firebase/auth/firebaseAuth"
import {useHistory} from "react-router";

const Container = styled.div`
    display:flex;
    height:100%;
    align-items: center;
    background: lightgrey;
    justify-content: center;
`;

const TabContainer = styled.div`
    height: 450px;
    padding : 30px;
    background: white;
    width: 400px;
    box-shadow: 0.3px 0.3px #040404;
`;


const AuthPage = () => {
    const history = useHistory();

    const onSubmitLoginHandler = async (loginDTO: LoginDTO) => {
        try {
            const result = await firebaseApp
                .auth()
                .signInWithEmailAndPassword(loginDTO.email, loginDTO.password);

            history.push("/");
            console.log(result);

        } catch (e) {
            console.log(e);
        }
    }

    const onSubmitRegisterHandler = async (createAccountDTO: CreateAccountDTO) => {
        console.log(createAccountDTO);
    }

    return (
        <Container>
            <TabContainer>
                <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                    <Tab eventKey="login" title="Iniciar sesión">
                        <LoginForm onSubmitHandler={onSubmitLoginHandler}/>
                    </Tab>
                    <Tab eventKey="register" title="Registrarse">
                        <RegisterForm onSubmitHandler={onSubmitRegisterHandler}/>
                    </Tab>
                </Tabs>
            </TabContainer>
        </Container>
    );
}

export default AuthPage;