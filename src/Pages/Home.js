import React from 'react';
import { HomeContentOnePiece, HomeContentElectronics } from '../Components/HomeContents';

//home page only renders 2 of the home contents
const Home = () => {
    return (
        <div>
            <HomeContentOnePiece />
            <HomeContentElectronics />
        </div>
    )
}

export default Home
