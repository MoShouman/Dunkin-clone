import React from 'react'
import {Container, DropdownButton, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function UpperHeader() {
    return (
            <Container className='d-flex justify-content-lg-end pb-2 upper-header' fluid>
             <DropdownButton className='d-inline' id="dropdown-basic-button" title="Careers    ">
                </DropdownButton>
                <Row>
                    <Col className='d-flex justify-content-center' sm={12}>
                        <Link className='primaryBtn' to='signup'>sign up</Link>
                        <Link className='secondaryBtn' to='signin'>sign in</Link>
                    </Col>
                    <Col sm={12}>
                        <div className="small-screens-header d-sm-none">
                                <div>Not a DD Perks member?</div>
                                <Link to="/en/dd-perks" data-track="LEARN MORE">
                                    LEARN MORE
                                </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default UpperHeader
