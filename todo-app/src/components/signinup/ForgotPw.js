import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../firebase/use-auth'
import { FormControl, TextField, Button  } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { useWidth } from '../utils/useWidth';

const ForgotPw = () => {

    const [ email, setEmail] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [success, setSuccess] = useState(false)

    const auth = useAuth()

   const width = useWidth(420) 

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async() => {
    try{
        setLoading(true)
        const reset = await auth.sendPasswordResetEmail(email)
            toast.success('E-Mail Reovery Sent')
        } catch(error){
            console.log(error)
            toast.error('Opps... Something went wrong')
        } finally {
            setLoading(false)
        }
    }

  return (
<div className="flex w-screen justify-center h-[90vh]  items-center">
    <div className="flex flex-col text-sm p-6 md:p-8 justify-center items-center border-purple-600 shadow-md  border-2  md:w-1/2  xl:w-2/6">
        <h2 className="font-sans font-bold text-2xl xl:text-3xl text-blue-700 pb-6">Password Recovery</h2>
            <div className="flex items-center p-1 sm:p-2">
            <div id="left" className="pr-1 md:pr-1 text-sm xl:text-lg w-6/8 sm:w-7/8 ">
               Enter Email: 
            </div>
            <div id="right">
                 <TextField size="small" value={email} onChange={(e) => handleChange(e)}></TextField>
            </div>
       </div>
       <div className="p-4">
          
       <Button variant='contained' disabled={loading} onClick={() => handleSubmit()} size={width ? "small" : "large"}>Submit</Button>
       
       </div>
    </div>
</div> 
  )
}

const SuccessMessage = () => {
    return (
        <div>
            Please Follow the instructions emailed to your email address
        </div>
    )
}

export default ForgotPw