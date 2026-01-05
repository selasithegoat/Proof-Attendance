import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../src/components/ButtonCompnent/ButtonComponent";
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
              <input
                type="text"
                name="email"
                id="email"
                placeholder="name@mail.com"
              />
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#666666"
              >
                <path d="M184.62-200q-27.62 0-46.12-18.5Q120-237 120-264.62v-430.76q0-27.62 18.5-46.12Q157-760 184.62-760h590.76q27.62 0 46.12 18.5Q840-723 840-695.38v430.76q0 27.62-18.5 46.12Q803-200 775.38-200H184.62ZM480-475.38l320-209.24L787.69-720 480-520 172.31-720 160-684.62l320 209.24Z" />
              </svg>
            </div>

            <div className="password-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#666666"
              >
                <path d="M264.62-120q-26.66 0-45.64-18.98T200-184.62v-350.76q0-26.66 18.98-45.64T264.62-600H320v-80q0-66.85 46.58-113.42Q413.15-840 480-840t113.42 46.58Q640-746.85 640-680v80h55.38q26.66 0 45.64 18.98T760-535.38v350.76q0 26.66-18.98 45.64T695.38-120H264.62ZM480-300q25.31 0 42.65-17.35Q540-334.69 540-360t-17.35-42.65Q505.31-420 480-420t-42.65 17.35Q420-385.31 420-360t17.35 42.65Q454.69-300 480-300ZM360-600h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
              </svg>
            </div>

            <div className="forgot-password-container">
              <div className="remember-me">
                <input type="checkbox" name="remember-me" id="remember-me" />{" "}
                <span>Remember me</span>
              </div>
              <Link className="forgot-password">Forgot password?</Link>
            </div>
            <div className="submit-btn">
              <Button variant="primary" className="btn--lg sign-in-btn">
                Sign In
              </Button>
            </div>
          </form>
          <div className="third-party-login">
            <div className="line-separator">
              <p>Or continue with</p>
            </div>
            <div className="third-party-login-btns">
              <Button variant="primary" size="md" className="google-login">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4062_36866)">
                    <path
                      d="M24.2407 12.3791C24.2407 11.5704 24.1624 10.7356 24.032 9.953H12.7363V14.5704H19.2059C18.945 16.0574 18.0842 17.3617 16.8059 18.1965L20.6668 21.1965C22.9363 19.0834 24.2407 16.0052 24.2407 12.3791Z"
                      fill="#4280EF"
                    />
                    <path
                      d="M12.7347 24.0661C15.9695 24.0661 18.6825 22.9965 20.6651 21.1704L16.8043 18.1965C15.7347 18.9269 14.3521 19.3443 12.7347 19.3443C9.60428 19.3443 6.9695 17.2313 6.00428 14.4139L2.03906 17.4661C4.07385 21.5095 8.19558 24.0661 12.7347 24.0661Z"
                      fill="#34A353"
                    />
                    <path
                      d="M6.00453 14.3878C5.50888 12.9008 5.50888 11.2834 6.00453 9.79646L2.03932 6.7182C0.343665 10.1095 0.343665 14.1008 2.03932 17.466L6.00453 14.3878Z"
                      fill="#F6B704"
                    />
                    <path
                      d="M12.7347 4.86602C14.4304 4.83993 16.0999 5.49211 17.326 6.66602L20.7434 3.22254C18.5782 1.18776 15.7086 0.0921052 12.7347 0.118192C8.19558 0.118192 4.07385 2.67471 2.03906 6.71819L6.00428 9.79646C6.9695 6.95298 9.60428 4.86602 12.7347 4.86602Z"
                      fill="#E54335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4062_36866">
                      <rect
                        width="23.4783"
                        height="24"
                        fill="white"
                        transform="translate(0.761719 0.0921631)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Google
              </Button>
              <Button variant="primary" size="md" className="microsoft-login">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4083_2342)">
                    <path
                      d="M11.6679 11.4984H0.261719V0.0921936H11.6679V11.4984Z"
                      fill="#F1511B"
                    />
                    <path
                      d="M24.2674 11.4984H12.8613V0.0922241H24.2674V11.4984Z"
                      fill="#80CC28"
                    />
                    <path
                      d="M11.6676 24.0924H0.261719V12.6862H11.6676V24.0924Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M24.2674 24.0926H12.8613V12.6864H24.2674V24.0926Z"
                      fill="#FBBC09"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4083_2342">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.261719 0.0921631)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Microsoft
              </Button>
            </div>
          </div>
          <div className="contact-support">
            <p>
              Need help?{" "}
              <Link className="contact-support-link">Contact Support</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="right-col">
        <div className="col-info">
          <h2>Automated Attendance Tracking for Mordern Teams</h2>
          <p>
            Seamlessly integrate Zoom, Google Meet, and Microsoft Teams to
            capture participant data instantly
          </p>

          <div className="info-pill">
            <img src="../public" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
