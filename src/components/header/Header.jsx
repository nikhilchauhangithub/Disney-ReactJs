import React from 'react'
import LoginButton from './LoginButton'
import LogoOne from './LogoOne'
import NavMenu from './NavMenu'



const Header = () => {
return (
    <nav>
        <LogoOne/>
        <NavMenu/>
        <LoginButton/>
        </nav>
  )
}

export default Header