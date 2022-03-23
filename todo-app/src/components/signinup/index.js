import React, { useState, useEffect } from 'react'
import { FormControl, TextField, Button  } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';

import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-hot-toast';

import { useAuth } from '../../firebase/use-auth';

import { Navigate, Link, useParams } from "react-router-dom";

import { useWidth } from '../utils/useWidth';

const SignInUp = (props) => {

const [type, setType] = useState(props.loc)
const [loading, setLoading] = useState(false)

console.log(props.loc)

const auth = useAuth()

const params = useParams()

const width = useWidth(510)

console.log(params)

useEffect(() => {
    if(params){
        setType(params.sign)
    }
},[params])

const formik = useFormik({initialValues:{email:'',password:''}, validationSchema:yup.object({
    email:yup.string().email().required('An Email Address IS Required!'),
    password:yup.string().required('Password Required!!!')
}),
 onSubmit: values => {
    if(type === 'signin'){signIn(values)}
    if(type === 'signup'){signUp(values)}
}} ) 

const signIn = async(values) => {
    try{
        setLoading(true)
   const log = await auth.signin(values.email, values.password)
   toast.success('Logged In!')
    }catch(error){
        toast.error('Invaild Username or Password')
    }finally{
        setLoading(false)
    }
}
const signUp = async(values) => {
    try{
        setLoading(true)
   const log = await auth.signup(values.email, values.password)
   toast.success('Account Created!')
    }catch(error){
        toast.error('Opps... Something went worng please try again later')
    }finally{
        setLoading(false)
    }
}

  return (
      <>
      {!auth.user ? 
      
    <div className="flex justify-center items-center pt-16 h-[80vh]  ">
        <div className=" p-6 sm:p-8 border-black border-2  w-10/12 md:w-1/2 lg:w-4/12 shadow-xl h-max ">       
             <form className="" onSubmit={formik.handleSubmit}>
                 <h2 className="text-center font-semibold text-4xl text-blue-600 pb-4">{type === "signin" ? "Sign In" : "Sign Up"}</h2>
                 <div className="pt-4 pr-4">
                 <FormControl fullWidth>
                     <TextField error={formik.errors.email && formik.touched.email } 
                         className="" variant='outlined' placeholder='E-mail Address' label="E-Mail" id="email" 
                        onBlur={formik.handleBlur} helperText={formik.errors.email && formik.touched.email ? <div className="h-4"> {formik.errors.email} </div > : <div className="h-4"></div>}
                        onChange={formik.handleChange}   value={formik.values.email} size={!width ? "large" : "small"}/>
                 </FormControl>
               
                 </div>
                 <div className="pt-4 pr-4">
                  <FormControl fullWidth>
                     <TextField error={formik.errors.password && formik.touched.password } 
                         variant='outlined' placeholder='Enter Password' label="Password" id="password"  
                        onBlur={formik.handleBlur} helperText={formik.errors.password && formik.touched.password ? <div className="h-4"> {formik.errors.password} </div > : <div className="h-4"></div> } 
                        onChange={formik.handleChange}   value={formik.values.password} size={!width ? "large" : "small"}
        />
                 </FormControl>
                </div>
                <div className="pt-2 h-8 lg:text-sm">
                    {type == "signin" ?<>
                    Dont have an Account? <Link to="/signinup/signup" className="font-bold text-blue-600 hover:bg-slate-300 hover:cursor-pointer active:bg-white">Click Here</Link> to register!</> :
                    null}
                </div>
                <div className="flex pt-6 justify-end">
                       
                    <div className="flex-grow text-xl  text-blue-600 ">
                        {type === 'signin' ?
                        <Link to="/forgotpw" className="hover:bg-slate-200 hover:cursor-pointer active:bg-white p-1" >Forgotton Password?</Link> :
                    <div className="text-gray-700"> Already got any account? <Link to="/signinup/signin" className="hover:bg-slate-200 hover:cursor-pointer active:bg-white p-1 text-blue-600" >Sign In</Link> </div>}
                    </div>
                               
                                 {loading ?<div className="h-1 pr-4"> <CircularProgress/></div> : <div className="h-1"></div>}
                    <div className="">
                        
                    <FormControl >
                        {type === "signin" ?
                    <Button type="submit" size="large" variant='contained' fullwidth disabled={loading} >Login</Button>
                    :  <Button type="submit" size="large" variant='contained' fullwidth disabled={loading} >Sign Up</Button> }
                    </FormControl>
                   
                    </div>
                  
                    
                </div>

            </form>
        </div>

    </div>
  :<Navigate to="/dashboard"/>}
  </>  
  )
  
}

export default SignInUp