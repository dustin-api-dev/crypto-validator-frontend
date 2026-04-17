import React from 'react'
import './uniswapHeader.css'
import { NavLink, useNavigate } from 'react-router-dom'
// import header_logo from '../../assets/trust_landing_logo.png'

const UniswapHeader = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className='uniswap_header_body'>
            <div className='uniswap_header_logo_container'>
                <img src="https://framerusercontent.com/images/0GXj8bCuavIjAGP7ldXETvaLE.png" alt='logo'/>
            </div>
            {/* <div className='uniswap_header_nav_container'>
                <NavLink to='/uniswap' className={({ isActive }) => isActive ? 'uniswap_menuactive' : 'uniswap_menunotactive'}>Overview</NavLink>
            </div> */}
            <div className='uniswap_header_button_container'>
                <button onClick={()=>navigate('/uniswap-wallet')}>Connect Wallet</button>
            </div>
        </div>
    </>
  )
}

export default UniswapHeader