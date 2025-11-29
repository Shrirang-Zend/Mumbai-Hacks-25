// src/Pages/UserLogin.jsx
import { useState } from 'react';
import './UserLogin.css';

const UserLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  // Aadhaar / OTP state
  const [aadhar, setAadhar] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpSent, setOtpSent] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [verifyError, setVerifyError] = useState('');

  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // TODO: real login
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!verified) {
      setVerifyError('Please verify your Aadhaar before creating an account.');
      return;
    }
    // TODO: real signup
  };

  const onAadharChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 12);
    setAadhar(value);
    setVerifyError('');
  };

  const canRequestOtp = aadhar.length === 12 && !verifying && !verified;

  // Simulate server call: request OTP
  const handleRequestOtp = () => {
    if (!canRequestOtp) return;
    setVerifying(true);
    setVerifyError('');
    setOtpSent(false);
    setVerified(false);
    // fake delay
    setTimeout(() => {
      setVerifying(false);
      setOtpSent(true);
      // backend will actually send OTP & give last-4 digits
    }, 1500);
  };

  const onOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    setVerifyError('');

    // move focus automatically
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    // when all 4 digits filled, auto-verify
    if (index === 3 && value && next.join('').length === 4) {
      triggerOtpVerify(next.join(''));
    }
  };

  const triggerOtpVerify = (code) => {
    if (otpVerifying || verified) return;
    setOtpVerifying(true);
    setVerifyError('');
    // fake backend check
    setTimeout(() => {
      setOtpVerifying(false);
      // for now accept any 4-digit code as success
      const success = true;
      if (success) {
        setVerified(true);
      } else {
        setVerified(false);
        setVerifyError('Invalid OTP. Please try again.');
      }
    }, 1200);
  };

  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="user-auth-root">
      {/* back-to-home pill */}
      <button type="button" className="back-pill" onClick={goHome}>
        <span className="back-arrow left" />
        <span className="back-text">Home</span>
      </button>

      <div
        className={
          isSignUp
            ? 'auth-container right-panel-active'
            : 'auth-container'
        }
        id="auth-container"
      >
        {/* Sign‑up form */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create account</h1>
            <span>Tell us who you are so we can verify you.</span>

            <input
              type="text"
              placeholder="Full name"
              required
            />
            <input
              type="tel"
              placeholder="Mobile number"
              required
            />
            <input
              type="email"
              placeholder="Email (for updates & login)"
              required
            />

            {/* Aadhaar + verify button */}
            <div className="aadhar-row">
              <input
                type="text"
                placeholder="Aadhaar number (12 digits)"
                value={aadhar}
                onChange={onAadharChange}
                maxLength={12}
                required
              />
              <button
                type="button"
                className={`verify-btn ${
                  verified ? 'verify-btn-verified' : ''
                }`}
                disabled={!canRequestOtp}
                onClick={handleRequestOtp}
              >
                {verified ? (
                  <span className="verify-label">
                    <span className="verify-tick" />
                    Verified
                  </span>
                ) : verifying ? (
                  <span className="verify-loading">
                    <span className="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </span>
                  </span>
                ) : (
                  'Verify'
                )}
              </button>
            </div>

            {/* OTP section */}
            {otpSent && !verified && (
              <div className="otp-section">
                <p className="otp-info">
                  OTP sent to the mobile number linked with this Aadhaar.
                </p>
                <div className="otp-inputs">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => onOtpChange(i, e.target.value)}
                    />
                  ))}
                </div>
                {otpVerifying && (
                  <div className="otp-loading">
                    <span className="lds-ellipsis small">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Address + extra fields */}
            <textarea
              className="address-input"
              placeholder="Home address"
              rows={3}
              required
            />
            <input
              type="text"
              placeholder="City / District"
              required
            />
            <input
              type="text"
              placeholder="State"
              required
            />
            <input
              type="text"
              placeholder="PIN code"
              required
            />

            {/* Photo upload */}
            <label className="file-label">
              <span>Upload ID photo / profile photo</span>
              <input type="file" accept="image/*" required />
            </label>

            {verifyError && (
              <p className="verify-error">{verifyError}</p>
            )}

            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign‑in form */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignInSubmit}>
            <h1>Sign in</h1>
            <span>Use your email and password</span>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#forgot">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay (unchanged) */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome back</h1>
              <p>Log in to your safety feed, alerts, and crisis helper.</p>
              <button
                className="ghost"
                type="button"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Join the network</h1>
              <p>Create an account to receive verified alerts and report safely.</p>
              <button
                className="ghost"
                type="button"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
