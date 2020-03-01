import React from 'react';

import Header from '../../components/Header/Header';
import PageTemplate from '../PageTemplate/PageTemplate';
import './Homepage.scss'
const Homepage = () => {
    return (
        <div className='homepage'>
            <PageTemplate>
                <Header/>
                <div className="homepage-body"></div>
            </PageTemplate>
        </div>
    );
}

export default Homepage;