import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollectons from '../Components/NewCollections/NewCollectons'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollectons />
            <NewsLetter />
        </div>
    )
}

export default Shop