import React from 'react'
import Avatar from '@mui/material/Avatar'
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Link, Navigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast'
import { useAuth } from '../../../firebase/use-auth';
import  UserAvatar  from './UserAvatar';



const UserNav = () => {

     const authPath = getAuth()
     const auth = useAuth()
     

    const handleSignOut = async() => {    
    try{
        const signed = await signOut(authPath)
        toast.success('Signed Out!')
  } catch(error){
      toast.error(error)
  }
}


     
  return (
    <div className="p-2 flex items-center ">
        <div id="left" className="pr-4 text-white">
          {auth.user.email}
        </div>
        <div id="right" className='hover:cursor-pointer group'>
            <UserAvatar width={50} height={50} />
            <div className="flex flex-col absolute top-16 right-6 text-xl bg-neutral-100 shadow-xl scale-0 border-neutral-300 border-2 cursor-pointer transition-all group-hover:scale-100">          
              <Link to={`/account/${auth.user.uid}`} className="hover:bg-neutral-50 p-3">Account</Link>
              <div className="hover:bg-neutral-50 border-b-4 m-auto" style={{ width:'80%'}}/>
              <span onClick={() => handleSignOut()} className="hover:bg-neutral-50 p-3 text-center" >Sign Out</span>          
            </div>
        </div>
 
    </div>
  )
}

export default UserNav