import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from '@mui/material'
import { CircularProgress } from '@mui/material'   

export default function Protec( { open, handleClose, handleChangePword, newpassword, handleSubmitPasswordChange }) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure You Wish To Change Your Password?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              <div>
                  <div className="m-2">
            Please Enter Your New Password:
            <div>
            <Input type="password" value={newpassword.password} onChange={(e) => handleChangePword(e, "password")}/>
            </div>  
                  </div>
                  <div className="m-2 ">
            Please Confirm Password:
            <div>
            <Input type="password" value={newpassword.passwordCheck} onChange={(e) => handleChangePword(e, "check")}/>
            </div>
                </div>
            </div>
             
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={newpassword.password == '' || newpassword.password !== newpassword.passwordCheck || newpassword.loading} onClick={() => handleSubmitPasswordChange(newpassword.password)} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}