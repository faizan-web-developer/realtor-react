import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react';
import {FcGoogle} from "react-icons/fc";
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { useNavigate } from 'react-router';
export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick(){
      try{
          const auth=getAuth();
          const provider = new GoogleAuthProvider();
          const result =await signInWithPopup(auth,provider)
          const user = result.user
          //checking if user already exists
          const userRef = doc(db,"users",user.uid)
          const userSnap = await getDoc(userRef)
          if(!userSnap.exists()){
             await setDoc(userRef,{
                name: user.displayName,
                email: user.email,
                timestamp: serverTimestamp()
             });
             toast.success("Registration Completed!")
          }else{
            toast.success("Login successfull!")
          }
          navigate("/");
      }catch(error){
        toast.error('could not authorize the request');
        console.log(error)
      }
  }
  return (
    <button type='button' onClick={onGoogleClick} className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-red-700 hover:bg-red-800"><FcGoogle className='text-2xl bg-white rounded-full mr-2'/> Continue with Google</button>
  )
}
