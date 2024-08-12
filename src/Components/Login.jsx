import React, { useState, useContext } from 'react';
import './Login.css';
import googleicon from '../Assets/googles.png';
import facebookicon from '../Assets/facebook.png';
import appleicon from '../Assets/apple.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Components/UserContent';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const logincred = { email, password };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Attempting login with email:', email);
    try {
      const response = await axios.post('http://localhost:9001/Fitfreak/login', logincred);

      console.log('Response status:', response.status);
      console.log('Response data:', response.data);

      if (response.status === 200) {
        console.log('Login Successful');
        navigate('/');
      } else {
        console.error('Login Failed:', response.status, response.statusText);
        alert(`Invalid email or password: ${response.data}`);
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='bg'>
      <div className='bp'>
        <div className="login-container">
          <h2>Log in or create an account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email Address:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password:</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className='submit'>Continue</button>
            <h6 className='or'>-----------------------or-------------------------</h6>
            <h6 className='pp'>By continuing, you agree to the Terms of Sale, Terms of Service, and Privacy Policy.</h6>
            {/* <button className='goo'><img src={googleicon} alt='Google'></img>Continue with Google</button>
            <button className='face'><img src={facebookicon} alt='Facebook'></img>Continue with Facebook</button>
            <button className='app'><img src={appleicon} alt='Apple'></img>Continue with Apple</button> */}
            <button type="button" className='submit' onClick={() => navigate('/Signup')}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
