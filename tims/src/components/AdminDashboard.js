import React, { useState } from "react";
import UserManagement from "../sections/UserManagement";
import ProductManagement from "../sections/ProductManagement";
import SupplierManagement from "../sections/SupplierManagement";
import StockManagement from "../sections/StockManagement";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("users");

  const renderSection = () => {
    switch (activeSection) {
      case "users":
        return <UserManagement />;
      case "products":
        return <ProductManagement />;
      case "suppliers":
        return <SupplierManagement />;
      case "stock":
        return <StockManagement />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div style={dashboardStyles.container}>
      {/* Sidebar */}
      <div style={dashboardStyles.sidebar}>
        <h2 style={dashboardStyles.sidebarTitle}>Admin Panel</h2>
        <nav>
          <button
            onClick={() => setActiveSection("users")}
            style={getButtonStyle(activeSection === "users")}
          >
            Manage Users
          </button>
          <button
            onClick={() => setActiveSection("products")}
            style={getButtonStyle(activeSection === "products")}
          >
            Manage Products
          </button>
          <button
            onClick={() => setActiveSection("suppliers")}
            style={getButtonStyle(activeSection === "suppliers")}
          >
            Manage Suppliers
          </button>
          <button
            onClick={() => setActiveSection("stock")}
            style={getButtonStyle(activeSection === "stock")}
          >
            Manage Stock
          </button>
        </nav>
      </div>

      {/* Content */}
      <div style={dashboardStyles.content}>{renderSection()}</div>
    </div>
  );
};

// Dashboard Styling
const dashboardStyles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  sidebar: {
    width: "250px",
    background: "#2c3e50",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "30px 20px",
    boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  sidebarTitle: {
    marginBottom: "30px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  content: {
    flex: 1,
    padding: "30px",
    background: "#ecf0f1",
  },
};

// Sidebar Button Style
const getButtonStyle = (isActive) => ({
  background: isActive ? "#2980b9" : "transparent",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  marginBottom: "15px",
  cursor: "pointer",
  textAlign: "left",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: "500",
  transition: "background 0.3s ease",
  width: "100%",
  boxShadow: isActive ? "inset 3px 0 0 0 rgba(41, 128, 185, 0.7)" : "none",
});

// Hover Effect for Sidebar Buttons
const hoverButtonStyle = {
  ":hover": {
    background: "#3498db",
  },
};

export default AdminDashboard;
