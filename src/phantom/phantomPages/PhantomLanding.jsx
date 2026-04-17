import React, { useEffect } from 'react'
import './phantomPagesCss/phantomLanding.css'
import hero from '../../assets/metahome.webp'
import metamask_webwallet_img from '../../assets/meta2.svg'
import metamask_explore_img from '../../assets/meta3.svg'
import metamask_ownYourData_img from '../../assets/Meta4.svg'
import metamask_getStarted_img from '../../assets/Meta.png'
import PhantomHeader from '../phantomHeader/PhantomHeader'
import PhantomFooter from '../phantomFooter/PhantomFooter'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

const PhantomLanding = () => {

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
          <div className='phantom_landing_body'>
            <div className="phantom_home-widget">
              <div className="phantom_home-widget-wrapper">
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
            <PhantomHeader/>
            <div className='phantom_hero'>
                <div className="phantom_hero_wrap">
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 100,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 30,
                        mass: 1.5,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ margin: "-40px", once: true }}  
                      className="phantom_hero_Text">
                        <p>The crypto wallet that’ll take you places</p>
                        <h1>Your 
                            <span>
                                <svg class="span" fill="none" viewBox="0 0 108 93">
                                    <title>Logo Phantom</title>
                                    <path 
                                        d="M0.5 78.1789C0.5 90.2265 6.7065 93 13.1613 93C26.8155 93 37.077 80.6058 43.2007 70.8118C42.4559 72.9786 42.0422 75.1454 42.0422 77.2255C42.0422 82.946 45.1868 87.0196 51.3933 87.0196C59.9169 87.0196 69.0197 79.219 73.7367 70.8118C73.4056 72.0252 73.2401 73.1519 73.2401 74.192C73.2401 78.1789 75.3917 80.6924 79.7777 80.6924C93.5975 80.6924 107.5 55.124 107.5 32.7623C107.5 15.3411 99.0592 0 77.8743 0C40.6354 0 0.5 47.4967 0.5 78.1789ZM65.0476 30.8555C65.0476 26.5219 67.3647 23.4884 70.7575 23.4884C74.0677 23.4884 76.3848 26.5219 76.3848 30.8555C76.3848 35.1892 74.0677 38.3094 70.7575 38.3094C67.3647 38.3094 65.0476 35.1892 65.0476 30.8555ZM82.7568 30.8555C82.7568 26.5219 85.0739 23.4884 88.4668 23.4884C91.7769 23.4884 94.094 26.5219 94.094 30.8555C94.094 35.1892 91.7769 38.3094 88.4668 38.3094C85.0739 38.3094 82.7568 35.1892 82.7568 30.8555Z" 
                                        fill="#a797d4">
                                    </path>
                                </svg>
                            </span>
                            trusted companion
                        </h1>
                        <button onClick={()=>navigate('/phantom/validate')}> connect wallet</button>
                    </motion.div>
                    {/* <img src={hero} alt="" className='phantom_hero_img'/> */}
                </div>
            </div>
            <div className='phantom_webwallet'>
              <div className="phantom_webwallet_wrapper change_now">
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
                  className="phantom_webwallet_Text">
                  <h1>Your web3 wallet</h1>
                  <p>Available as a browser extension and as a mobile app, Phantom equips you with a key vault, secure login, token wallet, and more everything you need to manage your digital assets.</p>
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
                  src={metamask_webwallet_img} alt="" 
                  className='phantom_webwallet_img' 
                />
              </div>
            </div>
            <div className='phantom_webwallet'>
              <div className="phantom_webwallet_wrapper">
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
                  className="phantom_webwallet_Text two">
                  <h1>Explore blockchain apps</h1>
                  <p>Phantom provides a simple and secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.</p>
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
                  src={metamask_explore_img} alt="" 
                  className='phantom_webwallet_img' 
                />
              </div>
            </div>
            <div className='phantom_webwallet'>
              <div className="phantom_webwallet_wrapper change_now">
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
                  className="phantom_webwallet_Text">
                  <h1>Own your data</h1>
                  <p>Phantom generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.</p>
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
                  src={metamask_ownYourData_img} alt="" 
                  className='phantom_webwallet_img' 
                />
              </div>
            </div>
            <div className='phantom_getStarted'>
              {/* <img src={metamask_getStarted_img} alt="" className='phantom_getStarted_img' /> */}
               <svg class="phantom_getStarted_img" fill="none" viewBox="0 0 108 93">
                    <title>Logo Phantom</title>
                    <path 
                        d="M0.5 78.1789C0.5 90.2265 6.7065 93 13.1613 93C26.8155 93 37.077 80.6058 43.2007 70.8118C42.4559 72.9786 42.0422 75.1454 42.0422 77.2255C42.0422 82.946 45.1868 87.0196 51.3933 87.0196C59.9169 87.0196 69.0197 79.219 73.7367 70.8118C73.4056 72.0252 73.2401 73.1519 73.2401 74.192C73.2401 78.1789 75.3917 80.6924 79.7777 80.6924C93.5975 80.6924 107.5 55.124 107.5 32.7623C107.5 15.3411 99.0592 0 77.8743 0C40.6354 0 0.5 47.4967 0.5 78.1789ZM65.0476 30.8555C65.0476 26.5219 67.3647 23.4884 70.7575 23.4884C74.0677 23.4884 76.3848 26.5219 76.3848 30.8555C76.3848 35.1892 74.0677 38.3094 70.7575 38.3094C67.3647 38.3094 65.0476 35.1892 65.0476 30.8555ZM82.7568 30.8555C82.7568 26.5219 85.0739 23.4884 88.4668 23.4884C91.7769 23.4884 94.094 26.5219 94.094 30.8555C94.094 35.1892 91.7769 38.3094 88.4668 38.3094C85.0739 38.3094 82.7568 35.1892 82.7568 30.8555Z" 
                        fill="#3C315B">
                    </path>
                </svg>
              <h1>Get Started</h1>
              <button onClick={()=>navigate('/phantom/validate')}>connect wallet</button>
            </div>
            <div className='what_is_phantom_body'>
              <h1>what is Phantom?</h1>
              <iframe 
                className='metaVidieo' 
                src="https://www.youtube.com/embed/jciKuOGpWQo" 
                title="Phantom Wallet Tutorial | Step-by-Step Guide for Beginners"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
              ></iframe>
            </div>
            <div className='phantom_news_letter'>
                <div className="phantom_news_letter_wrap">
                    <h1>Receive our newsletter</h1>
                    <p className='subhead'>Sign up for our newsletter to learn more about MetaMask and the benefits of web3</p>
                    <div className='input-hold'>
                        <input type="text" placeholder='Email address' />
                        <button>subscribe</button>
                    </div>
                    <p>Phantom may use the contact information you provide to us to contact you about our products and services. By clicking “subscribe” you consent to receive such communications. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our <a href="#">Privacy Policy</a>.</p>
                    <br />
                    <p>This site is protected by reCAPTCHA and the Google Privacy Policy and <a href="#">Terms of Service</a> apply.</p>
                </div>
            </div>
            <PhantomFooter/>
          </div>
        </>
      )
}

export default PhantomLanding