import React, { useState, useEffect } from 'react';
import { Button, Navbar, Container, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import './Navbar.css'
import logo from '../../assets/imdb.svg'

const CustomNavbar = () => {
    return (<><Navbar className="navColor" >
        <Container>
            <Navbar.Brand className="text-light"><img src={logo} height="30px" alt="" /></Navbar.Brand>
            <InputGroup className="">
                <DropdownButton
                    variant="outline-warning"
                    title="All"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-label="Text input with dropdown button" />
                {/* <InputGroup.Text  className="outline-warning">00</InputGroup.Text> */}
                &nbsp;&nbsp;
                <b className="pt-2">Imdb Pro</b> 
            </InputGroup>
            


        </Container>
    </Navbar></>);
}

export default CustomNavbar;