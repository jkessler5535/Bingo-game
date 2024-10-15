import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderImg from '../assets/images/header-img';
import BingoIcon from '../assets/images/bingo-logo';
import Sponsors from '../assets/images/sponsors';

const LoginPage = () => {
  const [twitterHandle, setTwitterHandle] = useState('');
  const [telegram, setTelegram] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const twitter = localStorage.getItem("twitterHandle")
    const tg = localStorage.getItem("telegram")

    if (twitter && tg) {
      navigate('/bingo')
    }
  }, [navigate])


  const handleLogin = (e) => {
    e.preventDefault();

    if (twitterHandle && telegram) {
      localStorage.setItem('twitterHandle', twitterHandle);
      localStorage.setItem('telegram', telegram);
      setError("");
      navigate('/game-directions');
    } else {
      setError("Both inputs must be filled");
    }
  };

  return (
    <div className="login-page container">
      <HeaderImg />
      <div className="line top-line"></div>
      <BingoIcon />
      <h1 className="welcome">Welcome To Blocktail's Bingo Game</h1>


      <form onSubmit={handleLogin} className="login-form-container">
        <h2>Sign in to play</h2>
        <label htmlFor="telegram" className="login-label">
          Telegram
        </label>
        <input
          type="text"
          name="telegram"
          placeholder="telegram..."
          className="login-input"
          onChange={(e) => setTelegram(e.target.value)}
        />

        <label htmlFor="twitter-handle" className="login-label">
          Twitter Handle
        </label>
        <input
          type="text"
          name="twitterHandle"
          placeholder="@twitter_handle..."
          className="login-input"
          value={twitterHandle}
          onChange={(e) => setTwitterHandle(e.target.value)}
        />

        <p>All of your information is kept private and we will not share it with anyone.</p>
        <button type="submit" className="login-button">
          Continue
        </button>
        {error && (
          <div className='error-msg'>
            {error}
          </div>
        )}

      </form>
      <div className="line bottom-line">
      </div>
      <Sponsors />
    </div>
  );
};

export default LoginPage;
