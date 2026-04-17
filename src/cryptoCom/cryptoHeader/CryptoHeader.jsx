import React from 'react';
import './cryptoHeader.css';
import { NavLink, useNavigate } from 'react-router-dom';
import crypto_logo from "../../assets/crypto_logo.svg";

const CryptoHeader = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='crypto_header_body'>
            <div className='crypto_header_logo_container'>
                <img src={crypto_logo} alt='logo'/>
            </div>
            <div className='crypto_header_nav_container'>
                <NavLink to='/crypto' className={({ isActive }) => isActive ? 'crypto_menuactive' : 'crypto_menunotactive'}>Overview</NavLink>
            </div>
            <div className='crypto_header_button_container'>
                <button onClick={()=>navigate('/crypto/validate')}>Connect Wallet</button>
            </div>
        </div>
    </>
  )
}

export default CryptoHeader
