import React from 'react';
import { useNavigate } from 'react-router-dom';

import Banner from '../Banner/Banner';
import Combo from '../Combo/Combo';
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
            <Combo/>
        </div>
    );
};

export default Home;