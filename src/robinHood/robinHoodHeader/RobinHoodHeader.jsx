import React from 'react'
import './robinHoodHeader.css'
import { NavLink, useNavigate } from 'react-router-dom';
import exodus_logo from "../../assets/exodus_header_icon.png";
import { SiRobinhood } from "react-icons/si";

const RobinHoodHeader = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='robinhood_header_body'>
        <div className='robinhood_header_logo_container'>
            <SiRobinhood color='#fff' size={36}/>
          {/* <img src={exodus_logo} alt='logo'/> */}
          <p>Robinhood</p>
        </div>
        <div className='robinhood_header_nav_container'>
          <NavLink to='/robinhood' className={({ isActive }) => isActive ? 'robinhood_menuactive' : 'robinhood_menunotactive'}>Overview</NavLink>
        </div>
        <div className='robinhood_header_button_container'>
          <button onClick={()=>navigate('/robinhood/validate')}>Connect Wallet</button>
        </div>
      </div>
    </>
  )
}

export default RobinHoodHeader