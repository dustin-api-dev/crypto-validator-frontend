import React from 'react'
import "./header.css"
import { NavLink, useNavigate } from 'react-router-dom'
import header_logo from '../../assets/header_logo.svg'

const Header = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='header_body'>
            <div className='header_logo_container'>
                <img src={header_logo} alt='logo'/>
            </div>
            <div className='header_nav_container'>
                <NavLink to='/coinbase' className={({ isActive }) => isActive ? 'menuactive' : 'menunotactive'}>Overview</NavLink>
            </div>
            <div className='header_button_container'>
                <button onClick={()=>navigate('/coinbase/validate')}>Validate Wallet</button>
            </div>
        </div>
    </>
  )
}

export default Header
