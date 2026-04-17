import React, { useEffect } from 'react'
import "./pagesCss/landing.css"
import Header from '../component/header/Header'
import { useNavigate } from 'react-router-dom';
import coinbase_logo from '../assets/coinbase_logo.png';
import landing_section1_image from '../assets/landing_section1_image.svg';
import landing_section2_image from '../assets/landing_section2_image.png';
import Footer from '../component/header/footer/Footer';
import metamask_webwallet_img from '../assets/meta2.svg'
import metamask_explore_img from '../assets/meta3.svg'
import metamask_ownYourData_img from '../assets/Meta4.svg'
import { motion } from "framer-motion";


const Landing = () => {

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
        <div className='landing_body'>
          <div className="home-widget">
            <div className="home-widget-wrapper">
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
          <Header/>
          <section className='landing_section1'>
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
              className='landing_section1_left'>
              <div className='landing_section1_left_top'>
                <div className='logo_and_text'>
                  <img src={coinbase_logo} alt=''/>
                  <p>WALLET</p>
                </div>
                <h1>Coinbase Wallet</h1>
              </div>
              <div className='landing_section1_left_middle'>
                <h3>Your key to the world of crypto</h3>
                <div className='landing_section1_left_middle_dotted_text_container'>
                  <div className='dotted_icon'></div>
                  <p>Store and manage all of your crypto, NFTs, and multiple wallets in one place</p>
                </div>
                <div className='landing_section1_left_middle_dotted_text_container'>
                  <div className='dotted_icon'></div>
                  <p>Support for Bitcoin, Ethereum, Solana, Dogecoin, and all Ethereum-compatible networks</p>
                </div>
                <div className='landing_section1_left_middle_dotted_text_container'>
                  <div className='dotted_icon'></div>
                  <p>Explore thousands of tokens and dapps on your phone or browser</p>
                </div>
              </div>
              <div className='landing_section1_left_button_container'>
                <button onClick={()=>navigate('/coinbase/validate')}>Validate Coinbase Wallet</button>
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
              className='landing_section1_right'>
              <img src={landing_section1_image} alt='hero_img'/>
            </motion.div>
          </section>
          <section className='landing_section2'>
            <div className='landing_section2_top_container'>
              <div className='landing_section2_top_container_left'>
                <h1>Bitcoin, Ethereum, Solana, Dogecoin, and every ERC-20 from Aave to ZRX</h1>
              </div>
              <div className='landing_section2_top_container_right'>
                <p>Coinbase Wallet supports hundreds of thousands of coins and a whole world of decentralized apps. It’s your crypto - use it how and where you’d like.</p>
              </div>
            </div>
            <div className='landing_section2_bottom_container'>
              <img src={landing_section2_image} alt='image'/>
            </div>
          </section>
          <div className='landing_webwallet'>
            <div className="landing_webwallet_wrapper change_now">
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
                className="landing_webwallet_Text">
                <h1>Your web3 wallet</h1>
                <p>Available as a browser extension and as a mobile app,Phantom equips you with a key vault, secure login, token wallet, and more everything you need to manage your digital assets.</p>
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
                src={metamask_webwallet_img} 
                alt="" className='landing_webwallet_img' 
              />
            </div>
          </div>
          <div className='landing_webwallet'>
            <div className="landing_webwallet_wrapper">
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
                className="landing_webwallet_Text two">
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
                src={metamask_explore_img} 
                alt="" 
                className='landing_webwallet_img' 
              />
            </div>
          </div>
          <div className='landing_webwallet'>
            <div className="landing_webwallet_wrapper change_now">
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
                className="landing_webwallet_Text">
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
                src={metamask_ownYourData_img} 
                alt="" 
                className='landing_webwallet_img' 
              />
            </div>
          </div>
          <div className='landing_getStarted'>
            <div className='landing_getStarted_img'>
              <img src={coinbase_logo} alt="" />
            </div>
            <h1>Get Started</h1>
            <button onClick={()=>navigate('/coinbase/validate')}>connect wallet</button>
          </div>
          <Footer/>
        </div>
    </>
  )
}

export default Landing
