import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Navbar, NavbarBrand } from 'react-bootstrap';

export default function Home() {
    const [show, setShow] = useState(true);
    return (
        <Navbar>
            <Navbar.Brand href="#home">
                <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Navbar>
    )
}