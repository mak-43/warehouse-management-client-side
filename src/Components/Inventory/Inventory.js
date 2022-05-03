import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Inventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    // const onQuantity = data => console.log(data);


    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    const handleQuanity=(e)=>{
        const q=e.target.value 
        console.log(q)
    }
    const handleRestock=(e)=>{
        e.preventDefault()
       
    }
    return (
        <div className='w-50 mx-auto'>
          
            <form className='flex flex-col mb-4' onSubmit={handleSubmit(onSubmit)}>
                <div><img style={{height:'300px ' ,width:'100%'}} src={product.img} alt="" /></div>
                <input placeholder='ID' value={id} className='border p-2 mb-2 ' {...register("id", { required: true})} />
                <input placeholder='Name' value={product.name} className='border p-2 mb-2 ' {...register("name", { required: true})} />
            
                <input placeholder='Description' value={product.description}  className='border p-2 mb-2' {...register("description")} />
                <input placeholder='Supplier' value={product.suppier}  className='border p-2 mb-2'{...register("supplier")} />
                <input placeholder='Price' value={product.price}  className='border p-2 mb-2'  {...register("price")} />
                <input placeholder='Quantity' value={product.quantity}  className='border p-2 mb-2' type="number" {...register("quantity")} />
                <input className='border p-2 mb-2 btn btn-warning' type="submit" value='Deliverd' />
            </form>
            {/* <form className='flex flex-col mb-4' onSubmit={handleSubmit(onQuantity)}>
                
                <input placeholder='Quantity'   className='border p-2 mb-2' type="number" {...register("quantities")} />
                <input className='border p-2 mb-2 btn btn-warning' type="submit" value='Restock' />
            </form> */}
            <form onSubmit={handleRestock} className='flex items-center mb-4'>
                <input className='border p-2 ' type='number' onBlur={handleQuanity} placeholder='Quantity'  /> 
                <input className='border p-2  btn btn-warning' type="submit" value="Restock" />
            </form>

        </div>
    );
};

export default Inventory;