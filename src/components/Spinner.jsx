import React from 'react'
import loader from "../assets/images/loader.svg"
export default function Spinner() {
  return (
    <div className='bg-white  bg-opacity-50 flex items-center justify-center fixed right-0 bottom-0 left-0 top-0 z-50'>
        <div>
            <img src={loader} alt='Loading...' className='h-24'/>
        </div>
    </div>
  )
}
