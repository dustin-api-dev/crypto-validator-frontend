import React from 'react'
import './exodusPagesCss/exodusLanding.css'
import ExodusHeader from '../exodusHeader/ExodusHeader'
import under_exodus_hero_image from "../../assets/under_exodus_hero_image.png"
import exodus_section_two_image from "../../assets/exodus_section_two_image.png"
import exodus_section_three_image from "../../assets/exodus_section_three_image.png"
import exodus_section_four_image from "../../assets/exodus_section_four_image.png"
import { useNavigate } from 'react-router-dom'
import ExodusFooter from '../exodusFooter/ExodusFooter'

const ExodusLanding = () => {

  const navigate = useNavigate()

  return (
    <>
      <main className='exodus_landing_body'>
        <ExodusHeader/>
        <section className='exodus_hero_section'>
          <h1>Bitcoin and <br/>Crypto Wallet</h1>
          <p>Connect your Exodus Wallet to explore seamless and secure transactions with ease.</p>
          <button onClick={()=>navigate('/exo/validate')}>Connect Wallet</button>
        </section>
        <section className='under_hero_image_section'>
          <img src={under_exodus_hero_image} alt='image'/>
        </section>
        <section className='exodus_section_two'>
          <h1>Execute your crypto strategy with ease</h1>
          <p>Effortlessly swap between thousands of trading pairs on mobile, desktop, and web browsers</p>
          <img src={exodus_section_two_image} alt='image'/>
          <button onClick={()=>navigate('/exo/validate')}>Connect Wallet</button>
        </section>
        <section className='exodus_section_two'>
          <h1>Diversify your holdings</h1>
          <p>Send, receive, and swap thousands of assets across 50+ blockchain networks</p>
          <img src={exodus_section_three_image} alt='image'/>
          <button onClick={()=>navigate('/exo/validate')}>Connect Wallet</button>
        </section>
        <section className='exodus_section_two'>
          <h1>Your funds remain in your control</h1>
          <p>Exodus is self-custody, empowering you to control your wealth on your terms</p>
          <img src={exodus_section_four_image} alt='image'/>
          <button onClick={()=>navigate('/exo/validate')}>Connect Wallet</button>
        </section>
        <ExodusFooter/>
      </main>
    </>
  )
}

export default ExodusLanding