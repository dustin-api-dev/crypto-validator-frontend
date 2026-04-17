import React from 'react'
import "./footer.css";
import header_logo from '../../../assets/header_logo.svg';

const Footer = () => {
  return (
    <>
      <div className='footer_body'>
        <div className='footer_first_container'>
          <div className='footer_logo_container'>
            <img src={header_logo} alt='logo'/>
          </div>
          <div className='footer_link_container'>
            <p>© 2024 Coinbase</p>
            <div className='footer_media_link'>
              <a>Blog</a>
              <span></span>
              <a>Twitter</a>
              <span></span>
              <a>Facebook</a>
            </div>
          </div>
        </div>
        <section className='coinbase_footer_middle'>
          <p>
            The purpose of this website is solely to display information regarding the products and services available on the Coinbase.com App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the Coinbase.com App.
          </p>
          <p>
            Please note that the availability of the products and services on the Coinbase.com App is subject to jurisdictional limitations. Coinbase.com may not offer certain products, features and/or services on the Coinbase.com App in certain jurisdictions due to potential or actual regulatory restrictions.
          </p>
          <p>
            Foris DAX MT Limited, a company incorporated in Malta with Company number (C88392) trading under the name “Coinbase.com” via the Coinbase.com app is licensed as a Class 3 Virtual Financial Assets Service Provider by the Malta Financial Services Authority. Foris DAX MT Limited is authorised to provide the following VFA services: 1. execution of orders on behalf of other persons; 2. dealing on own account; 3. custodian or nominee services; and 4. transfer services to experienced and non-experienced investors.
          </p>
        </section>
        <section className='coinbase_footer_bottom'>
          <div className='coinbase_footer_bottom_left'>
            <p>Copyright © 2018 - 2024 Coinbase.com. All rights reserved.</p>
          </div>
          <div className='coinbase_footer_bottom_right'>
            <p>Privacy Notice</p>
            <span></span>
            <p>Status</p>
            <span></span>
            <p>Cookie Preferences</p>
          </div>
        </section>
        {/* <div className='footer_second_container'>
          <div className='footer_nav_container'>
            <h3>Company</h3>
            <a>About</a>
            <a>Carrers</a>
            <a>Affiliates</a>
            <a>Blog</a>
            <a>Press</a>
            <a>Security</a>
            <a>Investors</a>
            <a>Vendors</a>
            <a>Legal & privacy</a>
            <a>Cookie policy</a>
            <a>Cookie preferences</a>
            <a>Do Not Share My Personal Information</a>
            <a>Digital Asset Disclosures</a>
          </div>
        </div>
        <div className='footer_third_container'>
          <div className='footer_nav_container'>
            <h3>Individuals</h3>
            <a>Buy & sell</a>
            <a>Earn free Crypto</a>
            <a>Wallet</a>
            <a>Card</a>
            <a>Coinbase One</a>
          </div>
        </div>
        <div className='footer_third_container'>
          <div className='footer_nav_container'>
            <h3>Support</h3>
            <a>Help center</a>
            <a>Contact us</a>
            <a>Create account</a>
            <a>ID verification</a>
            <a>Account information</a>
            <a>Payment methods</a>
            <a>Account access</a>
            <a>Supported Crypto</a>
            <a>Status</a>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Footer
