import React from 'react'
import Avatar from '@mui/material/Avatar'
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Link, Navigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast'

const UserAvatar = ({ user }) => {

    const userImg = user.img || user.email[0].toUpperCase()
    const avatarColor = 'green'

    console.log(avatarColor)
 
    
    return(
      <Avatar size="large" sx={{ bgcolor:avatarColor , width: 50, height: 50 }}>{userImg}</Avatar>
    )

}

const UserNav = ({user}) => {

     const auth = getAuth()

    const handleSignOut = async() => { 
      const toastId = toast.loading('Loading...')   
    
     const timer = setTimeout(fun(toastId), 5000)

  
  }

       const fun = async(id) => {
        try{
      const signed = await signOut(auth)
     toast.success('Signed Out!', {id:id})
  } catch(error){
      console.log(error)
  }
}

const toastedSignOut = () => {
  toast.promise(handleSignOut, {
  loading: 'Loading',
  success: 'Got the data',
  error: 'Error when fetching',
})
  
}
     
  return (
    <div className="p-2 flex items-center ">
        <div id="left" className="pr-4 text-white">
          {user.email}
        </div>
        <div id="right" className='hover:cursor-pointer group'>
            <UserAvatar user={user}/>
            <div className="flex flex-col absolute top-16 right-6 text-xl bg-neutral-100 shadow-xl scale-0 border-neutral-300 border-2 cursor-pointer transition-all group-hover:scale-100">          
              <Link to={`/account/${user.id}`} className="hover:bg-neutral-50 p-3">Account</Link>
              <div className="hover:bg-neutral-50 border-b-4 m-auto" style={{ width:'80%'}}/>
              <span onClick={() => handleSignOut()} to={`/account/${user.id}`} className="hover:bg-neutral-50 p-3 text-center" >Sign Out</span>          
            </div>
        </div>
 
    </div>
  )
}

export default UserNav