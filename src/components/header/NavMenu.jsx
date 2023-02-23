import React from 'react'
import { NavLink } from 'react-router-dom'
import homeIcon from "../assets/images/homeIcon.svg"
import movieIcon from "../assets/images/movieIcon.svg"
import seriesIcon from "../assets/images/seriesIcon.svg"
import watchlistIcon from "../assets/images/watchlistIcon.svg"
import originalcon from "../assets/images/originalcon.svg"


const NavMenu = () => {
  return (
    <main>
         <NavLink to={"/home"} className="navlink"><img src={homeIcon} alt="home" className='logos' /><span>home</span></NavLink>
            <NavLink to={"/search"} className="navlink"><img src={homeIcon} alt="home" className='logos' /><span>Search</span></NavLink>
            <NavLink to={"/watchlist"} className="navlink"><img src={watchlistIcon} alt="home" className='logos' /><span>Watchlist</span></NavLink>
            <NavLink to={"/originals"} className="navlink"><img src={originalcon} alt="home" className='logos' /><span>Originals</span></NavLink>
            <NavLink to={"/movies"} className="navlink"><img src={movieIcon} alt="home" className='logos' /><span>Movies</span></NavLink>
            <NavLink to={"/series"} className="navlink"><img src={seriesIcon} alt="home" className='logos' /><span>Series</span></NavLink>
    </main>
  )
}

export default NavMenu