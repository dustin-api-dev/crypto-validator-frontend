import React from 'react'
import './krakenHeader.css'
import { NavLink, useNavigate } from 'react-router-dom';
import kraken_header_logo from "../../assets/kraken_header_logo.png";

const KrakenHeader = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='kraken_header_body'>
            <div className='kraken_header_logo_container'>
                <img src={kraken_header_logo} alt='logo'/>
            </div>
            <div className='kraken_header_nav_container'>
                <NavLink to='/kraken' className={({ isActive }) => isActive ? 'kraken_menuactive' : 'kraken_menunotactive'}>Overview</NavLink>
            </div>
            <div className='kraken_header_button_container'>
                <button onClick={()=>navigate('/kraken/validate')}>Connect Wallet</button>
            </div>
        </div>
    </>
  )
}

export default KrakenHeader