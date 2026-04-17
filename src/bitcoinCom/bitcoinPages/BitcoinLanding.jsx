import React from 'react'
import "./bitcoinPagesCss/bitcoinLanding.css"
import BitcoinHeader from '../bitcoinHeader/BitcoinHeader'
import bitcoinCom_hero_image from "../../assets/bitcoinCom_hero_image.png"
import bitcoin_landing_feature_card_image_1 from "../../assets/bitcoin_landing_feature_card_image_1.png"
import bitcoin_landing_feature_card_image_2 from "../../assets/bitcoin_landing_feature_card_image_2.png"
import bitcoin_landing_feature_card_image_3 from "../../assets/bitcoin_landing_feature_card_image_3.png"
import bitcoin_landing_feature_card_image_4 from "../../assets/bitcoin_landing_feature_card_image_4.png"
import bitcoin_landing_feature_card_image_5 from "../../assets/bitcoin_landing_feature_card_image_5.png"
import bitcoin_landing_feature_card_image_6 from "../../assets/bitcoin_landing_feature_card_image_6.png"
import BitcoinFooter from '../bitcoinFooter/BitcoinFooter'
import { useNavigate } from 'react-router-dom'

const BitcoinLanding = () => {

  const navigate = useNavigate()

  return (
    <>
      <main className='bitcoin_landing_body'>
        <BitcoinHeader/>
        <section className='bitcoin_hero_section'>
          <article className='bitcoin_hero_text_container'>
            <h1>Free your money and invest with confidence</h1>
            <p>Your gateway to Bitcoin and beyond. Buy, sell, trade, and invest in one safe and simple app.</p>
            <button onClick={()=>navigate("/bitcoin/validate")}>Connect Wallet</button>
          </article>
          <article className='bitcoin_hero_image_container'>
            <img src={bitcoinCom_hero_image} alt='image'/>
          </article>
        </section>
        <section className='bitcoin_landing_wallets_connected_section'>
          <h1>57,716,000 <span>wallets connected</span></h1>
          <button onClick={()=>navigate("/bitcoin/validate")}>Connect yours now</button>
        </section>
        <section className='bitcoion_landing_feature_section'>
          <article className='bitcoin_landing_feature_top'>
            <h1>Every feature you need for economic freedom in one digital wallet</h1>
          </article>
          <article className='bitcoin_landing_feature_card_container'>
            <div className='bitcoin_landing_feature_card'>
              <div className='bitcoin_landing_feature_card_image_container'>
                <img src={bitcoin_landing_feature_card_image_1} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container'>
                <h2>Buy, sell, and trade</h2>
                <p>Build and manage your crypto portfolio from your mobile device. 
                  Buy with your credit card, payment app, or bank account. Instantly swap between cryptocurrencies. 
                  Protect your returns by trading into USD stablecoins.
                </p>
              </div>
            </div>
            <div className='bitcoin_landing_feature_card dir_change'>
              <div className='bitcoin_landing_feature_card_image_container image_change'>
                <img src={bitcoin_landing_feature_card_image_2} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container text_change'>
                <h2>Effortless security</h2>
                <p>Hold the keys to your digital assets in a wallet so secure, 
                  no one can access it except for you - not even us. Protect your money with passcode and biometric security features. 
                  Automatically back up all your wallets and restore access with a single custom password.
                </p>
              </div>
            </div>
            <div className='bitcoin_landing_feature_card'>
              <div className='bitcoin_landing_feature_card_image_container rd_change'>
                <img src={bitcoin_landing_feature_card_image_3} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container'>
                <h2>A trusted gateway to the world of Ethereum</h2>
                <p>Buy, sell, send, receive, and trade the most widely used ERC-20 tokens. 
                  Connect instantly to DApps. Earn interest, trade using decentralized exchanges, 
                  participate in NFT marketplaces and more.
                </p>
              </div>
            </div>
            <div className='bitcoin_landing_feature_card dir_change'>
              <div className='bitcoin_landing_feature_card_image_container image_change'>
                <img src={bitcoin_landing_feature_card_image_4} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container text_change'>
                <h2>Manage your spending</h2>
                <p>Create ‘saving’ and ‘spending’ wallets to organize your funds. 
                  Add personal notes to transactions and get a complete history of buys, sells, trades, and spends.
                </p>
              </div>
            </div>
            <div className='bitcoin_landing_feature_card'>
              <div className='bitcoin_landing_feature_card_image_container'>
                <img src={bitcoin_landing_feature_card_image_5} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container'>
                <h2>Track the markets</h2>
                <p>Stay informed with real-time market data displayed on your home screen. 
                  Get in-app access to the news that matters. Receive notifications when the market is moving.
                </p>
              </div>
            </div>
            <div className='bitcoin_landing_feature_card dir_change'>
              <div className='bitcoin_landing_feature_card_image_container image_change'>
                <img src={bitcoin_landing_feature_card_image_6} alt='image'/>
              </div>
              <div className='bitcoin_landing_feature_card_text_container text_change'>
                <h2>Move money freely</h2>
                <p>Send and receive cryptocurrencies anytime, anywhere - no questions asked. 
                  Take advantage of fully-customizable fees for sending. Create unlimited wallets to support your privacy.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section className='get_the_most_of_bitcooin_wallet_section'>
          <h2>Get the most out of your Bitcoin wallet</h2>
          <p>Subscribe to Bitcoin.com App updates to learn more…</p>
          <button onClick={()=>navigate("/bitcoin/validate")}>Connect Wallet</button>
        </section>
        <BitcoinFooter/>
      </main>
    </>
  )
}

export default BitcoinLanding