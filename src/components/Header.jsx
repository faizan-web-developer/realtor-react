import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router'
export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [pageStatus, setPageStatus] = useState('Sign in')
    const auth = getAuth()
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setPageStatus(`Welcome ${user.displayName}`)
            }else{
                setPageStatus('Sign In')
            }
        })
    })
    function selectedPath(route){
        if(route === location.pathname){
            return true;
        }
        return false;
    }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
        <header className='flex justify-between items-center px-3 mx-auto max-w-6xl'>
            <div>
                <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='Logo' className='h-5 cursor-pointer' onClick={()=>navigate("/")}/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer font-semibold py-3 text-sm text-gray-400 border-b-[3px] border-b-transparent ${selectedPath("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer font-semibold py-3 text-sm text-gray-400 border-b-[3px] border-b-transparent ${selectedPath("/offers") && "text-black border-b-red-500"}`} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer font-semibold py-3 text-sm text-gray-400 border-b-[3px] border-b-transparent ${(selectedPath("/sign-in") || selectedPath("/profile")) && "text-black border-b-red-500"}`} onClick={()=>navigate("/profile")}>{pageStatus}</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
