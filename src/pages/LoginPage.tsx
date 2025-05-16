import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSucess, userState } from '../store/authSlice';
import { AuthService } from '../services/authService';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '2rem auto' }}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        style={{ display: 'block', margin: '1rem 0', width: '100%' }}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ display: 'block', margin: '1rem 0', width: '100%' }}
      />
      <button type="submit" disabled={loading} style={{ width: '100%' }}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginPage;
