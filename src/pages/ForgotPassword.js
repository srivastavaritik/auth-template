import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/Card/Card';
import saly from '../assets/Saly.png'
import './Form.css'

const ForgotPassword = () => {
  return (
    <Card className="login__card">
      <div className="cont1">
        <h3>Your Logo</h3>
        <div className="login__form">
          <h2>Reset Your Password</h2>

          <p>
            Don't have an account? -{" "}
            <span className="bold">
              <Link to="/register">Register here!</Link>
            </span>
          </p>
          <p>
            Already have an account? -{" "}
            <span className="bold">
              <Link to="/">Login here!</Link>
            </span>
          </p>
          <br/>
          <p>Forgot Password?</p>
          <form>
            <p className="login__input-title">Email</p>
            <input
              className="login__input"
              type="email"
              placeholder="&#xF0e0; Enter your email address"
            />
            <button className="form-button">Get Password</button>
            <br />
          </form>
        </div>
      </div>
      <div className="cont2">
        <p className="login__phone">📞+88 596 782 483</p>
        <img src={saly} alt="" className="login__image" />
        <div className="login__signin">
          <h1>Forgot Password?!</h1>
          <p className="login__lorem">Don't worry, we've got you covered.</p>
        </div>
      </div>
    </Card>
  );
}

export default ForgotPassword