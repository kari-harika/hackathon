import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const StockManagement = () => {
  const [stock, setStock] = useState([
    { id: 1, name: "SIM Cards", quantity: 500, category: "Accessories" },
    { id: 2, name: "Routers", quantity: 150, category: "Hardware" },
    { id: 3, name: "Modems", quantity: 200, category: "Hardware" },
    { id: 4, name: "Fiber Cables", quantity: 1000, category: "Cables" },
    { id: 5, name: "WiFi Adapters", quantity: 300, category: "Accessories" },
  ]);
  const [filter, setFilter] = useState("");
  const [newItem, setNewItem] = useState({ name: "", quantity: "", category: "" });

  const navigate = useNavigate();  // Initialize useNavigate hook for redirection

  // Handle Add Stock
  const handleAddStock = () => {
    if (newItem.name && newItem.quantity && newItem.category) {
      const quantity = parseInt(newItem.quantity);
      if (quantity <= 0) {
        alert("Quantity must be a positive number.");
        return;
      }

      setStock((prevStock) => [
        ...prevStock,
        {
          id: prevStock.length + 1,
          name: newItem.name,
          quantity: quantity,
          category: newItem.category,
        },
      ]);
      setNewItem({ name: "", quantity: "", category: "" }); // Reset form
    } else {
      alert("Please fill in all fields before adding a new item.");
    }
  };

  // Handle Remove Item with Confirmation
  const handleRemoveItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      setStock((prevStock) => prevStock.filter((item) => item.id !== id));
    }
  };

  // Handle Logout and Redirect to Login Page
  const handleLogout = () => {
    // Logic to clear session or token
    // localStorage.removeItem("userSession");
    alert("You have been logged out.");
    navigate("/");  // Redirect to login page
  };

  // Filtered Stock Items
  const filteredStock = stock.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Staff Panel: Stock Management</h1>

      {/* Logout Button */}
      <div style={styles.logoutSection}>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>

      {/* Filter Section */}
      <div style={styles.filterSection}>
        <input
          type="text"
          placeholder="Search stock items..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.filterInput}
        />
      </div>

      {/* Stock Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Item</th>
            <th style={styles.tableHeader}>Category</th>
            <th style={styles.tableHeader}>Quantity</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStock.map((item) => (
            <tr key={item.id}>
              <td style={styles.tableCell}>{item.name}</td>
              <td style={styles.tableCell}>{item.category}</td>
              <td style={styles.tableCell}>{item.quantity}</td>
              <td style={styles.tableCell}>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  style={styles.removeButton}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Item Section */}
      <div style={styles.addSection}>
        <h2 style={styles.subTitle}>Add New Stock Item</h2>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          style={styles.inputField}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          style={styles.inputField}
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          style={styles.inputField}
        />
        <button onClick={handleAddStock} style={styles.addButton}>
          Add Item
        </button>
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "90%",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  logoutSection: {
    textAlign: "right",
    marginBottom: "20px",
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  filterSection: {
    marginBottom: "20px",
    textAlign: "center",
  },
  filterInput: {
    padding: "10px",
    fontSize: "16px",
    width: "50%",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    textAlign: "left",
    padding: "10px",
    backgroundColor: "#16a085",
    color: "#fff",
    fontWeight: "bold",
  },
  tableCell: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  addSection: {
    textAlign: "center",
  },
  subTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#34495e",
  },
  inputField: {
    padding: "10px",
    fontSize: "16px",
    margin: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "200px",
  },
  addButton: {
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default StockManagement;
