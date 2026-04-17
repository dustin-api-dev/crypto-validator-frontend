import React from 'react'
import "./BitcoinHeader.css"
import { NavLink, useNavigate } from 'react-router-dom';
import bitcoinCom_header_logo from "../../assets/bitcoinCom_header_logo.png";

const BitcoinHeader = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='bitcoin_header_body'>
            <div className='bitcoin_header_logo_container'>
                <img src={bitcoinCom_header_logo} alt='logo'/>
            </div>
            <div className='bitcoin_header_nav_container'>
                <NavLink to='/bitcoin' className={({ isActive }) => isActive ? 'bitcoin_menuactive' : 'bitcoin_menunotactive'}>Overview</NavLink>
            </div>
            <div className='bitcoin_header_button_container'>
                <button onClick={()=>navigate('/bitcoin/validate')}>Connect Wallet</button>
            </div>
        </div>
    </>
  )
}

export default BitcoinHeader