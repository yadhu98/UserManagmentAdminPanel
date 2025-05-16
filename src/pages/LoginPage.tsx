import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSucess, userState } from '../store/authSlice';
import { AuthService } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import './loginPage.css'
import Button from '../components/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = await AuthService.login(username, password);
    dispatch(loginSucess(token));
    dispatch(userState(username))
    setLoading(false);
    navigate('/dashboard');
  };


  return (
    <div className='login-container'>
<div className='form-login'>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        className='login-body-input'
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className='login-body-input'
      />
      <Button title={loading ? 'Logging in...' : 'Login'} onclickFn={handleSubmit}/>
    </div>
    </div>
    
  );
};

export default LoginPage;
