import React from 'react'
import "./BitcoinFooter.css"
import bitcoinCom_header_logo from "../../assets/bitcoinCom_header_logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BitcoinFooter = () => {
  return (
    <>
          <div className='bitcoin_footer_container'>
            <section className='bitcoin_footer_top'>
              <div className='bitcoin_footer_logo_container'>
                <img src={bitcoinCom_header_logo} alt='logo'/>
              </div>
              <div className='bitcoin_footer_top_line'></div>
              <div className='bitcoin_footer_top_icon_container'>
                <div className='bitcoin_footer_top_icon'>
                  <FaXTwitter/>
                </div>
                <div className='bitcoin_footer_top_icon'>
                  <FaInstagram/>
                </div>
                <div className='bitcoin_footer_top_icon'>
                  <FaLinkedin/>
                </div>
                <div className='bitcoin_footer_top_icon'>
                  <FaFacebook/>
                </div>
              </div>
            </section>
            <section className='bitcoin_footer_middle'>
              <p>
                The purpose of this website is solely to display information regarding the products and services available on the bitcoin.com App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the bitcoin.com App.
              </p>
              <p>
                Please note that the availability of the products and services on the bitcoin.com App is subject to jurisdictional limitations. bitcoin.com may not offer certain products, features and/or services on the bitcoin.com App in certain jurisdictions due to potential or actual regulatory restrictions.
              </p>
              <p>
                Foris DAX MT Limited, a company incorporated in Malta with Company number (C88392) trading under the name “bitcoin.com” via the bitcoin.com app is licensed as a Class 3 Virtual Financial Assets Service Provider by the Malta Financial Services Authority. Foris DAX MT Limited is authorised to provide the following VFA services: 1. execution of orders on behalf of other persons; 2. dealing on own account; 3. custodian or nominee services; and 4. transfer services to experienced and non-experienced investors.
              </p>
            </section>
            <section className='bitcoin_footer_bottom'>
              <div className='bitcoin_footer_bottom_left'>
                <p>Copyright © 2018 - 2024 bitcoin.com. All rights reserved.</p>
              </div>
              <div className='bitcoin_footer_bottom_right'>
                <p>Privacy Notice</p>
                <span></span>
                <p>Status</p>
                <span></span>
                <p>Cookie Preferences</p>
              </div>
            </section>
          </div>
        </>
  )
}

export default BitcoinFooter
