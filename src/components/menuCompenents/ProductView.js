import React from 'react'
import {Col, Figure} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../styles/itemHolder.css'



export default function ProductView(props) {
    console.log(props)
    const onClickHandler = () => {
        props.selectProductHandler(props.data)
    }

    return (
        <Col sm={12} lg={4} className='category text-center my-lg-4' key={props.data.id} onClick={onClickHandler}>
            <Link to='/product-details'>
                <Figure>
                    <img 
                        alt={props.data.alt}
                        src={props.data.img}
                        />
                    <Link className='primaryBtn' to='/product-details'>{props.data.name}</Link>
                </Figure>
            </Link>
        </Col>
    )
}
