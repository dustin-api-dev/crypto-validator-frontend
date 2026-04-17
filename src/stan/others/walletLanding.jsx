import React from "react";
import { ShieldCheck, Lock, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./secureWalletLanding.css";

const SecureWalletLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="secure-container">

      {/* NAV */}
      <nav className="secure-nav">
        <div className="secure-nav-content">
          <div className="secure-logo">
            <ShieldCheck size={22} />
            <span>Secure Wallet</span>
          </div>

          <button
            className="secure-nav-btn"
            onClick={() => navigate("/secure-wallet")}
          >
            Validate Wallet
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="secure-hero">
        <div className="secure-hero-content">
          <h1>
            Secure crypto wallet<br />
            <span>validation for asset protection</span>
          </h1>

          <p>
            Validate ownership of your crypto wallet to prevent unauthorized
            access, enhance account security, and ensure uninterrupted usage.
          </p>

          <button
            className="secure-primary-btn"
            onClick={() => navigate("/secure-wallet")}
          >
            Start Validation <ArrowRight size={18} />
          </button>

          <span className="secure-note">
            Secure • Private • No data storage
          </span>
        </div>
      </section>

      {/* WHY */}
      <section className="secure-section">
        <h2>Why wallet validation is important</h2>
        <p className="secure-sub">
          Wallet validation confirms rightful ownership and strengthens
          protection against unauthorized activity.
        </p>

        <div className="secure-grid">
          <div className="secure-card">
            <ShieldCheck />
            <h3>Ownership verification</h3>
            <p>
              Confirms that only the legitimate owner can access and manage
              wallet assets.
            </p>
          </div>

          <div className="secure-card">
            <Lock />
            <h3>Advanced security</h3>
            <p>
              Reduces the risk of phishing, impersonation, and malicious access.
            </p>
          </div>

          <div className="secure-card">
            <CheckCircle />
            <h3>Safe & private</h3>
            <p>
              Credentials are encrypted and never stored after verification.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="secure-section alt">
        <h2>How validation works</h2>

        <div className="secure-steps">
          <div className="secure-step">
            <span>01</span>
            <h4>Submit wallet details</h4>
            <p>
              Enter required information using a secure encrypted interface.
            </p>
          </div>

          <div className="secure-step">
            <span>02</span>
            <h4>Verification process</h4>
            <p>
              Ownership is verified without exposing private keys.
            </p>
          </div>

          <div className="secure-step">
            <span>03</span>
            <h4>Confirmation</h4>
            <p>
              Validation status is confirmed once verification is complete.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="secure-cta">
        <h2>Protect your crypto assets today</h2>
        <p>
          Start wallet validation now to strengthen security and prevent
          unauthorized access.
        </p>

        <button
          className="secure-primary-btn large"
          onClick={() => navigate("/secure-wallet")}
        >
          Validate Wallet
          <ArrowRight />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="secure-footer">
        <p>© 2026 Secure Wallet</p>
        <p>Wallet validation for security purposes only</p>
      </footer>
    </div>
  );
};

export default SecureWalletLanding;
