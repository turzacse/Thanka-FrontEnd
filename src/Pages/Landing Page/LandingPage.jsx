import React from 'react';
import Quality from './Quality';
import LatestProduct from './LatestProduct';

const LandingPage = () => {
    return (
        <div className=''>
            <img src='slider1.jpg' className=''/>

            <LatestProduct/>
            <Quality/>
        </div>
    );
};

export default LandingPage;