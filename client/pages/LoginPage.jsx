import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="login-page">
      <div className="left-col">
        <div className="login-container">
          <div className="logo">
            <h2>Proof Attendance</h2>
          </div>
          <div className="title">
            <h2>Welcome Back!</h2>
            <p>Sync your meetings and track attendance automatically.</p>
          </div>
          <div className="nav">
            <nav>
              <ul>
                <li
                  onClick={toggleActive}
                  className={active ? "nav-active" : ""}
                >
                  Log In
                </li>
                <li
                  onClick={toggleActive}
                  className={!active ? "nav-active" : ""}
                >
                  Sign Up
                </li>
              </ul>
            </nav>
          </div>
          <form action="submit" method="post">
            <div className="email-container">
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" id="email" />
            </div>

            <div className="password-container">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>

            <div className="forgot-password-container">
              <div className="remember-me">
                <input type="checkbox" name="remember-me" id="remember-me" />{" "}
                <span>Remember me</span>
              </div>
              <Link>Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="right-col"></div>
    </div>
  );
}

export default LoginPage;
