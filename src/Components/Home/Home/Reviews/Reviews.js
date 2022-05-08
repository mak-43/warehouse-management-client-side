import React from 'react';
import h1 from '../../../images/h1.jpg'
import h2 from '../../../images/h2.jpg'
import h3 from '../../../images/h3.jpg'
const Reviews = () => {
    return (
        <div>
            <p className='text-4xl '>What Clients Say About  Services</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div className='flex flex-col justify-center items-center p-10'>
                    <img className='' src={h1} alt="" />
                    <p className='px-5 py-2'>On top of our freight shipping services, we also offer transportation management software, logistics consulting, warehousing, and a wide range of other logistics services.</p>
                    <p><small>JIMMY SPENSE | U.S MARSHAL </small></p>
                </div>
                <div className='flex flex-col justify-center items-center p-10' >
                    <img src={h2} alt="" />
                    <p className='px-5 py-2'>In the fast-paced and overwhelming world of logistics, you need a partner who is flexible and poised to support your constantly evolving needs.</p>
                    <p><small>MARTINE CRANE | INVENTIGATOR </small></p>
                </div>
                <div className='flex flex-col justify-center items-center p-10'>
                    <img src={h3} alt="" />
                    <p className='px-5 py-2'>All the Great things are simple,and many can be expressed in a single word Just sit back and focus on your core business – and we’ll get your product where it needs to go, no matter what.</p>
                    <p><small>SAMUELS CRANE | SECRETERY </small></p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;