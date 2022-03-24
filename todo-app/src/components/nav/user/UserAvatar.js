import React from 'react'
import Avatar from '@mui/material/Avatar'
import { useAuth } from '../../../firebase/use-auth';
import CircularProgress from '@mui/material/CircularProgress';


 const UserAvatar = (props) => {
    
    const auth = useAuth()
    if(auth.user){

// ||
    const userImg = auth.user.photoUrl || auth.user.email[0].toUpperCase()
    const testImg = 'https://i.pinimg.com/550x/71/f5/db/71f5dbd56c314c2e7592694d6f1de224.jpg'
    const avatarColor = 'green'
    
    
    return(
        <>      { !auth.user.photoUrl ?   
      <Avatar size="large" src={testImg} sx={{ bgcolor:avatarColor , width:props.width, height:props.height }}>{testImg}</Avatar>
      :  <Avatar size="large" sx={{ bgcolor:avatarColor , width:props.width, height:props.height }}>{userImg}</Avatar>}
      </>
    )
    
 } else {
     return (
        <CircularProgress/>
     )
 }
}

export default UserAvatar