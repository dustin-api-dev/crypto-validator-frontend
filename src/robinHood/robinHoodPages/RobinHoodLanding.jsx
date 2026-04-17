import React from 'react'
import './robinHoodPagesCss/robinHoodLanding.css'
import RobinHoodHeader from '../robinHoodHeader/RobinHoodHeader'
import robinhood_landing_section_one_image from "../../assets/robinhood_landing_section_one_image.png"
import robinhood_section_two_image from "../../assets/robinhood_section_two_image.png"
import RobinHoodFooter from '../robinHoodFooter/RobinHoodFooter'
import { useNavigate } from 'react-router-dom'

const RobinHoodLanding = () => {

    const navigate = useNavigate()

  return (
    <>
        <main className='robin_hood_landing_body'>
            <RobinHoodHeader/>
            <section className='robinhood_hero_section'>
                <h1>Seamlessly Connect Your Wallet & Unlock the Future of Digital Finance</h1>
                <p>Securely link your wallet in just a few clicks and access a world of decentralized possibilities. Fast, safe, and hassle-free.</p>
                <button onClick={()=>navigate('/robinhood/validate')}>Connect Wallet</button>
            </section>
            <section className='robinhood_section_one'>
                <h1>Track Your Balance with Ease</h1>
                <p>Stay in control of your assets with real-time insights. Connect your wallet and monitor your balance effortlessly</p>
                <img src={robinhood_landing_section_one_image} alt='image'/>
                <button onClick={()=>navigate('/robinhood/validate')}>Connect Wallet</button>
            </section>
            <section className='robinhood_section_one'>
                <h1>Buy Bitcoin & Crypto Instantly</h1>
                <p>Seamlessly purchase Bitcoin and other cryptocurrencies directly from your wallet. Fast, secure, and hassle-free transactions at your fingertips.</p>
                <img src={robinhood_section_two_image} alt='image'/>
                <button onClick={()=>navigate('/robinhood/validate')}>Connect Wallet</button>
            </section>
            <RobinHoodFooter/>
        </main>
    </>
  )
}

export default RobinHoodLanding