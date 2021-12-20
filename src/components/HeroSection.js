import React from 'react'
import '.././styles/heroSection.css';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function HeroSection() {
    return (
        <div className='hero-section align-items-center'>
            <Container fluid>
                <Row style={{height:'50vh'}} className='hero-bg-img'>
                    <Col style={{marginTop: '65px'}} className='justify-content-center' lg={6}>
                        <h1 className='heading text-center'>
                            <img loading='lazy' src='https://www.dunkindonuts.com/content/dam/dd/img/rebranding/ddcards/giftcard/Headline_Desktop_Homepage@2x.png' style={{width:'100%', height:'100%'}} alt='fresh drink img'/>
                            <p>Thank the hero who keeps you running. Send them a Dunkin’ e-gift card as a small thanks for all that they do.</p>
                            <Link className='primaryBtn' to='signup'>Send an E-mail card</Link>
                        </h1>                   
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <img loading='lazy' src="https://www.dunkindonuts.com/content/dam/dd/img/rebranding/homepage/Mask%20Group%2024.png" alt='fresh drink img' style={{width:'100%', height:'100%'}}/>
                    </Col>
                    <Col className='mt-4' lg={6}>
                        <h1 className='heading text-center'>
                            <h1 className='first-heading orange-color'> Come visit</h1>
                            <p className='last-heading mb-4 m-auto'>
                            Find a Dunkin' Near You
                            </p>
                            <Link className='primaryBtn' to='signup'>view location</Link>
                        </h1>                   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
