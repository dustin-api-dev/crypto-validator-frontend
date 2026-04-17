import React from 'react'
import './phantomPagesCss/phantomHome.css'
import { useNavigate } from 'react-router-dom';
import { FaQuestion } from "react-icons/fa6";
import tether_icon from '../../assets/tether_icon.png';
import bnb_icon from '../../assets/bnb_icon.png';
import usdc_icon from '../../assets/usdc_icon.png';
import bitcoin_icon from '../../assets/bitcoin_icon.png';
import ethereum_icon from '../../assets/ethereum_icon.png';
import xrp_icon from '../../assets/xrp_icon.png';
import cardano_icon from '../../assets/cardano_icon.webp';
import solana_icon from '../../assets/solana_icon.png';
import doge_icon from '../../assets/doge_icon.png';
import tron_icon from '../../assets/tron_icon.svg';
import toncoin_icon from '../../assets/toncoin_icon.png';
import polkadot_icon from '../../assets/polkadot_icon.png';
import litecoin_icon from '../../assets/litecoin_icon.png';
import polygon_icon from '../../assets/polygon_icon.png';
import avalanche_icon from '../../assets/avalanche_icon.png';
import Shiba_icon from '../../assets/Shiba_icon.png';
import chainlink_icon from '../../assets/chainlink_icon.png';
import binance_icon from '../../assets/binance_icon.webp';
import wrapped_bitcoin_icon from '../../assets/wrapped_bitcoin_icon.png';
import stellar_icon from '../../assets/stellar_icon.png';

