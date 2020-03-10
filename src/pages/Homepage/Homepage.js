import React from 'react';

import Header from '../../components/Header/Header';
import './Homepage.scss'
const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='page'>
                <Header/>
                <div className="homepage-body"></div>
            </div>
        </div>
    );
}

export default Homepage;