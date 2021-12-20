import React from 'react'
import '.././styles/teaser.css';
import {Col, Row, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';


function Teaser() {
    return (
            <div className='teaser'>
                <div className='d-flex justify-content-center align-items-center text-center first-section'>
                    <h1 style={{fontSize:'65px'}}>
                        <span style={{color:'#f56200'}}>BRING ON<br/></span>
                        <span style={{color:'#db0a81'}}>THE PERKS<br/></span>
                        <p className='last-line'>
                            DD Perks rewards members on every Dunkin' run.
                        </p>
                    </h1>
                </div>
                <Container className='d-flex justify-content-center align-items-center text-center px-4 ' style={{minHeight:'40vh', marginTop:'40px'}}>
                  <Row className='justify-content-center' >
                       <Col lg={3}>
                        <img loading='lazy'src="https://www.dunkindonuts.com/content/dam/dd/img/rebranding/homepage/Path%20413.svg" alt="rebranding" className='my-2'/>
                            <span style={{fontSize:'20px'}}><br/>Earn on Every Run</span>
                            <div style={{fontSize:'12px', marginTop:'4px'}}>
                                $1 = 5 points. Every 200 points earns you a free beverage. Plus, get exclusive bonus-point offers.
                            </div>
                        </Col>
                        <Col lg={3}>
                        <img loading='lazy' src="https://www.dunkindonuts.com/content/dam/dd/img/rebranding/homepage/Dunkin_Cup_mob.svg" alt="" className='my-2'/>
                        <span style={{fontSize:'20px'}}><br/>Pay Any Way</span>
                        <div style={{fontSize:'12px', marginTop:'4px'}}>
                            Pay with a debit/credit card, cash or an enrolled Dunkin' Card to unlock rewards and offers.
                        </div>

                        </Col>
                        <Col lg={3}>
                            <img loading='lazy'src="https://www.dunkindonuts.com/content/dam/dd/img/rebranding/homepage/Dunkin_Runner_mob.svg" alt="" className='my-2'/>
                            <span style={{fontSize:'20px'}}><br/>Check Out Faster</span>
                            <div style={{fontSize:'12px', marginTop:'4px'}}>
                                Whether you’re stopping in or ordering ahead, load funds to your account to save time on your run.
                            </div>
                        </Col>
                  </Row>
                </Container>
                <Container className='d-flex justify-content-center align-items-center text-center px-4 '>

                    <div style={{width:'100%'}}>
                    <Link className='secondaryBtn' to='signin'>sign up</Link>
                    <Link className='primaryBtn' to='signup'>learn more</Link>
                    </div>
                </Container>
            </div>
    )
}

export default Teaser

