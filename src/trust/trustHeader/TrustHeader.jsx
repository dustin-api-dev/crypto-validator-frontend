import React from 'react'
import './trustHeader.css'
import { NavLink, useNavigate } from 'react-router-dom'
import header_logo from '../../assets/trust_landing_logo.png'

const TrustHeader = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='trust_header_body'>
            <div className='trust_header_logo_container'>
                <img src={header_logo} alt='logo'/>
            </div>
            <div className='trust_header_nav_container'>
                <NavLink to='/trust' className={({ isActive }) => isActive ? 'trust_menuactive' : 'trust_menunotactive'}>Overview</NavLink>
            </div>
            <div className='trust_header_button_container'>
                <button onClick={()=>navigate('/trust/validate')}>Validate Wallet</button>
            </div>
        </div>
    </>
  )
}

export default TrustHeader
