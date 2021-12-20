import React, {useState, useEffect} from 'react'
import {Row} from 'react-bootstrap'
import {db} from '../../Config'
import { collection, getDocs } from "firebase/firestore";
import '../../styles/itemHolder.css'
import MobileApp from '../MobileApp';
import ProductView from './ProductView';
import '../.././styles/menu.css'


export default function Products({selectedCategory, selectProductHandler}) {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        async function getData(){
            if(selectedCategory !== ''){
                const querySnapshot = await getDocs(collection(db, selectedCategory.category));
                const sortedDocs = await querySnapshot.docs.sort((a,b) => (a.data().id > b.data().id) ? 1 : ((b.data().id > a.data().id) ? -1 : 0))
                setProducts(sortedDocs)
            }
        }
        getData();
    },[selectedCategory])

    return (
        <div className='my-lg-4 menu menu-container'>
            <div className='text-center'>
                <p className='heading'>{selectedCategory.name}</p>
                <p className='desc'>These delicious goodies hit the spot—any time of day.</p>
            </div>
            <Row className='justify-content-start p-lg-4'>
                {products.length > 0 ? products.map((doc) => (<ProductView selectProductHandler={selectProductHandler} data={doc.data()}/>)) : null}
            </Row>
            <MobileApp/>
        </div>
    )
}
