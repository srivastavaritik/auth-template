import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setupWorker, rest } from "msw";
import Card from "../components/Card/Card";
import saly from "../assets/Saly.png";
import "./Form.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const worker = setupWorker(
    rest.post("http://localhost:5000/api/login", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          email: email,
        })
      );
    })
  );
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log({email});
    worker.start();
    setEmail("");
  };

  return (
    <Card className="login__card">
      <div className="cont1">
        <h3>Your Logo</h3>
        <div className="login__form">
          <h2>Reset Your Password</h2>

          
          <p>
            Already have an account? -{" "}
            <span className="bold">
              <Link to="/">Login here!</Link>
            </span>
          </p>
          <br />
          <p>Forgot Password?</p>
          <form onSubmit={formSubmitHandler}>
            <p className="login__input-title">Email</p>
            <input
            value={email}
            onChange={emailHandler}
              className="login__input"
              type="email"
              placeholder="&#xF0e0; Enter your email address"
            />
            <button className="form-button" type="submit">Get Password</button>
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
};

export default ForgotPassword;
