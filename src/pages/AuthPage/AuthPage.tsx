// @flow
import * as React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import styled from 'styled-components';
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Container = styled.div`
    display:flex;
    height:100%;
    align-items: center;
    background: lightgrey;
    justify-content: center;
`;

const TabContainer = styled.div`
    height: 400px;
    background: white;
    width: 400px;
    padding: 10px;
    box-shadow: 0.3px 0.3px  #040404;
`;

type Props = {};
export class AuthPage extends React.Component<Props> {
    render() {
        return (
            <Container>
                <TabContainer>
                    <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                        <Tab eventKey="login" title="Iniciar sesión">
                            <LoginForm/>
                        </Tab>
                        <Tab eventKey="register" title="Registrarse">
                            <RegisterForm/>
                        </Tab>
                    </Tabs>
                </TabContainer>
            </Container>
        );
    };
};
