import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';

const Manage = () => {
    const [products, setProducts] = useProducts([])
    const navigate = useNavigate()

    const handleDelete = (id) => {
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
            <h2 className='my-3'>Manage inventories </h2>

            <div>
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
                        products.map(p =>

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
            </div>
            <button className='btn  btn-warning my-4' onClick={() => navigate('/newitem')} >Add New Item</button>
        </div>
    );
};

export default Manage;