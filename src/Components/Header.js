import React, { Component } from 'react'
import { Form, Nav, Navbar, FormControl, Container, Button } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import logo from './Logo192.png'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom" 
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {

        return (
            <>
                <Navbar  collapseOnSelect expand="ml" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                wight="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />Create sites
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <Nav.Link href="/home">Головна</Nav.Link>
                                <Nav.Link href="/about">Про нас</Nav.Link>
                                <Nav.Link href="/contacts">Контакти</Nav.Link>
                                <Nav.Link href="/blog">Блог</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Пошук</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/home"component={Home}/>
                        <Route exact path="/about"component={About}/>
                        <Route exact path="/contacts"component={Contacts}/>
                        <Route exact path="/blog"component={Blog}/>
                    </Switch>
                </Router>
            </>
        )
    }
}