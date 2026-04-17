import React from 'react'
import './krakenPagesCss/krakenLanding.css'
import KrakenHeader from '../krakenHeader/KrakenHeader'
import kraken_landing_section_one_image from "../../assets/kraken_landing_section_one_image.png"
import kraken_hero_section_image from "../../assets/kraken_hero_section_image.png"
import KrakenFooter from '../krakenFooter/KrakenFooter'
import { useNavigate } from 'react-router-dom'

const KrakenLanding = () => {

  const navigate = useNavigate()

  return (
    <>
      <main className='kraken_landing_body'>
        <KrakenHeader/>
        <section className='kraken_landing_hero_section'>
          <article className='kraken_hero_section_text_container'>
            <h1>Invest in your future</h1>
            <p>Millions of crypto investors trust kraken, <b>the best crypto platform</b></p>
            <button onClick={()=>navigate("/kraken/validate")}>Connect Wallet</button>
          </article>
          <article className='kraken_hero_section_image_container'>
            <img src={kraken_hero_section_image} alt='image'/>
          </article>
        </section>
        <section className='kraken_landing_section_one'>
          <h1>Connect Your Wallet & Take Control</h1>
          <p>Securely connect your wallet to access your balance, manage transactions, and explore seamless financial interactions.</p>
          <img src={kraken_landing_section_one_image} alt='image'/>
        </section>
        <section className='kraken_landing_section_two'>
          <h3>Start your crypto journey</h3>
          <p>Sign up to buy and sell 350 cryptocurrencies</p>
          <button onClick={()=>navigate("/kraken/validate")}>Connect Wallet</button>
        </section>
        <KrakenFooter/>
      </main>
    </>
  )
}

export default KrakenLanding