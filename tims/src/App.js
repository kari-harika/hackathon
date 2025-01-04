import React from "react";
import LoginSignupPage from "./components/LoginSignupPage"; 
import AdminDashboard from "./components/AdminDashboard";
import ManagerDashboard from "./components/ManagerDashboard";
import Authentication from "./components/Authentication";
const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Telecom IMS</h1>
      <Authentication />
      <ManagerDashboard/>

    </div>
  );
};

export default App;
