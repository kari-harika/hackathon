import React, { useState } from "react";
import "./Authentication.css";

function Authentication() { // Corrected to start with uppercase
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-in and sign-up
  const [credentials, setCredentials] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleAuth = () => {
    if (!isSignUp) {
      // Sign-in logic
      alert("Sign-in successful!");
    } else {
      // Sign-up logic
      alert("Account created successfully!");
      setIsSignUp(false); // Switch back to sign-in
    }
  };

  return (
    <div className="auth-container">
      <h1>Telecom Inventory Management System</h1>
      <div className="auth-box">
        {isSignUp ? (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Email or Phone"
              value={credentials.emailOrPhone}
              onChange={(e) =>
                setCredentials({ ...credentials, emailOrPhone: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </>
        )}
        <button onClick={handleAuth}>{isSignUp ? "Sign Up" : "Sign In"}</button>
        <p onClick={() => setIsSignUp(!isSignUp)} className="toggle-auth">
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
}

export default Authentication;