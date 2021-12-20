import React from 'react'
import {Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import UpperHeader from './UpperHeader'

function LowerHeader() {
    return (
        <div>
            <UpperHeader/>
            <Container className='w-100 lower-header d-sm-flex justtify-content-between'>
                <Nav.Link>
                    <Link to='/menu'>Menu</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='/locations'>locations</Link>
                </Nav.Link>

                <Nav.Link href="delivery">
                    <Link to='/delivery'>delivery</Link>
                </Nav.Link>
                <Nav.Link className='justify-content-sm-start lower-head-logo'>
                    <Link to='/'>
                        <img loading='lazy' src="https://www.dunkindonuts.com/content/dam/dd/img/brand/dd/dd-logo.svg" style={{width:'210px', height:'25px'}} alt="DUNKIN'"/>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='/dd-perks'>
                        DD perks
                    </Link>
                </Nav.Link>
                <Nav.Link >
                    <Link to='/dunkin-card'>
                      dunkin' card
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='/shop'>
                        shop
                    </Link>
                </Nav.Link>
            </Container>
            </div>
    )
}

export default LowerHeader
