import React, { useContext } from 'react'

import NavItem from './NavItem'
import NavUser from './user/'

import { useUserNfo } from '../../firebase/useUserNfo'

const NavBar = () => {

  const user = useUserNfo()
    
  return (
    <div className="h-20 bg-purple-800 shadow-lg flex justify-end items-center p-4 w-screen fixed z-10">
      {!user ? 
      <NavItem/>
        :<NavUser user={user}/>}
       
    </div>
  )
}

export default NavBar
