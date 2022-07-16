import React from 'react'
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import "./Form.css";
import saly from "../assets/Saly.png";

const Register = () => {
  return (
    <Card className="login__card">
      <div className="cont1">
        <h3>Your Logo</h3>
        <div className="login__form">
          <h2>Sign up</h2>
          <p>If you already have an account register</p>
          <p>
            You can{" "}
            <span className="bold">
              <Link to="/">Login here !</Link>
            </span>
          </p>

          <form>
            <p className="reg__input-title">Email</p>
            <input
              className="login__input"
              type="email"
              placeholder="Enter your email address"
            />
            <p className="reg__input-title">Username</p>
            <input
              className="login__input"
              type="text"
              placeholder="Enter your User name"
            />
            <p className="reg__input-title">Password</p>
            <input
              className="login__input"
              type="password"
              placeholder="Enter your Password"
            />
            <p className="reg__input-title">Confirm Password</p>
            <input
              className="login__input"
              type="password"
              placeholder="Confirm your Password"
            />
            
            <button className="form-button">Register</button>
            <br />
          </form>
        </div>
      </div>
      <div className="cont2">
        <p className="login__phone">+88 596 782 483</p>
        <img src={saly} alt="" className="login__image" />
        <div className="login__signin">
          <h1>Sign up to name</h1>
          <p className="login__lorem">Lorem Ipsum is simply</p>
        </div>
      </div>
    </Card>
  );
}

export default Register