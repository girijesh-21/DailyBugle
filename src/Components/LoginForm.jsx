import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import './LoginForm.css';
import googleIcon from '../assets/google.png';
import appleIcon from '../assets/apple-logo.png';
import logo1 from '../assets/logo1.png';

const LoginForm = ({ closeLoginForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInType, setSignInType] = useState('User');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signInType === 'Admin') {
      navigate('/admin-dashboard');
    } else if (signInType === 'Doctor') {
      navigate('/doctor', {
        state: {
          date: new Date(),
          time: '10:00 AM',
          problem: 'General check-up',
          patientName: email,
        }
      });
    } else {
      setUser({ email });
      closeLoginForm();
    }
  };

  const handleSignInTypeChange = (type) => {
    setSignInType(type);
  };

  const heading = signInType === 'User' ? 'User login' : `${signInType} sign in`;
  const switchLinkText = signInType === 'User' ? '' : 'Back to User sign in';
  const placeholder = signInType === 'User' ? 'Enter your User Id' :
                      signInType === 'Admin' ? 'Enter your Admin Id' :
                      'Enter your Doctor Id';

  return (
    <div className="login-overlay">
      <div className="login-popup">
        <div className='close0' onClick={closeLoginForm}>✖</div>
        <img src={logo1} alt="Logo" className="logo" />
        <p>{heading}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            aria-label="Email Address"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            aria-label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="continue-btn">Continue</button>
        </form>
        <div className="divider">or</div>
        <div className="social-logos">
          <img src={googleIcon} alt="Google" className="social-logo1" />
          <img src={appleIcon} alt="Apple" className="social-logo" />
        </div>
        <div className="footer-text">
          New to Zocdoc? <a href="#">Create an account</a>
        </div>
        <div className="additional-links">
          {signInType === 'User' ? (
            <>
              <a href="#" onClick={() => handleSignInTypeChange('Doctor')}>Doctor sign in</a>
              <a href="#" onClick={() => handleSignInTypeChange('Admin')}>Admin sign in</a>
            </>
          ) : (
            <a href="#" onClick={() => handleSignInTypeChange('User')}>{switchLinkText}</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
