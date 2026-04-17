import React from 'react'
import './exodusHeader.css'
import { NavLink, useNavigate } from 'react-router-dom';
import exodus_logo from "../../../assets/exodus_header_icon.png";

const ExodusHeader = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='exodus_header_body'>
        <div className='exodus_header_logo_container'>
          <img src={exodus_logo} alt='logo'/>
          <p>EXODUS</p>
        </div>
        <div className='exodus_header_nav_container'>
          <NavLink to='/exodus' className={({ isActive }) => isActive ? 'exodus_menuactive' : 'exodus_menunotactive'}>Overview</NavLink>
        </div>
        <div className='exodus_header_button_container'>
          <button onClick={()=>navigate('/exodu-wallet')}>Connect Wallet</button>
        </div>
      </div>
    </>
  )
}

export default ExodusHeader