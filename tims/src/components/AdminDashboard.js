import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from react-router-dom
import { FaUsers, FaProductHunt, FaTruck, FaBoxes, FaSignOutAlt } from "react-icons/fa"; // Importing Logout icon

import UserManagement from "../sections/UserManagement";
import ProductManagement from "../sections/ProductManagement";
import SupplierManagement from "../sections/SupplierManagement";
import StockManagement from "../sections/StockManagement"; // Import Stock Management section

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("users");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    // You can implement a real logout functionality here, e.g., clearing authentication tokens
    alert("Logged out successfully");
    navigate("/"); // Redirect to the login page (assuming the login page is at '/')
  };

  const renderSection = () => {
    switch (activeSection) {
      case "users":
        return <UserManagement />;
      case "products":
        return <ProductManagement />;
      case "suppliers":
        return <SupplierManagement />;
      case "stock": // Case for the new Stock Management section
        return <StockManagement />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div style={adminDashboardStyles.container}>
      {/* Sidebar */}
      <div style={adminDashboardStyles.sidebar}>
        <h2 style={adminDashboardStyles.sidebarTitle}>Admin Panel</h2>
        <nav>
          <button
            onClick={() => setActiveSection("users")}
            style={getAdminButtonStyle(activeSection === "users")}
          >
            <FaUsers style={buttonIconStyle} />
            Manage Users
          </button>
          <button
            onClick={() => setActiveSection("products")}
            style={getAdminButtonStyle(activeSection === "products")}
          >
            <FaProductHunt style={buttonIconStyle} />
            Manage Products
          </button>
          <button
            onClick={() => setActiveSection("suppliers")}
            style={getAdminButtonStyle(activeSection === "suppliers")}
          >
            <FaTruck style={buttonIconStyle} />
            Manage Suppliers
          </button>
          <button
            onClick={() => setActiveSection("stock")} // Add the new button for Stock Management
            style={getAdminButtonStyle(activeSection === "stock")}
          >
            <FaBoxes style={buttonIconStyle} />
            Manage Stock
          </button>
        </nav>
      </div>

      {/* Content */}
      <div style={adminDashboardStyles.content}>
        {/* Logout button in the top-right corner */}
        <button onClick={handleLogout} style={logoutButtonStyle}>
          <FaSignOutAlt style={buttonIconStyle} />
          Logout
        </button>

        {/* Render selected section */}
        {renderSection()}
      </div>
    </div>
  );
};

// Admin Dashboard Styling
const adminDashboardStyles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  sidebar: {
    width: "250px",
    background: "#34495e",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "30px 20px",
    boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.1)",
    transition: "width 0.3s ease",
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
    position: "relative", // Ensure the content area allows absolute positioning for the logout button
  },
};

// Admin Sidebar Button Style
const getAdminButtonStyle = (isActive) => ({
  background: isActive ? "#2ecc71" : "transparent",
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
  display: "flex",
  alignItems: "center",
  boxShadow: isActive ? "inset 3px 0 rgba(46, 204, 113, 0.7)" : "none",
});

// Icon Style for Buttons
const buttonIconStyle = {
  marginRight: "10px",
  fontSize: "20px",
};

// Logout Button Style
const logoutButtonStyle = {
  position: "absolute", // Position the button absolutely
  top: "30px", // Top-right position
  right: "20px", // Top-right position
  background: "#e74c3c",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  zIndex: 10, // Ensure it stays on top of content
};

export default AdminDashboard;
