import React from 'react';
import './cryptoFooter.css';
import crypto_logo from "../../assets/crypto_logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CryptoFooter = () => {
  return (
    <>
      <div className='crypto_footer_container'>
        <section className='crypto_footer_top'>
          <div className='crypto_footer_logo_container'>
            <img src={crypto_logo} alt='logo'/>
          </div>
          <div className='crypto_footer_top_line'></div>
          <div className='crypto_footer_top_icon_container'>
            <div className='crypto_footer_top_icon'>
              <FaXTwitter/>
            </div>
            <div className='crypto_footer_top_icon'>
              <FaInstagram/>
            </div>
            <div className='crypto_footer_top_icon'>
              <FaLinkedin/>
            </div>
            <div className='crypto_footer_top_icon'>
              <FaFacebook/>
            </div>
          </div>
        </section>
        <section className='crypto_footer_middle'>
          <p>
            The purpose of this website is solely to display information regarding the products and services available on the Crypto.com App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the Crypto.com App.
          </p>
          <p>
            Please note that the availability of the products and services on the Crypto.com App is subject to jurisdictional limitations. Crypto.com may not offer certain products, features and/or services on the Crypto.com App in certain jurisdictions due to potential or actual regulatory restrictions.
          </p>
          <p>
            Foris DAX MT Limited, a company incorporated in Malta with Company number (C88392) trading under the name “Crypto.com” via the Crypto.com app is licensed as a Class 3 Virtual Financial Assets Service Provider by the Malta Financial Services Authority. Foris DAX MT Limited is authorised to provide the following VFA services: 1. execution of orders on behalf of other persons; 2. dealing on own account; 3. custodian or nominee services; and 4. transfer services to experienced and non-experienced investors.
          </p>
        </section>
        <section className='crypto_footer_bottom'>
          <div className='crypto_footer_bottom_left'>
            <p>Copyright © 2018 - 2024 Crypto.com. All rights reserved.</p>
          </div>
          <div className='crypto_footer_bottom_right'>
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

export default CryptoFooter