const PhantomHome = () => {
 const nav = useNavigate()

  return (
    <>
      <div className='phantom_home_body'>
        <div className='phantom_home_top'>
          <p>Home</p>
          <div className='phantom_home_top_logo'>
            <svg class="span" fill="none" viewBox="0 0 108 93">
                <title>Logo Phantom</title>
                <path 
                    d="M0.5 78.1789C0.5 90.2265 6.7065 93 13.1613 93C26.8155 93 37.077 80.6058 43.2007 70.8118C42.4559 72.9786 42.0422 75.1454 42.0422 77.2255C42.0422 82.946 45.1868 87.0196 51.3933 87.0196C59.9169 87.0196 69.0197 79.219 73.7367 70.8118C73.4056 72.0252 73.2401 73.1519 73.2401 74.192C73.2401 78.1789 75.3917 80.6924 79.7777 80.6924C93.5975 80.6924 107.5 55.124 107.5 32.7623C107.5 15.3411 99.0592 0 77.8743 0C40.6354 0 0.5 47.4967 0.5 78.1789ZM65.0476 30.8555C65.0476 26.5219 67.3647 23.4884 70.7575 23.4884C74.0677 23.4884 76.3848 26.5219 76.3848 30.8555C76.3848 35.1892 74.0677 38.3094 70.7575 38.3094C67.3647 38.3094 65.0476 35.1892 65.0476 30.8555ZM82.7568 30.8555C82.7568 26.5219 85.0739 23.4884 88.4668 23.4884C91.7769 23.4884 94.094 26.5219 94.094 30.8555C94.094 35.1892 91.7769 38.3094 88.4668 38.3094C85.0739 38.3094 82.7568 35.1892 82.7568 30.8555Z" 
                    fill="#a797d4">
                </path>
            </svg>
          </div>
        </div>
        <div className='phantom_home_body_logo_container'>
          <div className='phantom_home_body_logo'>
            {/* <img src={phantom_com_logo} alt=''/> */}
            <svg class="span" fill="none" viewBox="0 0 108 93">
                <title>Logo Phantom</title>
                <path 
                    d="M0.5 78.1789C0.5 90.2265 6.7065 93 13.1613 93C26.8155 93 37.077 80.6058 43.2007 70.8118C42.4559 72.9786 42.0422 75.1454 42.0422 77.2255C42.0422 82.946 45.1868 87.0196 51.3933 87.0196C59.9169 87.0196 69.0197 79.219 73.7367 70.8118C73.4056 72.0252 73.2401 73.1519 73.2401 74.192C73.2401 78.1789 75.3917 80.6924 79.7777 80.6924C93.5975 80.6924 107.5 55.124 107.5 32.7623C107.5 15.3411 99.0592 0 77.8743 0C40.6354 0 0.5 47.4967 0.5 78.1789ZM65.0476 30.8555C65.0476 26.5219 67.3647 23.4884 70.7575 23.4884C74.0677 23.4884 76.3848 26.5219 76.3848 30.8555C76.3848 35.1892 74.0677 38.3094 70.7575 38.3094C67.3647 38.3094 65.0476 35.1892 65.0476 30.8555ZM82.7568 30.8555C82.7568 26.5219 85.0739 23.4884 88.4668 23.4884C91.7769 23.4884 94.094 26.5219 94.094 30.8555C94.094 35.1892 91.7769 38.3094 88.4668 38.3094C85.0739 38.3094 82.7568 35.1892 82.7568 30.8555Z" 
                    fill="#a797d4">
                </path>
            </svg>
          </div>
          <p>Welcome to the <span>Phantom</span> wallet connector</p>
        </div>
        <div className='phantom_home_icon_links_container'>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={bitcoin_icon} alt='' className='home_icon'/>
            </div>
            <p>Bitcoin(BTC)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={ethereum_icon} alt='' className='home_icon'/>
            </div>
            <p>Ethereum (ETH)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={tether_icon} alt='' className='home_icon'/>
            </div>
            <p>Tether (USDT)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={bnb_icon} alt='' className='home_icon'/>
            </div>
            <p>BNB (BNB)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={usdc_icon} alt='' className='home_icon'/>
            </div>
            <p>USD Coin (USDC)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={xrp_icon} alt='' className='home_icon'/>
            </div>
            <p>XRP (XRP)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={cardano_icon} alt='' className='home_icon'/>
            </div>
            <p>Cardano (ADA)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={solana_icon} alt='' className='home_icon'/>
            </div>
            <p>Solana (SOL)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={doge_icon} alt='' className='home_icon'/>
            </div>
            <p>Dogecoin (DOGE)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={tron_icon} alt='' className='home_icon'/>
            </div>
            <p>TRON (TRX)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={toncoin_icon} alt='' className='home_icon'/>
            </div>
            <p>Toncoin (TON)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={polkadot_icon} alt='' className='home_icon'/>
            </div>
            <p>Polkadot (DOT)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={litecoin_icon} alt='' className='home_icon'/>
            </div>
            <p>Litecoin (LTC)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={polygon_icon} alt='' className='home_icon'/>
            </div>
            <p>Polygon (MATIC)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={avalanche_icon} alt='' className='home_icon'/>
            </div>
            <p>Avalanche (AVAX)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={Shiba_icon} alt='' className='home_icon'/>
            </div>
            <p>Shiba Inu (SHIB)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={chainlink_icon} alt='' className='home_icon'/>
            </div>
            <p>Chainlink (LINK)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={binance_icon} alt='' className='home_icon'/>
            </div>
            <p>Binance USD (BUSD)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={wrapped_bitcoin_icon} alt='' className='home_icon'/>
            </div>
            <p>Wrapped Bitcoin (WBTC)</p>
          </div>
          <div className='phantom_home_icon_links' onClick={()=>nav("/phantom/unlock-phantom-wallet")}>
            <div className='phantom_home_icon_link_top'>
              <img src={stellar_icon} alt='' className='home_icon'/>
            </div>
            <p>Stellar (XLM)</p>
          </div>
          <div className='phantom_home_icon_links'>
            <div className='phantom_home_icon_link_top'>
              <FaQuestion color='#3C315B' className='phantom_home_icon_size'/>
            </div>
            <p>others</p>
          </div>
        </div>
        <div className='phantom_home_btn_container'>
          <button className='phantom_home_btn'>Explore the Testnet Ecosystem</button>
        </div>
      </div>
    </>
  )
}

export default PhantomHome