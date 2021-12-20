import React from 'react'
import LowerHeader from './LowerHeader';
import {Container, Nav, Navbar} from 'react-bootstrap'
import '.././styles/header.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
    <Navbar  className='flex-md-column header' style={{backgroundColor:'white'}} expand="lg" sticky='top'>
        <Container>
            <Navbar.Brand className='d-sm-none'>
                <Link to='/'>
                    <img loading='lazy' src="https://www.dunkindonuts.com/content/dam/dd/img/brand/dd/dd-logo.svg" style={{width:'40%'}} className="mobile-menu__logo--low" alt="DUNKIN'"/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
               <LowerHeader/>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header
