import React, { useState } from 'react'

import UserAvatar from '../nav/user/UserAvatar'
import { Input, Button } from '@mui/material'
import { useWidth } from '../utils/useWidth'

const EditAvatar = ({ file, handleFile, formik }) => {

    const width = useWidth(400)
    console.log(width)

    const [imageCheck, setImageCheck ] = useState(false)


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
                    <Input  type="text"/>
                </div>
            </div>
            <div className="  flex p-2">
                <div id="left">
                      Or Upload an Image
                </div>
                <div id="right" className="">
                    <Input disableUnderline inputProps={{style: {fontSize: 14, margin:"6px",height:'24px' }}}  size="small" type="file"/>
                </div>
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