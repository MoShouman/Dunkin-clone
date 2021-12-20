import React from 'react'
import {Link} from 'react-router-dom'

function Parbase() {
    return (
            <div className='d-flex justify-content-center align-items-center' style={{minHeight:'55px',backgroundColor: 'rgb(219,10,129)'}}>
                <br/>
                <p style={{margin: '0 0 0 0',fontSize: '14px', fontWeight:'200',color: 'white'}}>Come run with us! Apply to join our exceptional team 
                <Link to="/en/careers/career-opportunities" target="_self" style={{marginLeft:'5px',color: 'white', fontWeight:'800', textDecoration:'underline !important'}}>here</Link>.</p>
                <br/>
                <p>&nbsp;</p>
            </div>
    )
}

export default Parbase

