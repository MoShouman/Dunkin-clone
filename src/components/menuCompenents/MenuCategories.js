import React, {useState, useEffect} from 'react'
import {Row} from 'react-bootstrap'
import ItemHolder from './ItemHolder'
import {db} from '../../Config'
import { collection, getDocs } from "firebase/firestore";
import '../../styles/itemHolder.css'


function MenuCategories({selectCategoryHandler}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getData(){
            const querySnapshot = await getDocs(collection(db, "categories"));
            const sortedDocs = await querySnapshot.docs.sort((a,b) => (a.data().id > b.data().id) ? 1 : ((b.data().id > a.data().id) ? -1 : 0))
            setCategories(sortedDocs)
        }
        getData();
    },[])

    return (
        <div className='my-lg-4 menu-container'>
            <Row className='justify-content-start p-lg-4'>
                {categories.length > 0 ? categories.map((doc) => (<ItemHolder selectCategoryHandler={selectCategoryHandler} data={doc.data()}/>)) : null}
            </Row>
        </div>
    )
}

export default MenuCategories