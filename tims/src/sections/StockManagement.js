import React, { useState } from "react";

const StockManagement = () => {
  const [stock, setStock] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("Electronics");
  const [search, setSearch] = useState("");

  // Function to add stock
  const handleAddStock = () => {
    if (productName && quantity > 0) {
      const newStockItem = { productName, quantity, category };
      setStock([newStockItem, ...stock]);
      setProductName("");
      setQuantity(0);
    } else {
      alert("Please enter a valid product name and quantity.");
    }
  };

  // Function to remove stock
  const handleRemoveStock = (productName) => {
    setStock(stock.filter((item) => item.productName !== productName));
  };

  // Filter stock based on search
  const filteredStock = stock.filter(
    (item) =>
      item.productName.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Handling search input
  const handleSearchChange = (e) => setSearch(e.target.value);

  return (
    <div>
      <h2>Manage Stock</h2>

      {/* Search Bar */}
      <div style={searchStyle}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search products by name or category"
          style={searchInputStyle}
        />
      </div>

      {/* Add Stock Form */}
      <div style={formStyle}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          style={inputStyle}
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          style={inputStyle}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={selectStyle}
        >
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Furniture">Furniture</option>
        </select>
        <button onClick={handleAddStock} style={buttonStyle}>
          Add Stock
        </button>
      </div>

      {/* Stock List */}
      <div style={stockListStyle}>
        <h3>Current Stock:</h3>
        {filteredStock.length === 0 ? (
          <p>No stock available.</p>
        ) : (
          <ul style={listStyle}>
            {filteredStock.map((item, index) => (
              <li key={index} style={listItemStyle}>
                <strong>{item.productName}</strong> - {item.quantity}{" "}
                <span style={categoryStyle}>{item.category}</span>
                <button
                  onClick={() => handleRemoveStock(item.productName)}
                  style={removeButtonStyle}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Styles
const formStyle = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  padding: "10px",
  margin: "5px",
  width: "200px",
  borderRadius: "5px",
  border: "1px solid #ced4da",
};

const selectStyle = {
  padding: "10px",
  margin: "5px",
  width: "210px",
  borderRadius: "5px",
  border: "1px solid #ced4da",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#2ecc71",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const searchStyle = {
  marginBottom: "20px",
};

const searchInputStyle = {
  padding: "10px",
  width: "300px",
  borderRadius: "5px",
  border: "1px solid #ced4da",
};

const stockListStyle = {
  marginTop: "20px",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
};

const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
  backgroundColor: "#f8f9fa",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const categoryStyle = {
  fontSize: "12px",
  color: "#7f8c8d",
};

const removeButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "5px 10px",
};

export default StockManagement;
