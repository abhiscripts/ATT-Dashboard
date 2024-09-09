import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    // Regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // const response = await fetch('/exec', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // });

    try {
      google?.script.run
        .withSuccessHandler((response) => {
          console.log("resp", response);
          setMessage("");
          login();
          navigate("/dashboard");
        })
        .withFailureHandler(() => {
          setMessage(
            "Your email is not registered with ATT directory. Please reach out to the committee."
          );
        })
        .withLogger(function (e) {
          console.warn(`This warning has been generated ${e}`);
        })
        .validateEmail(email);
    } catch (e) {
      setMessage(
        "Your email is not registered with ATT directory. Please reach out to the committee."
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <p className="welcome-message">
          Welcome to the Akshaya Temple Tree Dashboard
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(""); // Reset error when user types
          }}
        />
        {emailError && <p className="error">{emailError}</p>}

        <button onClick={handleLogin}>Login</button>

        {message && <p className="error">{message}</p>}

        <div className="footer">
          <p>
            Need help?{" "}
            <a href="mailto:akshayatempletree@gmail.com">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
