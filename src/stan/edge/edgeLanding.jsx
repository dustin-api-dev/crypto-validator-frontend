import React from "react";
import { ArrowRight, ShieldCheck, Lock, Globe, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./edgeLanding.css";
import edgeLogo from "../../assets/edge_logo.png"

const EdgeLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="edge-container">
      {/* NAV */}
      <nav className="edge-nav">
        <div className="edge-nav-content">
          <img src={edgeLogo} alt="Edge Wallet" className="edge-logo" />

          <button
            className="edge-nav-btn"
            onClick={() => navigate("/edge-wallet")}
          >
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="edge-hero fade-in">
        <div className="edge-hero-content">
          <h1>
            Take full control of your
            <span> digital assets</span>
          </h1>

          <p>
            Edge Wallet gives you complete ownership, privacy, and security.
            No third-party control. No compromises.
          </p>

          <button
            className="edge-primary-btn"
            onClick={() => navigate("/edge-wallet")}
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="edge-section slide-up">
        <h2>Why choose Edge Wallet?</h2>
        <p className="edge-sub">
          Designed for users who value privacy, security, and simplicity.
        </p>

        <div className="edge-grid">
          <div className="edge-card">
            <ShieldCheck />
            <h3>Self-custody</h3>
            <p>You own your keys. Your funds stay fully under your control.</p>
          </div>

          <div className="edge-card">
            <Lock />
            <h3>Advanced security</h3>
            <p>Client-side encryption with zero-knowledge architecture.</p>
          </div>

          <div className="edge-card">
            <Globe />
            <h3>Global access</h3>
            <p>Use your wallet anywhere without restrictions.</p>
          </div>
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="edge-dark slide-up">
        <h2>Built for privacy first</h2>
        <p>
          Edge never stores your private data. Everything is encrypted and
          controlled directly by you.
        </p>

        <div className="edge-dark-points">
          <div>
            <CheckCircle /> No data tracking
          </div>
          <div>
            <CheckCircle /> No centralized storage
          </div>
          <div>
            <CheckCircle /> No third-party access
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="edge-section slide-up">
        <h2>Get started in minutes</h2>

        <div className="edge-steps">
          <div className="edge-step">
            <span>01</span>
            <h4>Create or connect wallet</h4>
            <p>Set up your wallet securely in just a few clicks.</p>
          </div>

          <div className="edge-step">
            <span>02</span>
            <h4>Secure your keys</h4>
            <p>Your keys never leave your device.</p>
          </div>

          <div className="edge-step">
            <span>03</span>
            <h4>Start transacting</h4>
            <p>Send, receive, and manage crypto instantly.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="edge-cta">
        <h2>Ready to experience true ownership?</h2>
        <p>Connect your Edge Wallet and take control today.</p>

        <button
          className="edge-primary-btn large"
          onClick={() => navigate("/edge-wallet")}
        >
          Connect Edge Wallet <ArrowRight />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="edge-footer">
        © 2025 Edge Wallet. All rights reserved.
      </footer>
    </div>
  );
};

export default EdgeLanding;
