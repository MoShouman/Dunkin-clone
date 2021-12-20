import React from 'react'
import FreshSection from './FreshSection'
import HeroSection from './HeroSection'
import MobileApp from './MobileApp'
import Parbase from './Parbase'
import Teaser from './Teaser'

export default function Home() {
    return (
        <div>
            <Parbase/>
            <Teaser/>
            <MobileApp/>
            <FreshSection/>
            <HeroSection/>
        </div>
    )
}
