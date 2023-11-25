import React from 'react'
import Hero from "../components/Hero/Hero"
import Item from '../components/Item/Item'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import Footer from '../components/Footer/Footer'

const Shop = () => {
    return (
        <div>
            <Hero />
            <Item />
            <Popular />
            <Offers />
            <br />
            {/* <Popular /> */}
            <Footer />
        </div>
    )
}

export default Shop