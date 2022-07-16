import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import "./Form.css";
import saly from "../assets/Saly.png";
import fb from '../assets/fb.png'
import apple from '../assets/apple.png'
import google from '../assets/google.png'

const Login = () => {
  return (
    <Card className="login__card">
      <div className="cont1">
        <h3>Your Logo</h3>
        <div className="login__form">
          <h2>Sign in</h2>
          <p>If you don’t have an account register</p>
          <p>
            You can{" "}
            <span className="bold">
              <Link to="/register">Register here !</Link>
            </span>
          </p>

          <form>
            <p className="login__input-title">Email</p>
            <input
              className="login__input"
              type="email"
              placeholder="Enter your email address"
            />
            <p className="login__input-title">Password</p>
            <input
              className="login__input"
              type="password"
              placeholder="Enter your Password"
            />
            <div className="flex">
              <div>
                <span className="checkbox">
                  <input type="checkbox" />
                </span>
                <span className="login__input-title">Remember me</span>
              </div>
              <div>
                <p className="login__input-rempass">
                  <Link to='/forgot-password'>Forgot Password?</Link>
                </p>
              </div>
            </div>
            <button className="form-button">Login</button>
            <div className="text-center">
              <p className="login__input-rempass">or continue with</p>
            </div>
            <br />
            <div className="text-center">
              <span>
                <img src={fb} alt="" />
              </span>
              <span>
                <img src={apple} alt="" />
              </span>
              <span>
                <img src={google} alt="" />
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="cont2">
        <p className="login__phone">+88 596 782 483</p>
        <img src={saly} alt="" className="login__image" />
        <div className="login__signin">
          <h1>Sign in to name</h1>
          <p className="login__lorem">Lorem Ipsum is simply</p>
        </div>
      </div>
    </Card>
  );
};

export default Login;
