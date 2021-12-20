import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import '.././styles/mobileApp.css';

export default function MobileApp() {
    return (
            <Container className='d-flex justify-content-center align-items-center px-4 mobile-app-section' style={{minHeight:'40vh', marginTop:'40px'}}>
                  <Row className='justify-content-center align-items-center' >
                       <Col lg={6}>
                           <div className='text-center'>
                                <h1 className='first-heading orange-color'> Dunkin <span class="pink-color">’</span></h1>
                                <h2 className='second-heading pink-color'>Done easy</h2>
                                <p className='last-heading mb-4 m-auto'>
                                Find a store, place your order and get on your way with the Dunkin’ App
                                </p>
                            </div>
                            <ul>
                                <li>Order ahead and pay from your phone</li>
                                <li>Join DD Perks and earn points towards free beverages</li>
                                <li>Earn exclusive offers and rewards</li>
                            </ul>
                            <Container className='d-flex justify-content-center align-items-center px-4 '>
                                <div className='d-flex justify-content-between app-links'>
                                    <img src="https://www.dunkindonuts.com/content/dam/dd/img/rebranding/homepage/apple.svg" alt="apple" className='my-2'/>
                                    <img src="https://www.dunkindonuts.com/content/dam/dd/img/rebranding/homepage/google%20play.svg" alt="googleplay" className='my-2'/>
                                </div>
                            </Container>
                        </Col>
                        <Col lg={6}>
                        <img src="https://www.dunkindonuts.com/content/dam/dd/img/newIPhone/IPhoneNoProgram/Dunkin-Done-Easy.png" alt="IPhoneNoProgram" className='my-2'/>
                        </Col>
                    </Row>
            </Container>
    )
}
