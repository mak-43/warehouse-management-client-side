import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from './Product/Product';


const InventoryHome = () => {
    const [products,setProducts]=useProducts([])
    console.log(products)
    return (
        <div>
            Inventory {products.length}
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