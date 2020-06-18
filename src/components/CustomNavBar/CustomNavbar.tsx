import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router";
import firebaseApp from "../../firebase/auth/firebaseAuth";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import CoinLabel from "../CoinLabel/CoinLabel";

const CustomNavbar = () => {
    const history = useHistory();
    const logOutHandler = async (e: any) => {
        e.preventDefault();
        try {
            const result = await firebaseApp.auth().signOut();
            history.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    return (<Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                FreeFire Gambling site
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/high-low">
                    <Nav.Link href="#home">High/Low</Nav.Link>
                </Link>
            </Nav>
            <Form inline>
                <CoinLabel coinAmount={9.999.999}/>
                <Button onClick={logOutHandler} variant="outline-primary">Logout</Button>
            </Form>
        </Navbar>
    )
}


export default CustomNavbar;