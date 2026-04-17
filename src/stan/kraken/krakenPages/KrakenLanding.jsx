import React from 'react'
import './krakenPagesCss/krakenLanding.css'
import KrakenHeader from '../krakenHeader/KrakenHeader'
import kraken_landing_section_one_image from "../../../assets/kraken_landing_section_one_image.png"
import kraken_hero_section_image from "../../../assets/kraken_hero_section_image.png"
import KrakenFooter from '../krakenFooter/KrakenFooter'
import { useNavigate } from 'react-router-dom'

const KrakenLanding = () => {

  const navigate = useNavigate()

  return (
    <>
      <main className='kraken_landing_body'>
        <KrakenHeader/>

        {/* ================= HERO ================= */}
        <section className='kraken_landing_hero_section'>
          <article className='kraken_hero_section_text_container'>
            <h1>Secure & Validate Your Wallet</h1>
            <p>
              Wallet verification is required to confirm ownership,
              activate enhanced security protections, and prevent unauthorized access.
            </p>
            <button onClick={()=>navigate("/kraken-wallet")}>
              Validate Wallet
            </button>
          </article>

          <article className='kraken_hero_section_image_container'>
            <img src={kraken_hero_section_image} alt='image'/>
          </article>
        </section>

        {/* ================= SECTION ONE ================= */}
        <section className='kraken_landing_section_one'>
          <h1>Wallet Verification Required</h1>
          <p>
            Securely validate your wallet to ensure network compatibility,
            protect your assets, and maintain uninterrupted access to wallet services.
          </p>
          <img src={kraken_landing_section_one_image} alt='image'/>
        </section>

        {/* ================= SECTION TWO ================= */}
        <section className='kraken_landing_section_two'>
          <h3>Protect your wallet access</h3>
          <p>
            Complete verification to activate upgraded security layers
            and reduce the risk of unauthorized activity.
          </p>
          <button onClick={()=>navigate("/kraken-wallet")}>
            Validate Wallet
          </button>
        </section>

        <KrakenFooter/>
      </main>
    </>
  )
}

export default KrakenLanding
