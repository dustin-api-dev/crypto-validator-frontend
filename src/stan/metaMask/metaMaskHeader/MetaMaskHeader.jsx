import React from 'react'
import './metaMaskHeader.css'
import { NavLink, useNavigate } from 'react-router-dom';
import metaLogo from '../../../assets/metamask_header_logo.svg'

const MetaMaskHeader = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='metamask_header_body'>
            <div className='metamask_header_logo_container'>
                <img src={metaLogo} alt='logo'/>
            </div>
            <div className='metamask_header_nav_container'>
                <NavLink to='/metamask' className={({ isActive }) => isActive ? 'metamask_menuactive' : 'metamask_menunotactive'}>Overview</NavLink>
            </div>
            <div className='metamask_header_button_container'>
                <button onClick={()=>navigate('/meta-wallet')}>Connect Wallet</button>
            </div>
        </div>
    </>
  )
}

export default MetaMaskHeader
