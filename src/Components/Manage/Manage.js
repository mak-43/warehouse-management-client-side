import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';

const Manage = () => {
    const [products, setProducts] = useProducts([])

    const handleDelete=(id)=>{
        const proceed=window.confirm('Are you sure ?') 
        if(proceed){
            const url=`http://localhost:5000/delete/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json) 
            .then(data=>{
                console.log(data)
            })
        }

       

    }

    return (
        <div>
            <h2 className='my-3'>Manage inventories </h2>

            <div>
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Delete</th>
                            
                        </tr>
                    </thead>
                    
                        {
                            products.map(p =>

                                <tbody>
                                    <tr>


                                        <td>{p.name}</td>
                                        <td>{p.description}</td>
                                        <td>{p.suppier}</td>
                                        <td>{p.price}</td>
                                        <td>{p.quantity}</td>
                                        <td><button onClick={()=>handleDelete(`${p._id}`)} >X</button></td>
                                    </tr>
                                  
                              
                                </tbody>

                            )
                        }
                    
                </table>
            </div>
        </div>
    );
};

export default Manage;