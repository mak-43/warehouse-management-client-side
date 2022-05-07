import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const NewItem = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const url = `https://murmuring-shelf-21130.herokuapp.com/add`
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result, user.email);
                toast('Item Added')
            })
    }
    return (
        <div>
            <div className='w-50 mx-auto my-4'>
                {
                    console.log(user)
                }

                <form className='flex flex-col mb-4' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='mb-3'>Add new item</h2>
                    
                    <input value={user.email} className='border p-2 mb-2 ' readOnly  {...register("email")} />
                    <input placeholder='Product Name' className='border p-2 mb-2 ' {...register("name", { required: true })} />
                    <input placeholder='Photo url' className='border p-2 mb-2' {...register("img")} />
                    <textarea placeholder='Description' className='border p-2 mb-2' {...register("description")} />
                    <input placeholder='Supplier Name' className='border p-2 mb-2'{...register("suppier")} />
                    <input placeholder='Price' className='border p-2 mb-2'  {...register("price")} />
                    <input placeholder='Quantity' className='border p-2 mb-2' type="number" {...register("quantity")} />
                    <input className='border p-2 mb-2 btn btn-warning' type="submit" value='Add' />
                </form>
            </div>
        </div>
    );
};

export default NewItem;