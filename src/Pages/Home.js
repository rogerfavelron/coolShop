import React from 'react';
import { HomeContentOnePiece, HomeContentElectronics } from '../Components/HomeContent';
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div>
            <HomeContentOnePiece />
            <HomeContentElectronics />
            <Footer />
        </div>
    )
}

export default Home
