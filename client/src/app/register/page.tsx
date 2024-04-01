'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';

const defaultFormData = {
    email: '',
    name: '',
    password: '',
};
const Register = () => {
    const [formData, setFormData] = useState(defaultFormData);

    const handleInputChange=(event: ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=event.target;
        setFormData({...formData, [name]:value})
    };

    

    const router =useRouter();

 

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post('/api/register', formData);
            toast.success('Registration successful. Please login.');
            router.push('/login');
        } catch (error) {
            console.error('Registration failed:', error);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <section className="max-w-screen-xl mx-auto mt-5 flex flex-row items-center justify-between gap-5">
                <div>
                    <Image src='/signUp/signup.png' alt='signup' width={500} height={600} />
                </div>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[50%] mx-auto">
                    <div className="flex mb-8 flex-wrap gap-3 md:flex-row item-center justify-center md:justify-between">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">Create an Account</h1>
                        <p className='text-white'>or</p>
                        <span className='inline-flex items-center text-white'>
                            <AiFillGithub  className='mr-3 text-3xl cursor-pointer text-white' />
                            |
                            <FcGoogle className='ml-3 text-3xl cursor-pointer' />
                        </span>
                    </div>
                    <form className='space-y-4 md:space-y-6' >
                        <input
                            name='email'
                            type='email'
                            placeholder='Email'
                            required
                            className='border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none'
                            value={formData.email}
                            onChange={handleInputChange} />
                        <input
                            name='name'
                            type='text'
                            placeholder='Name'
                            required
                            className='border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none'
                            value={formData.name}
                            onChange={handleInputChange} />
                        <input
                            name='password'
                            type='password'
                            placeholder='password'
                            required
                            minLength={8}
                            className='border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none'
                            value={formData.password}
                            onChange={handleInputChange} />

                        <button
                            type='submit'
                            className='w-full focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white border border-white'
                        >
                            Sign Up
                        </button>

                    </form>
                    <button
                        type='submit'
                        className='w-full bg-[#f4bf96] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-tertiary-dark'
                    >
                        Login
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Register;