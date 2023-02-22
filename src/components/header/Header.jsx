import React from 'react'
import LogoOne from './LogoOne'
import NavMenu from './NavMenu'
import { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector} from 'react-redux';
// import { useNavigate } from "react-router-dom";
import {selectUserName ,selectUserPhoto, setUserLoginDetails } from '../../features/user/userSlice';



const Header = () => {
  const dispatch =useDispatch()
  // const navigate = useNavigate()
  const userName = useSelector(selectUserName)
  const userPhoto= useSelector(selectUserPhoto)
  
  const [value, setValue] = useState('')


  const signIn = () => {
    signInWithPopup(auth,provider).then((data) => {
      setUser(data.user)
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    }).catch((error) => {
      alert(error.message)
    })
  }

  const setUser= (user) => {
    dispatch(setUserLoginDetails({
      name:user.displayName,
      email:user.email,
      photo:user.photoURL,
    })
    )
  }

useEffect(()=> {
  setValue(localStorage.getItem('email'))
},[])

 return (
  <nav>
  <LogoOne/>
  {!userName ? (
        <button className='loginButton' onClick={signIn}>login</button>
      ) : (
        <>
  <NavMenu/>
  <img src={userPhoto} alt={userName} value={value} className='avatar' />
  </>
      )}

  
  </nav>
  
  
  
  )
}




export default Header