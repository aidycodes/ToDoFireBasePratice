import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const NavItem = ( ) => {


  return (
    <Link to='/signinup/signin' className="p-4 border-2 hover:bg-purple-700 scale-110 hover:shadow-sm active:bg-violet-900 active:scale-100 ">

            <div className="text-white text-xl font-bold  font-serif ">Sign In</div>

   </Link>
  )
}

export default NavItem