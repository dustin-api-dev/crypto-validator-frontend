import React from 'react'
import './etoroPagesCss/etoroLanding.css'
import { useNavigate } from 'react-router-dom'
import etoro_logo from "../../assets/etoro_logo.png"
import etoro_file from "../../assets/etoro_file.webp"

const EtoroLanding = () => {

  const navigate = useNavigate()

  return (
    <div className="etoro_landing_body">

      {/* ================= HEADER ================= */}
      <header className="etoro_header">
        <img src={etoro_logo} alt="eToro logo" className="etoro_logo" />
        <button
          className="etoro_header_btn"
          onClick={() => navigate('/etoro-wallet')}
        >
          Connect Wallet
        </button>
      </header>

      {/* ================= HERO ================= */}
      <section className="etoro_hero">
        <div className="etoro_hero_text">
          <h1>Trade Smarter with eToro Wallet</h1>
          <p>
            Securely connect your wallet to manage crypto assets, 
            verify ownership, and access decentralized opportunities
            on the world’s leading social trading platform.
          </p>

          <button onClick={() => navigate('etoro-wallet')}>
            Verify Wallet
          </button>
        </div>

        <div className="etoro_hero_image">
          <img src={etoro_file} alt="eToro wallet preview" />
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="etoro_trust">
        <h2>Why Millions Trust eToro</h2>

        <div className="etoro_trust_cards">
          <div className="etoro_card">
            <h3>Secure Wallet Validation</h3>
            <p>
              Verify wallet ownership before accessing trading
              and DeFi services to ensure maximum protection.
            </p>
          </div>

          <div className="etoro_card">
            <h3>Regulated & Trusted</h3>
            <p>
              eToro operates under strict regulatory standards
              with industry-grade security infrastructure.
            </p>
          </div>

          <div className="etoro_card">
            <h3>Self-Custody Control</h3>
            <p>
              Your keys remain yours. Full transparency,
              control, and freedom over your crypto assets.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DARK CTA ================= */}
      <section className="etoro_dark_cta">
        <h2>Take Full Control of Your Crypto</h2>
        <p>
          Connect your wallet securely to unlock trading,
          portfolio tracking, and decentralized finance tools.
        </p>

        <button onClick={() => navigate('etoro-wallets')}>
          Connect Wallet
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="etoro_footer">
        <p>© {new Date().getFullYear()} eToro Wallet. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default EtoroLanding
