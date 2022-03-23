import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useUserNfo = () => {
const auth = getAuth();

const [user, setUser ] = useState(null)

useEffect(() => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser({id:user.uid, email:user.email})
  } else {
    setUser(null)    
  }
  })
},[])
    return user
}