import React from 'react'
import { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from 'firebase/auth';


const LoginButton = () => {
const [value, setValue] = useState('')


  const signIn = () => {
    signInWithPopup(auth,provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    }).catch((error) => {
      alert(error.message)
    })
  }

useEffect(()=> {
  setValue(localStorage.getItem('email'))
},[])

 return (
  
  
    <button className='loginButton' onClick={signIn}>login{value}</button>
  
  
  )
}

export default LoginButton