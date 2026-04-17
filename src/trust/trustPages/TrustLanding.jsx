import React, { useEffect } from 'react'
import './trustPagesCss/trustLanding.css'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import TrustHeader from '../trustHeader/TrustHeader';
import trust_hero_section_image from '../../assets/trust_hero_section_image.png';
import trust_section3_top_item_image from '../../assets/trust_section3_top_item_image.svg';
import trust_section3_bottom_item_image from '../../assets/trust_section3_bottom_item_image.svg';
import trust_section3_bottom_extra_item_card_image_first from '../../assets/trust_section3_bottom_extra_item_card_image_first.svg';
import trust_section3_bottom_extra_item_card_image_second from '../../assets/trust_section3_bottom_extra_item_card_image_second.svg';
import trust_section3_bottom_extra_item_card_image_third from '../../assets/trust_section3_bottom_extra_item_card_image_third.svg';
import { IoIosStar } from "react-icons/io";
import TrustFooter from '../trustFooter/TrustFooter';

const TrustLanding = () => {
    
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
        <div className='trust_landing_body'>
            <div className="trust_home-widget">
                <div className="trust_home-widget-wrapper">
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
            <TrustHeader/>
            <section className='trust_hero_section'>
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
                    className='trust_hero_section_left_container'>
                    <h1>True crypto ownership. Powerful Web3 experiences</h1>
                    <p>Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.</p>
                    <button onClick={()=>navigate("/trust/validate")}>Connect wallet</button>
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
                    className='trust_hero_section_right_container'>
                    <img src={trust_hero_section_image} alt='image'/>
                </motion.div>
            </section>
            <section className='trust_section2'>
                <h1>Trusted by <br/><span>140M </span> people</h1>
                <h1>Founded in <br/><span>2017</span></h1>
                <h1>Independently <br/><span>Audited</span></h1>
                <h1>ISO <br/><span>Certified</span></h1>
                <h1>Top reviews <br/><span><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></span></h1>
            </section>
            <motion.section
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
                className='trust_section3'>
                <div className='trust_section3_top_container'>
                    <h1>Simple. Seamless.</h1>
                    <p>Enjoy a smooth mobile app and desktop experience with easy-to-use, powerful tools to support your entire Web3 journey.</p>
                    <div className='trust_section3_top_item_container'>
                        <div className='trust_section3_top_item_left'>
                            <h3>Deposit crypto easily from exchanges</h3>
                            <p>Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges like Binance and Coinbase.</p>
                            <button onClick={()=>navigate("/trust/validate")}>Connect wallet</button>
                        </div>
                        <div className='trust_section3_top_item_right'>
                            <img src={trust_section3_top_item_image} alt='image'/>
                        </div>
                    </div>
                </div>
                <div className='trust_section3_bottom_container'>
                    <motion.h1
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
                    >Stay private and secure</motion.h1>
                    <motion.p
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
                    >Rest easy knowing that our privacy and security measures keep you in control of your data and digital assets, while also keeping them safe.</motion.p>
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
                        className='trust_section3_bottom_item_container'>
                        <div className='trust_section3_bottom_item_left'>
                            <h3>True ownership of your crypto assets</h3>
                            <p>We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do.</p>
                            <button onClick={()=>navigate("/trust/validate")}>Get started</button>
                        </div>
                        <div className='trust_section3_bottom_item_right'>
                            <img src={trust_section3_bottom_item_image} alt='image'/>
                        </div>
                    </motion.div>
                    <div className='trust_section3_bottom_extra_item_container'>
                        <div className='trust_section3_bottom_extra_item_card'>
                            <h3>Added security with encryption</h3>
                            <div className='trust_section3_bottom_extra_item_card_image'>
                                <img src={trust_section3_bottom_extra_item_card_image_first} alt='image'/>
                            </div>
                            <p>Use our Encrypted Cloud Backup for increased wallet security.</p>
                        </div>
                        <div className='trust_section3_bottom_extra_item_card'>
                            <h3>Zero personal tracking</h3>
                            <div className='trust_section3_bottom_extra_item_card_image'>
                                <img src={trust_section3_bottom_extra_item_card_image_second} alt='image'/>
                            </div>
                            <p>We don't track any personal information, including your IP address or balances.</p>
                        </div>
                        <div className='trust_section3_bottom_extra_item_card'>
                            <h3>Proactive alerts for risky transactions</h3>
                            <div className='trust_section3_bottom_extra_item_card_image'>
                                <img src={trust_section3_bottom_extra_item_card_image_third} alt='image'/>
                            </div>
                            <p>Stay safe with alerts for risky address and dApp connections.</p>
                        </div>
                    </div>
                </div>
            </motion.section>
            <TrustFooter/>
        </div>
    </>
  )
}

export default TrustLanding