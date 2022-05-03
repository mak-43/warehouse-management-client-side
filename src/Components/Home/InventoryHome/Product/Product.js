import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {_id,name,img,description,suppier,price,quantity}=product
    const navigate=useNavigate()
   
    return (
        <div className='product flex flex-col justify-center items-center p-5'>
           <div className='flex justify-center  '><img className='rounded-t-xl  w-full h-full' src={img} alt="" /></div>
            <div className='flex flex-col text-left justify-center leading-3 mb-4 botom font-semibold'>
                <p>ID: {_id}</p>
                <p className=''>Name: {name}</p>
                <p>Description:  {description}</p>
                <p>Supplier: {suppier}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button className='btn btn-warning ' onClick={()=>navigate(`/inventory/${_id}`)}>Update</button>
            </div>
        </div>
    );
};

export default Product;