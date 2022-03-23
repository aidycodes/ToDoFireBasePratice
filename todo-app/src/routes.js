import React, { useState } from 'react'

import { Routes, Route, BrowserRouter , Link } from "react-router-dom";

import toast, {Toaster} from 'react-hot-toast'

import Home from './components/Home';
import NavBar from './components/nav';
import SignInUp from './components/signinup';
import Dashboard from './components/dashboard';
import ForgotPw from './components/signinup/ForgotPw';
import EditAccount from './components/account';

const AppRoutes = () => {

  return (
     
    <BrowserRouter>
    <Toaster/>
        <NavBar/>
            <Routes>
                <Route extact path="/home" element={<Home/>}/>

                <Route extact path="/signinup/:sign" element={<SignInUp/>}/>
                <Route extact path="/signupup/:sign" element={<SignInUp  />}/>
                <Route extact path="/dashboard" element={<Dashboard/>}/>
                <Route extact path="/forgotpw" element={<ForgotPw/>}/>
                <Route extact path="/account/:id" element={<EditAccount/>}/>
                
            </Routes>

    </BrowserRouter>
    
  )
}

export default AppRoutes