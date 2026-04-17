import React, { useEffect } from 'react'
import './metaMaskPagesCss/metaMaskLanding.css'
import hero from '../../assets/metahome.webp'
import metamask_webwallet_img from '../../assets/meta2.svg'
import metamask_explore_img from '../../assets/meta3.svg'
import metamask_ownYourData_img from '../../assets/Meta4.svg'
import metamask_getStarted_img from '../../assets/Meta.png'
import MetaMaskHeader from '../metaMaskHeader/MetaMaskHeader'
import MetaMaskFooter from '../metaMaskFooter/MetaMaskFooter'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

const MetaMaskLanding = () => {

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
      <div className='metamask_landing_body'>
        <div className="metamask_home-widget">
          <div className="metamask_home-widget-wrapper">
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
        <MetaMaskHeader/>
        <div className='metamask_hero'>
          <div className="metamask_hero_wrap">
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
              className="metamask_hero_Text">
              <h1>A crypto wallet & gateway to blockchain apps</h1>
              <p>Start exploring blockchain applications in seconds. Trusted by over 100 million users worldwide.</p>
              <button onClick={()=>navigate('/meta/validate')}> connect wallet</button>
            </motion.div>
            <motion.img
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
              src={hero} 
              alt="" 
              className='metamask_hero_img'
            />
          </div>
        </div>
        <div className='metamask_webwallet'>
          <div className="metamask_webwallet_wrapper">
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
              className="metamask_webwallet_Text">
              <h1>Your web3 wallet</h1>
              <p>Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and more everything you need to manage your digital assets.</p>
            </motion.div>
            <motion.img
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
              src={metamask_webwallet_img} alt="" 
              className='metamask_webwallet_img' 
            />
          </div>
        </div>
        <div className='metamask_webwallet'>
          <div className="metamask_webwallet_wrapper">
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
              className="metamask_webwallet_Text two">
              <h1>Explore blockchain apps</h1>
              <p>MetaMask provides a simple and secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.</p>
            </motion.div>
            <motion.img
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
              src={metamask_explore_img} alt="" 
              className='metamask_webwallet_img' 
            />
          </div>
        </div>
        <div className='metamask_webwallet'>
          <div className="metamask_webwallet_wrapper">
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
              className="metamask_webwallet_Text">
              <h1>Own your data</h1>
              <p>MetaMask generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.</p>
            </motion.div>
            <motion.img
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
              src={metamask_ownYourData_img} alt="" 
              className='metamask_webwallet_img' 
            />
          </div>
        </div>
        <div className='metamask_getStarted'>
          <img src={metamask_getStarted_img} alt="" className='metamask_getStarted_img' />
          <h1>Get Started</h1>
          <button onClick={()=>navigate('/meta/validate')}>connect wallet</button>
        </div>
        <div className='what_is_metamask_body'>
          <h1>what is metaMask?</h1>
          <iframe 
            className='metaVidieo' 
            src="https://www.youtube.com/embed/YVgfHZMFFFQ?si=x8eG9dBniVU8qqjK" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          ></iframe>
        </div>
        <div className='metamask_news_letter'>
          <div className="metamask_news_letter_wrap">
            <h1>Receive our newsletter</h1>
            <p className='subhead'>Sign up for our newsletter to learn more about MetaMask and the benefits of web3</p>
            <div className='input-hold'>
                <input type="text" placeholder='Email address' />
                <button>subscribe</button>
            </div>
            <p>MetaMask may use the contact information you provide to us to contact you about our products and services. By clicking “subscribe” you consent to receive such communications. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our <a href="#">Privacy Policy</a>.</p>
            <br />
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and <a href="#">Terms of Service</a> apply.</p>
          </div>
        </div>
        <MetaMaskFooter/>
      </div>
    </>
  )
}

export default MetaMaskLanding