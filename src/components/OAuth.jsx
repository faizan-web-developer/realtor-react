import React from 'react';
import {FcGoogle} from "react-icons/fc";

export default function OAuth() {
  return (
    <button className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-red-700 hover:bg-red-800"><FcGoogle className='text-2xl bg-white rounded-full mr-2'/> Continue with Google</button>
  )
}
