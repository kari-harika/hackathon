import React, { useState } from "react";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [userRole, setUserRole] = useState("admin"); 

  const handleToggleForm = () => setIsLogin(!isLogin);

  const handleRoleChange = (e) => setUserRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLogin ? "Logging in" : "Signing up"} as ${userRole}`);
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
        <h2 style={{ marginBottom: "20px" }}>{isLogin ? "Login" : "Signup"} Page</h2>

        <select
          value={userRole}
          onChange={handleRoleChange}
          style={{
            marginBottom: "20px",
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ced4da",
          }}
        >
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
          <option value="manager">Manager</option>
        </select>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Email"
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
              required
              style={{
                padding: "10px",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ced4da",
              }}
            />
          </div>
          {!isLogin && (
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Full Name"
                required
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ced4da",
                }}
              />
            </div>
          )}
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
            onClick={handleToggleForm}
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
