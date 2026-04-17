import React, { useEffect } from 'react';
import "./cryptoPagesCss/cryptoLanding.css";
import CryptoHeader from '../cryptoHeader/CryptoHeader';
import { BsCheck } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import crypto_landing_section2_image from "../../assets/crypto_landing_section2_image.webp";
import crypto_landing_section3_image from "../../assets/crypto_landing_section3_image.webp";
import crypto_landing_section4_logo_image from "../../assets/crypto_landing_section4_logo_image.webp";
import CryptoFooter from '../cryptoFooter/CryptoFooter';
import { motion } from "framer-motion";

const CryptoLanding = () => {

  const navigate = useNavigate()

  useEffect(() => {
    // Dynamically load the LiveCoinWatch script
    const script = document.createElement("script");
    script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function
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
                  src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>{" "}
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
            <section className='crypto_hero_section'>
              <h1>Europe’s Premier <br/> Crypto Trading Platform</h1>
              <h3>Buy Bitcoin, Ethereum, and 350+ cryptocurrencies with EUR</h3>
              <div className='crypto_hero_section_mark_container'>
                <div className='crypto_hero_section_mark_text_container'>
                  <div className='mark_icon'><BsCheck/></div>
                  <p><span>Transfer EUR</span> via SEPA and Apple/Google Pay*</p>
                </div>
                <div className='crypto_hero_section_mark_text_container'>
                  <div className='mark_icon'><BsCheck/></div>
                  <p>Leader in <span>regulatory compliance</span> and <span>security certifications</span></p>
                </div>
                <div className='crypto_hero_section_mark_text_container'>
                  <div className='mark_icon'><BsCheck/></div>
                  <p>Trusted by <span>over 100 million users</span> worldwide</p>
                </div>
              </div>
              <button onClick={()=>navigate('/crypto/validate')}>Connect Wallet</button>
            </section>
            <section className='crypto_landing_section2'>
              <div className='crypto_landing_section2_image_container'>
                <img src={crypto_landing_section2_image} alt='image'/>
              </div>
            </section>
            <section className='crypto_landing_section3'>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  mass: 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ margin: "-40px", once: true }}   
                className='crypto_landing_section3_left_container'>
                <p>CRYPTO.COM ONCHAIN</p>
                <h1>DeFi Made Simple</h1>
                <h3>
                  <span>Crypto.com Onchain.</span>  Your Keys, Your Crypto <br/>
                  <span>Earn.</span>  No lock-up period and stable returns. <br/>
                  <span>Swap.</span>  Swap DeFi coins and earn Triple Yield. <br/>
                </h3>
                <div className='crypto_landing_section3_left_button_container'>
                  <button className='crypto_landing_section3_left_button_first' onClick={()=>navigate('/crypto/validate')}>Get Crypto.com Onchain</button>
                  <button className='crypto_landing_section3_left_button_second' onClick={()=>navigate('/crypto/validate')}>Connect wallet</button>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  mass: 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ margin: "-40px", once: true }} 
                className='crypto_landing_section3_right_container'>
                <img src={crypto_landing_section3_image} alt='image'/>
              </motion.div>
            </section>
            <section className='crypto_landing_section4'>
              <div className='crypto_landing_section4_container'>
                <p>OUR VISION</p>
                <h1>Cryptocurrency in Every Wallet™</h1>
                <div className='crypto_landing_section4_logo_image_container'>
                  <img src={crypto_landing_section4_logo_image} alt='image'/>
                </div>
                <button onClick={()=>navigate('/crypto/validate')}>Connect wallet</button>
              </div>
            </section>
            <CryptoFooter/>
        </div>
    </>
  )
}

export default CryptoLanding
