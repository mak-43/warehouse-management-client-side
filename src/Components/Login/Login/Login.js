import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Login.css'
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, guser, gerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, giterror] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    if (user || guser || gituser) {
        navigate(from, { replace: true });
    }

    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
    }
    let errorElement
    if (error || gerror || giterror) {
        errorElement = <p className='text-red-700'>{error?.message}{gerror.message}{giterror?.message} </p>
    }
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email')
        }
    }


    return (
        <div>
          
            <div className='form-container md:w-1/2 mx-auto py-10 my-10 sm:w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col w-1/2 mx-auto '>
                    <h1 className='text-3xl pb-3'>Please Login</h1>
                    <input className='p-2 mb-2 rounded' onBlur={handleEmail} type="email" name="email" id="" placeholder='Email' required />
                    <input className='p-2 mb-2 rounded' onBlur={handlePassword} type="password" name="password" id="" placeholder='Password' required />
                    <input className='text-black bg-gray-400 font-bold py-2 submit rounded-xl hover:text-blue-700 ' type="submit" value="Login" />
                </form>
                {
                    loading ? <Loading/> : ''
                }
                {
                    errorElement
                }
                <p className='text-black mt-3 '>New to this site ?<Link className='text-blue-700 ' to='/register'> Sign Up</Link> </p>
                <p>Forget Password ?  <button className='text-blue-700' onClick={resetPassword}>Reset Password</button> </p>
                <div className='or flex justify-center items-center gap-2'>
                    <hr className='w-1/5' /> OR <hr className='w-1/5' />
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <div onClick={() => signInWithGoogle()} className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' />
                        <button className='font-bold'> Google Sign In</button>
                    </div>
                    {/* <div className='w-1/2 flex justify-center items-center text-black  bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8 ' src={facebook} alt="" />
                        <button className='font-bold'> Facebook Sign In</button>
                    </div> */}
                    <div onClick={() => signInWithGithub()} className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' alt="" />
                        <button className='font-bold'> Github Sign In</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;