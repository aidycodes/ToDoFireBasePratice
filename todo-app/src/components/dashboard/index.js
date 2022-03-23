import React, { useState, useEffect } from 'react'
import { useUserNfo } from '../../firebase/useUserNfo'
import { Navigate } from 'react-router-dom'

import { useAuth } from "../../firebase/use-auth";

const Dashboard = () => {

const auth = useAuth()
console.log(auth)

  return (
    <>
    {auth.user ? 
    <div className=" flex h-screen text-blue-700 justify-center items-center font-serif font-bold text-8xl opacity-10">Dashboard</div>
   : <Navigate to="/signin"/> }
    </>
  )
}

export default Dashboard