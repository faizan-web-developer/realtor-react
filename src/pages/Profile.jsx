import { getAuth, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { db } from '../firebase'

export default function Profile() {

  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetail,setChangeDetail]=useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name,email} = formData
  function onLogout(){
    auth.signOut()
    navigate("/")
  }

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit(){
    try{
      if(auth.currentUser.displayName !== name){
        await updateProfile(auth.currentUser,{
          displayName: name
        })
        const docRef = doc(db,"users",auth.currentUser.uid)

        await updateDoc(docRef,{
          //as we have to update "name" and our new variable name is also "name" (see line number 14) so we can use only "name" instead of name: name
          name
        })
      }
      toast.success("Profile updated successfully!")
    }catch(e){
      toast.error("Could not update the detail")
    }
  }
  return (
    <>
      <section className='mx-auto max-w-6xl flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            {/*NAME INPUT*/}
            <input onChange={onChange} type="text" defaultValue={name} id="name" disabled={!changeDetail} className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-50 focus:bg-red-200"}`}/>
            {/*EMAIL INPUT*/}
            <input type="email" defaultValue={email} id="email"  disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'/>
            <div className='flex justify-between whitespace-nowrap text-sm md:text-lg mb-6'>
              <p className='flex items-center'>Do you want to change your name?
                <span onClick={()=>
                {changeDetail && onSubmit()
                  setChangeDetail(
                  (prevState)=>!prevState)
                  }} className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>
                  {changeDetail ? "Apply Change":"Edit"}

                </span>
              </p>
              <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer'>Sign Out</p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
