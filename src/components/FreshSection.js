import React from 'react'
import {Col, Container, Figure, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '.././styles/freshSection.css';
import fresh from '../imgs/fresh.png'
import expresso from '../imgs/Espresso.png'
import sandwiches from '../imgs/sandwiches.png'

function FreshSection() {
    return (
            <div className='fresh-section align-items-center'>
            <Container fluid>
                <Row>
                    <Col lg={4} className='p-0'>
                        <img loading='lazy' className='fresh-drink-img' src={fresh} alt='fresh drink img'/>
                    </Col>
                    <Col className='mt-4' lg={8}>
                        <h1 className='heading text-center'>
                            <p style={{color:'#f56200'}}>Somthing fresh</p>
                            <p style={{color:'#db0a81', maxWidth:'650px', margin:'auto', wordSpacing:'-38px'}}>is always brewin' here <sup>&reg;</sup></p>
                            <Link className='primaryBtn' to='/menu'>view menu</Link>
                        </h1>
                    
                    </Col>
                </Row>
                <Row>
                    <Col style={{backgroundColor:'#FCFCFC',border:'1px solid #d5d4d4'}} lg={6}>
                        <Link to=''>
                            <Figure style={{width:'100%',height:'100%'}}>
                                <Figure.Caption className='text-center mt-4'>
                                    <p className='desc1'>Sipping is beliving</p>
                                    <p className='desc2 pink-color'>handcrafted expresso drinks</p>
                                </Figure.Caption>
                                <Figure.Image
                                    loading='lazy'
                                    style={{width:'100%'}}
                                alt="171x180"
                                src={expresso}
                                />
                            </Figure>
                        </Link>
                    </Col>
                    <Col style={{backgroundColor:'#FCFCFC', border:'1px solid #d5d4d4'}} lg={3}>
                        <Link to=''>
                            <Figure style={{width:'100%'}}>
                                <Figure.Caption className='text-center mt-4'>
                                    <p className='desc1'>Freshly made</p>
                                    <p className='desc2 pink-color'>all-day breakfast sandwiches</p>
                                </Figure.Caption>
                                <Figure.Image
                                    loading='lazy'
                                    style={{width:'100%'}}
                                    alt="171x180"
                                    src={sandwiches}
                                />
                            </Figure>       
                        </Link>            
                    </Col>
                    <Col style={{backgroundColor:'#FCFCFC',border:'1px solid #d5d4d4'}} lg={3}>
                        <Link to=''>
                        <Figure>
                            <Figure.Caption className='text-center mt-4'>
                                <p className='desc1'>Dunkin' Classic</p>
                                <p className='desc2 pink-color'>hot coffe</p>
                            </Figure.Caption>
                            <Figure.Image
                                loading='lazy'
                                style={{width:'100%',height:'100%'}}
                                alt="171x180"
                                src={'https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/espresso-coffee/pdpespressocoffee/Coffee_570x570.png'}
                            />
                        </Figure>   
                        </Link>             
                    </Col>
                </Row>    
                </Container>
            </div>
    )
}

export default FreshSection

