import React from 'react';
import '../index.css';

const FreeModal = ({ isOpen, onClose}) => {
  if (!isOpen) return null;

  const openTwitter = () => {
    window.open('https://twitter.com/yourtwitterhandle', '_blank');
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Free Square.</h2>
        <p>Post a fun tweet on X and mention @GoGoPool_.
          Be sure to show your tweet to Breevie if you get Bingo!
        </p>
        <button className="dont-post" onClick={onClose}>I don't want to post</button>
        <button onClick={openTwitter}>Post Now!</button>
      </div>
    </div>
  );
};

export default FreeModal;