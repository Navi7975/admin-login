import React from 'react';
import './App.css'; // Ensure your CSS file is named appropriately and located correctly

// Define the Login component
const App: React.FC = () => {
  // Type for the event handler is inferred as React.MouseEvent
  const handleGoBack = () => {
    // Navigate back to the index page
    window.location.href = '../index.html';
  };

  return (
    <div className="login-container">
      <form id="loginForm" className="login-form">
       
        <fieldset className="login-form-section">
          <legend className="login-form-legend">
            <span className="login-text"><strong>LOGIN</strong></span>
          </legend>

          <div className="login-form-group">
            <label htmlFor="email" className="login-form-label">User ID</label>
            <input 
              id="UserID" 
              name="UserID" 
              type="Text" 
              placeholder="User Id" 
              className="login-form-input" 
              required 
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="login-form-label">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              placeholder="Password" 
              className="login-form-input" 
              required 
            />
          </div>
        </fieldset>

        <div className="login-form-btn-container">
          <button 
            type="submit" 
            className="login-form-btn login-form-btn-submit"
          >
            Login
          </button>
          <button 
            type="button" 
            className="login-form-btn login-form-btn-go-back" 
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>

        <div className="login-additional-links">
          <p>Don't have an account? <a href="form.html" className="login-link">Register Now</a></p>
          
        </div>
      </form>
    </div>
  );
};

export default App;
