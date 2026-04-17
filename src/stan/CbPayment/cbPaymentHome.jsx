import React from 'react'
import { ArrowRight, CheckCircle, Globe, Lock, TrendingUp, Shield, CreditCard } from 'lucide-react'
import './cbPayment.css'
import { useNavigate } from "react-router-dom";
import coinbaseLogo from "../../assets/coinbase_logo.png"


const Default = () => {
    const navigate = useNavigate();

  return (
    <div className="cbpay-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
        <img 
          src={coinbaseLogo} 
          alt="Coinbase Logo" 
          className="coinbase-logo" 
        />
      </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Trusted by millions worldwide</span>
          </div>
          
          <h1 className="hero-title">
            Validate and secure your wallets
          </h1>
          
          <p className="hero-subtitle">
           Our platform helps you confirm and protect your digital assets using trusted security checks.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate("/cbpayment-landing")}>
              Get started
              <ArrowRight className="btn-icon" />
            </button>
          </div>
          
          {/* Floating Cards Animation */}
          <div className="floating-cards">
            <div className="crypto-card card-1">
              <div className="card-icon">₿</div>
              <div className="card-info">
                <div className="card-name">Bitcoin</div>
                <div className="card-price">$42,580</div>
                <div className="card-change positive">+2.4%</div>
              </div>
            </div>
            
            <div className="crypto-card card-2">
              <div className="card-icon">Ξ</div>
              <div className="card-info">
                <div className="card-name">Ethereum</div>
                <div className="card-price">$2,240</div>
                <div className="card-change positive">+1.8%</div>
              </div>
            </div>
            
            <div className="crypto-card card-3">
              <div className="card-icon">◎</div>
              <div className="card-info">
                <div className="card-name">Solana</div>
                <div className="card-price">$98.50</div>
                <div className="card-change negative">-0.5%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-number">$335B</div>
            <div className="stat-label">Quarterly volume secured</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">100+</div>
            <div className="stat-label">Countries supported</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">108M+</div>
            <div className="stat-label">Verified users</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">The most trusted security platform</h2>
          <p className="section-description">
            Here are a few reasons why you should secure your accounts
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon-wrapper">
              <Shield className="feature-icon" />
            </div>
            <h3 className="feature-title">Secure account verification</h3>
            <p className="feature-text">
              We use trusted verification methods to help confirm account and wallet ownership, without exposing private keys or recovery phrases.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper">
              <Lock className="feature-icon" />
            </div>
            <h3 className="feature-title">Advanced security controls</h3>
            <p className="feature-text">
             We prioritize user safety by avoiding the storage of private keys, passwords, or recovery phrases.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper">
              <Globe className="feature-icon" />
            </div>
            <h3 className="feature-title">Built on industry standards</h3>
            <p className="feature-text">
             Our security process follows modern best practices used across the crypto and fintech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section">
        <div className="security-content">
          <div className="security-visual">
            <div className="security-badge-large">
              <Lock className="badge-icon-large" />
            </div>
          </div>
          
          <div className="security-text">
            <h2 className="security-title">The most trusted way to build your portfolio is to secure it </h2>
            <p className="security-description">
              Whether you're looking to grow your portfolio or just get started, we make it easy by securing your accounts.
            </p>
            
            <div className="security-features">
              <div className="security-item">
                <CheckCircle className="check-icon" />
                <span>Best security practices</span>
              </div>
              <div className="security-item">
                <CheckCircle className="check-icon" />
                <span>Insured and encrypted</span>
              </div>
              <div className="security-item">
                <CheckCircle className="check-icon" />
                <span>Industry leading compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">secure your crypto today</h2>
          <p className="cta-text">
            The easiest place secure all cryptocurrency
          </p>
          <button className="btn btn-cta" onClick={() => navigate("/cbpayment-landing")}>
            Get started
            <ArrowRight className="btn-icon" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section footer-main">
            <div className="footer-logo">
              <svg className="coinbase-logo-footer" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#0052FF"/>
                <path d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z" fill="white"/>
              </svg>
            </div>
            <p className="footer-description">
              Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <a href="#about" className="footer-link">About</a>
            <a href="#careers" className="footer-link">Careers</a>
            <a href="#press" className="footer-link">Press</a>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <a href="#help" className="footer-link">Help center</a>
            <a href="#contact" className="footer-link">Contact us</a>
            <a href="#status" className="footer-link">System status</a>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <a href="#privacy" className="footer-link">Privacy policy</a>
            <a href="#terms" className="footer-link">Terms of service</a>
            <a href="#licenses" className="footer-link">Licenses</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Coinbase</p>
          <p className="footer-location">Regulated by the FCA</p>
        </div>
      </footer>
    </div>
  )
}

export default Default