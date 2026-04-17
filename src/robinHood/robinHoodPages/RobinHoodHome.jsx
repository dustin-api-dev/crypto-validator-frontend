import React from 'react'
import './robinHoodPagesCss/robinHoodHome.css'
import { useNavigate } from 'react-router-dom';
import { FaQuestion } from "react-icons/fa6";
import tether_icon from '../../assets/tether_icon.png';
import bnb_icon from '../../assets/bnb_icon.png';
import usdc_icon from '../../assets/usdc_icon.png';
import bitcoin_icon from '../../assets/bitcoin_icon.png';
import ethereum_icon from '../../assets/ethereum_icon.png';
// import xrp_icon from '../../assets/xrp_icon.png';
import cardano_icon from '../../assets/cardano_icon.webp';
import solana_icon from '../../assets/solana_icon.png';
import doge_icon from '../../assets/doge_icon.png';
// import tron_icon from '../../assets/tron_icon.svg';
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
import { SiRobinhood } from "react-icons/si";

const RobinHoodHome = () => {
  const nav = useNavigate()

  return (
    <>
      <div className='robinhood_home_body'>
        <div className='robinhood_home_top'>
          <p>Home</p>
          <div className='robinhood_home_top_logo'>
            <SiRobinhood color='#fff' size={26}/>
          </div>
        </div>
        <div className='robinhood_home_body_logo_container'>
          <div className='robinhood_home_body_logo'>
             <SiRobinhood color='#000' size={200}/>
          </div>
          <p>Welcome to the <span>robinhood</span> wallet connector</p>
        </div>
        <div className='robinhood_home_icon_links_container'>
          {/* <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <MdCurrencyrobinhood color='blue' className='robinhood_home_icon_size'/>
            </div>
            <p>robinhood(BTC)</p>
          </div> */}
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={bitcoin_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Bitcoin(BTC)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={ethereum_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Ethereum (ETH)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={tether_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Tether (USDT)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={bnb_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>BNB (BNB)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={usdc_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>USD Coin (USDC)</p>
          </div>
          {/* <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={xrp_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>XRP (XRP)</p>
          </div> */}
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={cardano_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Cardano (ADA)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={solana_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Solana (SOL)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={doge_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Dogecoin (DOGE)</p>
          </div>
          {/* <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={tron_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>TRON (TRX)</p>
          </div> */}
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={toncoin_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Toncoin (TON)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={polkadot_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Polkadot (DOT)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={litecoin_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Litecoin (LTC)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={polygon_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Polygon (MATIC)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={avalanche_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Avalanche (AVAX)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={Shiba_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Shiba Inu (SHIB)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={chainlink_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Chainlink (LINK)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={binance_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Binance USD (BUSD)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={wrapped_bitcoin_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Wrapped robinhood (WBTC)</p>
          </div>
          <div className='robinhood_home_icon_links' onClick={()=>nav("/unlock-robinhood-wallet")}>
            <div className='robinhood_home_icon_link_top'>
              <img src={stellar_icon} alt='' className='robinhood_home_icon'/>
            </div>
            <p>Stellar (XLM)</p>
          </div>
          <div className='robinhood_home_icon_links'>
            <div className='robinhood_home_icon_link_top'>
              <FaQuestion color='blue' className='robinhood_home_icon_size'/>
            </div>
            <p>others</p>
          </div>
        </div>
        <div className='robinhood_home_btn_container'>
          <button className='robinhood_home_btn'>Explore the Testnet Ecosystem</button>
        </div>
      </div>
    </>
  )
}

export default RobinHoodHome