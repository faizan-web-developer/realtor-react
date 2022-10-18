import React, { useState } from 'react';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
export default function SignIn() {
  const [showPassword,setShowPassword] = useState(false);
  const [formData,setFormData] = useState({
    email:"",
    password:""
  });
  const {email,password} = formData;

  function onChange(e){
      setFormData((prevState)=>({
        ...prevState,
        [e.target.id]: e.target.value
      }))
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign in</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80' className='w-full rounded-2xl' alt="key" />
        </div>
        <div className='w-full md:w-8/12 lg:w-5/12 lg:ml-20'>
          <form className='mb-6'>
            <div className='mb-6 w-full'>
              <input type='email' id='email' value={email} onChange={onChange} placeholder='Email address' className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
            </div>
            <div className="mb-6 relative">
              <input type={showPassword ? "text":"password"} placeholder="Password" id="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={password} onChange={onChange} />
              {showPassword ? (<AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>) : (<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
            </div>
            <div className='flex  justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='flex items-center mb-6'>
                Don't have an Account? <Link className='text-red-600 hover:text-red-700 duration-200 transition ease-in-out ml-1' to={'/sign-up'}>Register now</Link>
              </p>
                <Link className='text-blue-600 hover:text-blue-800 duration-200 transition ease-in-out' to={'/forgot-password'}>Forgot password?</Link>
            </div>
          <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">Sign in</button>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"><p className="text-center font-semibold mx-4 mb-0">OR</p></div>
          <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}
