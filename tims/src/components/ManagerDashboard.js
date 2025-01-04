import React, { useState } from "react";
import { FaProductHunt, FaTruck, FaBoxes } from "react-icons/fa"; // Icons for sidebar
import ProductManagement from "../sections/ProductManagement";
import SupplierManagement from "../sections/SupplierManagement";
import StockManagement from "../sections/StockManagement";

const ManagerDashboard = () => {
  const [activeSection, setActiveSection] = useState("products");

  const renderSection = () => {
    switch (activeSection) {
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
    <div style={managerDashboardStyles.container}>
      {/* Sidebar */}
      <div style={managerDashboardStyles.sidebar}>
        <h2 style={managerDashboardStyles.sidebarTitle}>Manager Panel</h2>
        <nav>
          <button
            onClick={() => setActiveSection("products")}
            style={getManagerButtonStyle(activeSection === "products")}
          >
            <FaProductHunt style={buttonIconStyle} />
            Manage Products
          </button>
          <button
            onClick={() => setActiveSection("suppliers")}
            style={getManagerButtonStyle(activeSection === "suppliers")}
          >
            <FaTruck style={buttonIconStyle} />
            Manage Suppliers
          </button>
          <button
            onClick={() => setActiveSection("stock")}
            style={getManagerButtonStyle(activeSection === "stock")}
          >
            <FaBoxes style={buttonIconStyle} />
            Manage Stock
          </button>
        </nav>
      </div>

      {/* Content */}
      <div style={managerDashboardStyles.content}>{renderSection()}</div>
    </div>
  );
};

// Manager Dashboard Styling
const managerDashboardStyles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    flexDirection: "row",
  },
  sidebar: {
    width: "250px",
    background: "#16a085",
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
  },
};

// Manager Sidebar Button Style
const getManagerButtonStyle = (isActive) => ({
  background: isActive ? "#1abc9c" : "transparent",
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
});

const buttonIconStyle = {
  marginRight: "10px",
  fontSize: "20px",
};

export default ManagerDashboard;
