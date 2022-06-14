import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap';
import CITIES from '../data/cities.json';

export default function Navigation(props) {
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
                            {CITIES.map((city, index) => (
                                <NavDropdown.Item 
                                    key={`btn-${index}`} 
                                    className="input" 
                                    id={`city-${index}`}
                                    defaultChecked={city.city === 'Bangkok'}
                                    onClick={() => props.onSelectCity(city)}>
                                    <label htmlFor={`city-${index}`}>{city.city}</label>
                                </NavDropdown.Item>
                            ))}
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