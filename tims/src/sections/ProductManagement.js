import React, { useState } from "react";

const ProductManagement = () => {
  // Sample data for products
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", category: "Category 1", stockLevel: 50, reorderPoint: 10 },
    { id: 2, name: "Product B", category: "Category 2", stockLevel: 30, reorderPoint: 5 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    stockLevel: "",
    reorderPoint: "",
  });

  const [categories] = useState(["Category 1", "Category 2", "Category 3"]);

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.stockLevel || !newProduct.reorderPoint) {
      alert("Please fill in all fields.");
      return;
    }

    setProducts([
      ...products,
      {
        ...newProduct,
        id: products.length + 1,  // Auto-increment the product ID
      },
    ]);
    setNewProduct({ name: "", category: "", stockLevel: "", reorderPoint: "" });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdateProduct = (id) => {
    const productToUpdate = products.find((product) => product.id === id);
    setNewProduct({ ...productToUpdate });
  };

  const handleStockTransaction = (id, type) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              stockLevel: type === "in" ? product.stockLevel + 1 : product.stockLevel - 1,
            }
          : product
      )
    );
  };

  return (
    <div>
      <h2>Manage Products</h2>
      
      {/* Add New Product Form */}
      <div>
        <h3>Add/Edit Product</h3>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <select
          name="category"
          value={newProduct.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="stockLevel"
          placeholder="Stock Level"
          value={newProduct.stockLevel}
          onChange={handleChange}
        />
        <input
          type="number"
          name="reorderPoint"
          placeholder="Reorder Point"
          value={newProduct.reorderPoint}
          onChange={handleChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {/* Product List */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Category</th>
            <th style={headerStyle}>Stock Level</th>
            <th style={headerStyle}>Reorder Point</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={dataStyle}>{product.id}</td>
              <td style={dataStyle}>{product.name}</td>
              <td style={dataStyle}>{product.category}</td>
              <td style={dataStyle}>{product.stockLevel}</td>
              <td style={dataStyle}>{product.reorderPoint}</td>
              <td>
                <button
                  style={actionButton}
                  onClick={() => handleUpdateProduct(product.id)}
                >
                  Edit
                </button>
                <button
                  style={actionButton}
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
                <button
                  style={actionButton}
                  onClick={() => handleStockTransaction(product.id, "in")}
                >
                  Stock In
                </button>
                <button
                  style={actionButton}
                  onClick={() => handleStockTransaction(product.id, "out")}
                >
                  Stock Out
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Table Styles
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const headerStyle = {
  textAlign: "left",
  padding: "10px",
  backgroundColor: "#f1f1f1",
};

const dataStyle = {
  padding: "10px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const actionButton = {
  padding: "5px 10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
  marginRight: "5px",
};

export default ProductManagement;
