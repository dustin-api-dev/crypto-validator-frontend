import React from 'react'
import './robinHoodFooter.css'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import robinhood_logo from "../../assets/robinhood_header_icon.png";
import { SiRobinhood } from "react-icons/si";

const RobinHoodFooter = () => {
  return (
    <>
      <div className='robinhood_footer_container'>
        <section className='robinhood_footer_top'>
          <div className='robinhood_footer_logo_container'>
            <SiRobinhood color='#fff' size={36}/>
            {/* <img src={exodus_logo} alt='logo'/> */}
            <p>Robinhood</p>
          </div>
          <div className='robinhood_footer_top_line'></div>
          <div className='robinhood_footer_top_icon_container'>
            <div className='robinhood_footer_top_icon'>
              <FaXTwitter/>
            </div>
            <div className='robinhood_footer_top_icon'>
              <FaInstagram/>
            </div>
            <div className='robinhood_footer_top_icon'>
              <FaLinkedin/>
            </div>
            <div className='robinhood_footer_top_icon'>
              <FaFacebook/>
            </div>
          </div>
        </section>
        <section className='robinhood_footer_middle'>
          <p>
            The purpose of this website is solely to display information regarding the products and services available on the robinhood.com App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the robinhood.com App.
          </p>
          <p>
            Please note that the availability of the products and services on the robinhood.com App is subject to jurisdictional limitations. robinhood.com may not offer certain products, features and/or services on the robinhood.com App in certain jurisdictions due to potential or actual regulatory restrictions.
          </p>
          <p>
            Foris DAX MT Limited, a company incorporated in Malta with Company number (C88392) trading under the name “robinhood.com” via the robinhood.com app is licensed as a Class 3 Virtual Financial Assets Service Provider by the Malta Financial Services Authority. Foris DAX MT Limited is authorised to provide the following VFA services: 1. execution of orders on behalf of other persons; 2. dealing on own account; 3. custodian or nominee services; and 4. transfer services to experienced and non-experienced investors.
          </p>
        </section>
        <section className='robinhood_footer_bottom'>
          <div className='robinhood_footer_bottom_left'>
            <p>Copyright © 2018 - 2024 robinhood.com. All rights reserved.</p>
          </div>
          <div className='robinhood_footer_bottom_right'>
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

export default RobinHoodFooter