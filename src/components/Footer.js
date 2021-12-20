import React from 'react'
import '.././styles/footer.css';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <Container className='footer justify-content-center align-items-center' fluid>
            <Row>
                <Col className='quick-links-holder' lg={6}>
                    <p>QUICK LINKS</p>
                    <Row className='quick-links'>
                        <Col sm={6} lg={3}><Link to=''>press room</Link></Col>
                        <Col sm={6} lg={3}><Link to=''>mobile app</Link></Col>
                        <Col sm={6} lg={3}><Link to=''>corporate</Link></Col>
                        <Col sm={6} lg={3}><Link to=''>sustainabilty</Link></Col>
                        <Col sm={6} lg={3}><Link to=''>about us</Link></Col>
                        <Col sm={6} lg={3}><Link to=''>franchising</Link></Col>
                        <Col sm={6} lg={3}><Link to=''>contact us</Link></Col>
                        <Col sm={6} lg={3}><Link to=''>site map</Link></Col>
                    </Row>
                </Col>
                <Col className="social-links-holder" lg={6}>
                    <p>FOLLOW US</p>
                    <div className='footer-social-links'>
                        <Link to=''><i className="fa fa-twitter-square"></i></Link>
                        <Link to=''><i className="fa fa-facebook-square"></i></Link>
                        <Link to=''><i className="fa fa-pinterest-square"></i></Link>
                        <Link to=''><i className="fa fa-instagram"></i></Link>
                        <Link to=''><i className="fa fa-youtube-square"></i></Link>
                    </div>
                </Col>
            </Row>
            <div className='text-center parteners-holder'>
                <p>OUR PARTNERS</p>
                <img style={{width:'fit-content', height:'fit-content'}} src="https://www.dunkindonuts.com/content/dam/dd/img/brand/third-party/partners/jetblue.png" alt="Visit our partner NHL" className=''ss="responsive-image__img"/>
                <img style={{width:'fit-content', height:'fit-content'}} src="https://www.dunkindonuts.com/content/dam/dd/img/brand/third-party/partners/baskinrobbins.png" alt="Visit our partner Baskin Robbins" className=''ss="responsive-image__img"/>
                <img style={{width:'fit-content', height:'fit-content'}} src="https://www.dunkindonuts.com/content/dam/dd/img/brand/third-party/partners/NHL_Shield_English_Primary1.png" alt="Visit our partner NHL" className=''s="responsive-image__img"/>
            </div>

            <div className='text-center last-part-holder py-4'>
                <Link to=''>terms of use</Link>
                <Link to=''>privacy policy</Link>
                <Link to=''>do not sell my personal info</Link>
                <Link to=''>ca privacy</Link>
                <Link to=''>you ad choices</Link>
                <Link to=''>ca transperency in supply chains act</Link>
            </div>
            <p className='text-center'>©2021 DD IP Holder LLC</p>
        </Container>
    )
}
