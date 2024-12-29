import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

function Error404() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
        <p className="error-description">
          Don't worry, we're here to help! Please return to the homepage or explore our other services.
        </p>
        <Link to="/" className="back-home-button">Go Back to Home</Link>
      </div>
    </div>
  );
}

export default Error404;
