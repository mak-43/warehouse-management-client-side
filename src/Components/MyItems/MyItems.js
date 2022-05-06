import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../Hooks/useProducts';

const MyItems = () => {
    const [user]=useAuthState(auth)
  
    const [orders,setOrder]=useState([])
    
    const [products,setProducts]=useProducts([])
    useEffect(()=>{
        
        const getOrders=async()=>{
            const email=user.email
         
            const url=`http://localhost:5000/myitems?email=${email}`
            const  {data}=await axios.get(url) 
            setOrder(data)
           
        }
        getOrders();

    },[user,products])

    const handleDelete=(id)=>{
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            const url = `https://murmuring-shelf-21130.herokuapp.com/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json)
                .then(data => {
                    console.log(data)
                    toast('Item deleted')
                })
        }
    }
    return (
        <div>
            items :{orders.length}
            {
                  <table class="table ">
                  <thead>
                      <tr>
                          <th scope="col">Product Name</th>
                          <th scope="col">Photo</th>

                          <th scope="col">Description</th>
                          <th scope="col">Supplier Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Delete</th>

                      </tr>
                  </thead>

                  {
                      orders.map(p =>

                          <tbody>
                              <tr>


                                  <td >{p.name} </td>
                                  <td className='flex justify-center' ><img style={{ height: '30px', width: '50px' }} src={p.img} /> </td>
                                  <td>{p.description}</td>
                                  <td>{p.suppier}</td>
                                  <td>{p.price}</td>
                                  <td>{p.quantity}</td>
                                  <td><button className='text-danger font-bold' onClick={() => handleDelete(`${p._id}`)} >X</button></td>
                              </tr>


                          </tbody>

                      )
                  }

              </table>
            }
        </div>
    );
};

export default MyItems;