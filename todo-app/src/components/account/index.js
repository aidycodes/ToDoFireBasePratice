import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Input, Button, CircularProgress } from '@mui/material'

import * as yup from 'yup'
import { useFormik } from 'formik'


import { useAuth } from '../../firebase/use-auth'
import { getAuth, updateProfile, updateEmail, updatePassword  } from "firebase/auth";
import EditAvatar from './EditAvatar'
import Protec from './Protec'

const initVals = {
displayName: '',
       email:'',
       password:'',
       imageUrl: '',
}

const EditAccount = () => {


    const [file, setFile ] = useState('')   
    const [ formVals, setFormVals ] = useState(initVals)
    const [ newpassword, setNewpassword ] = useState({password:'',passwordCheck:'', loading:false})
    const [open, setOpen] = useState(false);

    const handleChangePword = (e, type) => {
        if(type == "password"){
        setNewpassword({...newpassword, password:e.target.value})
        }
        if(type == "check"){
        setNewpassword({...newpassword, passwordCheck:e.target.value})
        }
       
    }



  const handleClickOpen = () => {
      console.log('eee')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const params = useParams()

    const auth = useAuth()


    const formik = useFormik({
        enableReinitialize:true,
     initialValues:formVals, validationSchema:yup.object({
         displayName:yup.string(),
         email:yup.string().required('Email Required'),
         password:yup.string(),
         photoUrl:yup.string()

     }),
     onSubmit: values => {
         if(formik.values.displayName !== auth.user.displayName){
     handleSubmitDisplayName(values)
         }
        if(formik.values.displayName !== auth.user.email){
            handleSubmitEmailChange(values)
        }

     },
   });


const handleFile = (e) => {
    setFile(e.target.value)
}

const handleSubmitDisplayName = async(values) => {
    try{
    const auth2 = getAuth();
const updateawait = await updateProfile(auth2.currentUser, {
    displayName:values.displayName}
)
    console.log('success')
}catch(error){
    console.log(error)
}}

const handleSubmitEmailChange = async(values) => {
    try{
    const auth = getAuth(); 
    const updateawait = await updateEmail(auth.currentUser, values.email)
   
    console.log('success')
}catch(error){console.log(error)}
}

const handleSubmitPasswordChange = async(password) => {
    try{
        setNewpassword({...newpassword, loading:true})
        const auth = getAuth()
        const updateawait = await updatePassword(auth.currentUser, password)
        console.log('pw updated')
        handleClose()
    }catch(error){
        console.log(error)
    } finally{
        setNewpassword({...newpassword, loading:false})
    }
}

    const updateUserForm = () => {
        if (auth.user){
            setFormVals({displayName:auth.user.displayName, email:auth.user.email, password:"", photoUrl:''})
        }
    }

    useEffect(() => {
        updateUserForm()
    },[auth.user])


  return (
      <> { auth.user ?
      <form onSubmit={formik.handlesubmit}>
      <div className="flex justify-center flex-col items-center h-[90vh]  pt-20">

          <div className=" pl-4 self-start">Account</div>
       
    <div className=" bg-white w-11/12 sm:w-10/12 shadow-md p-2 m-2 ">
        <div className="flex items-center">
        <div className="w-1/3 " id="left">
            <span className={formik.values.displayName == ''? "text-gray-400" : "text-gray-600"}>User Name:</span><br/>
             
        </div>
        <div id="right">
            <Input name="displayName" {...formik.getFieldProps('displayName')} type="text"/>    
        </div>
        
        </div>
        <div className="text-xs text-center pl-2 text-gray-400 h-3">{ formik.values.displayName == '' ? "if left blank email will be used" : null}</div>
        
    </div>

    <div className=" bg-white w-11/12 sm:w-10/12 shadow-md p-2 m-2 ">
        <div className="flex items-center">
        <div className="w-1/4 ml-6 " id="left">
            <span className={formik.values.email == ''? "text-gray-400" : "text-gray-600"}>E-Mail:</span><br/>
             
        </div>
        <div className="" id="right">
            <Input id="email"  name="email" {...formik.getFieldProps('email')}    type="text"/>    
        </div>
        
        </div>
        <div className="text-xs text-center text-gray-400 h-3"></div>
        
    </div>
    
        <div className= "bg-white w-11/12 sm:w-10/12 shadow-md p-2 m-2 z-10 hover:cursor-pointer" onClick={() => handleClickOpen()}>
        <div className="flex items-center">
        <div className="w-1/4 ml-6 " id="left">
            <span className={formik.values.password == ''? "text-gray-300" : "text-gray-600"}>Password:</span><br/>
             
        </div>
        <div className="" id="right">
            <Input name="password" type="password" {...formik.getFieldProps('password')}
            disabled={true} 
            />    
        </div>
        
        </div>
        <div className="text-xs text-center text-gray-400 h-3"></div>

    
        
    </div>
    
      <EditAvatar formik={formik} handleFile={handleFile} file={file} />
      <div className="pt-6">
       <Button variant='outlined' onClick={formik.handleSubmit} size="large"> Save</Button>
       <Protec handleChangePword={handleChangePword} newpassword={newpassword} handleSubmitPasswordChange={handleSubmitPasswordChange} open={open} handleClose={handleClose}/>
       </div>

       
    </div>
    </form>
    :<div className="flex justify-center items-center h-[80vh] pt-40 ">
        <div className="flex flex-col justify-center items-center bg-white p-8 shadow-md">
            <CircularProgress />
            Loading...
        </div>
        </div>}
</>
  )
}

export default EditAccount
