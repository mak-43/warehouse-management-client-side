import React from 'react';
import { useNavigate } from 'react-router-dom';

import Banner from '../Banner/Banner';
import InventoryHome from '../InventoryHome/InventoryHome';
import Reviews from './Reviews/Reviews';

const Home = () => {
    const navigate=useNavigate()
    return (
        <div className='relative'>
            <Banner/>
            <InventoryHome/>
            <button className='btn btn-warning my-5' onClick={()=>navigate('/manage')}>Manage Inventories</button>
            <Reviews/>
            <h2>Section 2</h2>
        </div>
    );
};

export default Home;