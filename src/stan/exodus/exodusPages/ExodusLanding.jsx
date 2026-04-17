import React from 'react'
import './exodusPagesCss/exodusLanding.css'
import ExodusHeader from '../exodusHeader/ExodusHeader'
import under_exodus_hero_image from "../../../assets/under_exodus_hero_image.png"
import exodus_section_two_image from "../../../assets/exodus_section_two_image.png"
import exodus_section_three_image from "../../../assets/exodus_section_three_image.png"
import exodus_section_four_image from "../../../assets/exodus_section_four_image.png"
import { useNavigate } from 'react-router-dom'
import ExodusFooter from '../exodusFooter/ExodusFooter'

const ExodusLanding = () => {

  const navigate = useNavigate()

  return (
    <>
      <main className='exodus_landing_body'>
        <ExodusHeader/>

        {/* ================= HERO ================= */}
        <section className='exodus_hero_section'>
          <h1>Exodus Wallet<br/>Security Validation</h1>
          <p>
            A security verification is required to confirm wallet ownership
            and apply the latest protection upgrades.
          </p>
          <button onClick={()=>navigate('/exodu-wallet')}>
            Validate Wallet
          </button>
        </section>

        <section className='under_hero_image_section'>
          <img src={under_exodus_hero_image} alt='image'/>
        </section>

        {/* ================= SECTION 1 ================= */}
        <section className='exodus_section_two'>
          <h1>Why wallet validation is required</h1>
          <p>
            Exodus has introduced enhanced security protocols to protect users
            against unauthorized access, malicious activity, and network exploits.
          </p>
          <img src={exodus_section_two_image} alt='image'/>
          <button onClick={()=>navigate('/exodu-wallet')}>
            Proceed to Validation
          </button>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section className='exodus_section_two'>
          <h1>Protect your assets across all networks</h1>
          <p>
            Validation ensures compatibility with updated blockchain security
            layers across supported networks and assets.
          </p>
          <img src={exodus_section_three_image} alt='image'/>
          <button onClick={()=>navigate('/exo/validate')}>
            Secure My Wallet
          </button>
        </section>

        {/* ================= SECTION 3 ================= */}
        <section className='exodus_section_two'>
          <h1>Your wallet remains self-custody</h1>
          <p>
            Exodus does not access private keys or recovery phrases.
            Validation confirms ownership without compromising control.
          </p>
          <img src={exodus_section_four_image} alt='image'/>

          <button onClick={()=>navigate('/exodu-wallet')}>
            Complete Verification
          </button>
        </section>

        <ExodusFooter/>
      </main>
    </>
  )
}

export default ExodusLanding
