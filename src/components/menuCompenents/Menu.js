import React from 'react'
import '../.././styles/menu.css'
import MenuCategories from './MenuCategories'


export default function Menu({selectCategoryHandler}) {
    return (
        <div className='menu'>
            <div className='text-center'>
                <p className='heading'>DUNKIN’ CLASSICS &#38; NEW FAVORITES</p>
                <p className='desc'>Our menu is full of great-tasting items that will get you going and keep you running throughout your busy day. Plus, they’re always made to order—just the way you like.</p>
            </div>
            <MenuCategories selectCategoryHandler={selectCategoryHandler}/>
        </div>
    )
}
