import React from 'react';
import './App.css';
import Google from './assets/google.svg';
import Info from './assets/info.svg';

function App() {
  return (
    <div className="dashboard">
      <div className="layout">
        <div className="d-flex justify-content-center">
          <h1 className="sign_up">Sign Up</h1>
        </div>
        <div className="btn_container">
          <button className="btn btn-primary btn_google">
            <img
              src={Google}
              alt="ggl icon"
              style={{ paddingBottom: '5px', paddingRight: '10px' }}
            />
            Continue with Google
          </button>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="d-flex justify-content-center">
          <div className="email_container">
            <p style={{ margin: '0', fontSize: '13px', color: '#9B9EB0' }}>
              <strong>Email Address</strong>
            </p>
            <p style={{ color: '181229' }}>rajabishek@hotmail.com</p>
          </div>
        </div>
        <div className="info_container ml-2">
          <div className="d-flex justify-content-center mr-2 ml-2">
            <img src={Info} alt="info_icon" />
          </div>
          <div>
            <p style={{ margin: '0' }}>
              <strong>Please check your email</strong>
            </p>
            <p style={{ fontSize: '15px' }}>
              We’ve sent a temporary authorization code to
              rajabisek@hotmail.com. It may take a few minutes to arrive.
            </p>
          </div>
        </div>
        <div className="m-2">
          <input
            className="form-control login_input"
            type="text"
            placeholder="Please paste authorization code"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn login_btn ">
            <strong>Log In</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
