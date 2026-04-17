import React from 'react';
import './vaultHeader.css';
import { NavLink, useNavigate } from 'react-router-dom';
import vault_logo from "../../../assets/vault_logo.webp";

const vaultHeader = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='vault_header_body'>
            <div className='vault_header_logo_container'>
                <img src={vault_logo} alt='logo'/>
            </div>
            <div className='vault_header_nav_container'>
                <NavLink to='/vault' className={({ isActive }) => isActive ? 'vault_menuactive' : 'vault_menunotactive'}>Overview</NavLink>
            </div>
            <div className='vault_header_button_container'>
                <button onClick={()=>navigate('/vault-wallet')}>Connect Wallet</button>
            </div>
        </div>
    </>
  )
}

export default vaultHeader
