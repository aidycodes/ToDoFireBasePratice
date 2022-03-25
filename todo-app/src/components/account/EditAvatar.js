import React, { useState } from 'react'

import UserAvatar from '../nav/user/UserAvatar'
import { Input, Button } from '@mui/material'
import { useWidth } from '../utils/useWidth'

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from '../../firebase/use-auth';

const EditAvatar = ({ file, handleFile, formik }) => {
 

   
    const [uploaded, setuploaded ] = useState(false)

    const width = useWidth(400)
    const auth = useAuth()


    const uploadFile = async(e) => {
        if(auth.user && e.target.files[0] !== false) {
        try {
            const storage = getStorage()
            
            const filename = e.target.files[0].name
            const storeref = ref(storage, `users/${auth.user.email}/avatar/${filename}`)
            console.log(e.target.files[0])
            
            const uploaded = await uploadBytes(storeref, e.target.files[0])
            const downloadUrl = await getDownloadURL(ref(storage, `users/${auth.user.email}/avatar/${filename}`))
            formik.setFieldValue('photoURL', downloadUrl)
            setuploaded(true)
            console.log('file uploaded') 
        }catch(error){
            console.log(error)
        }
    }
    }

  return (
      
    <div className=" bg-white w-11/12 sm:w-10/12 shadow-md p-1 m-2 ">
        <div className="    sm:flex sm:flex-row-reverse  sm:justify-end ">
            <div className="p-2 m-auto w-1/4  h-1/4 sm:p-4 sm:pt-8">
                <UserAvatar width={width ? 60 : 80} height={width ? 60 : 80}/>
            </div>
        <div className="sm:flex sm:flex-col m-auto w-3/4 text-xs  ">   
            <div className=" flex p-2">
                <div id="left">
                      Add an Image from url
                </div>
                <div id="right ">
                    <Input disabled={uploaded} name="photoURL" id="photoURL" type="text" {...formik.getFieldProps('photoURL')}/>
                </div>
            </div>
            <div className="  flex pt-2 pb-2 pl-1 pr-1">
                <div id="left">
                      Or Upload an Image
                </div>
                <div id="right" className="">
                    <Input disableUnderline inputProps={{style: {fontSize: 14, margin:"6px",height:'24px' }}} onChange={(e) => uploadFile(e)}  size="small" type="file"/>
                </div>
                jjj
            </div>
        
            <div className=" flex p-1">
                <div id="left" className="w-1/4 sm:w-1/2">
                      Or just....
                </div>
                <div id="right" className="pl-4" >
                    <Button type="text" style={{fontSize: width ? '12px' : '14px'}}>Add A Donkey!</Button>
                </div>
            </div>
            
            
        </div>
        </div>
    </div>
  )
} 


export default EditAvatar