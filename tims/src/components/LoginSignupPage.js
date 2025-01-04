import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials for simplicity
  const credentials = {
    admin: { email: "admin@example.com", password: "admin123" },
    manager: { email: "manager@example.com", password: "manager123" },
    staff: { email: "staff@example.com", password: "staff123" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials for each role
    if (
      email === credentials.admin.email &&
      password === credentials.admin.password
    ) {
      navigate("/admin"); // Redirect to Admin Panel
    } else if (
      email === credentials.manager.email &&
      password === credentials.manager.password
    ) {
      navigate("/manager"); // Redirect to Manager Panel
    } else if (
      email === credentials.staff.email &&
      password === credentials.staff.password
    ) {
      navigate("/staff"); // Redirect to Staff Panel
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          {isLogin ? "Login" : "Signup"} Page
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "10px",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: "10px",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: "none",
              border: "none",
              color: "#007BFF",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Switch to Signup" : "Switch to Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
