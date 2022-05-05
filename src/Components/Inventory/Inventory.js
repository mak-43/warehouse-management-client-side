import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import useItem from '../Hooks/useItem';

const Inventory = () => {


  
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { id } = useParams()
 
    const [product, setProduct] = useItem(id)
   
    
    const handleDelivered=e=>{
        const t=parseInt(product.quantity)
        const m=t-1 
        const quantity= {m}

        const url = `http://localhost:5000/inventory/${id}`
        fetch(url,{
            method:'put',//thakle update korbe na thakle add koreb put
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(quantity)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success',data)
            toast('Delivered')
           
        })

    }
    const handleRestock=(e)=>{
        e.preventDefault()
        const q= parseInt(product.quantity)
        const t=parseInt(e.target.q.value)
        console.log(q,t)
        const m=q+t
        console.log(m)
        const quantity= {m}
       
    

        const url = `http://localhost:5000/inventory/${id}`
        fetch(url,{
            method:'put',//thakle update korbe na thakle add koreb put
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(quantity)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success',data)
            toast('Quantity Updated')
            e.target.reset()
        })
       
       
    }
    return (
        <div className='w-50 mx-auto my-2' >
          
            <form className='flex flex-col mb-4' onSubmit={handleSubmit(onSubmit)}>
                <h2 >Inventory</h2>
                <div><img style={{height:'300px ' ,width:'100%'}} src={product.img} alt="" /></div>
                <input placeholder='ID' value={id} className='border p-2 mb-2 ' {...register("id", { required: true})} />
                <input placeholder='Name' value={product.name} className='border p-2 mb-2 ' {...register("name", { required: true})} />
            
                <input placeholder='Description' value={product.description}  className='border p-2 mb-2' {...register("description")} />
                <input placeholder='Supplier' value={product.suppier}  className='border p-2 mb-2'{...register("supplier")} />
                <input placeholder='Price' value={product.price}  className='border p-2 mb-2'  {...register("price")} />
                <input placeholder='Quantity' value={product.quantity}  className='border p-2 mb-2' type="number" {...register("quantity")} />
                <input className='border p-2 mb-2 btn btn-warning' onClick={handleDelivered} type="submit" value='Deliverd' />
            </form>
       
            <form onSubmit={handleRestock} className='flex items-center mb-4'>
                <input className='border p-2 ' type='number' name='q' placeholder='Quantity'  /> 
                <input className='border p-2  btn btn-warning' type="submit" value="Restock" />
            </form>

        </div>
    );
};

export default Inventory;