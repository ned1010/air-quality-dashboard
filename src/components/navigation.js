import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, NavItem, Container, NavDropdown, MenuItem } from 'react-bootstrap';
import ControlPanel from "./control-panel";
import CITIES from '../data/cities.json';

export default function Navigation(props) {

    function clickHandle(){
        console.log('got clicked')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Air Quality</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="Major Cities" id="navbarScrollingDropdown">
                            <div className="wrapper">
                                {CITIES.map((city, index) => (
                                    <NavDropdown.Item key={`btn-${index}`} className="input">
                                        <input
                                            type="radio"
                                            name="city"
                                            id={`city-${index}`}
                                            defaultChecked={city.city === 'Bangkok'}
                                            onClick={() => props.onSelectCity(city)}
                                        />
                                        <label htmlFor={`city-${index}`}>{city.city}</label>
                                    </NavDropdown.Item>
                                ))}
                            </div>
                            <NavDropdown.Item onClick={clickHandle} href="#action4">Delhi</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}