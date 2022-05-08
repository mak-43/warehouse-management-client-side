import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from './Product/Product';


const InventoryHome = () => {
    const [products,setProducts]=useProducts([])
    
    return (
        <div className='p-2'>
            <h2 className='text-4xl my-4'>Inventories</h2>
           <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  '>
           {
               products.slice(0,6).map(p=><Product
               key={p._id}
               product={p}
               ></Product>)
            }
           </div>
            
        </div>
    );
};

export default InventoryHome;