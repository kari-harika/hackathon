import React, { useState } from "react";

const SupplierManagement = () => {
  // Sample data for suppliers
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "Supplier A", contact: "123-456-7890", orderHistory: [{ orderId: 101, status: "Completed" }], currentOrderStatus: "Pending" },
    { id: 2, name: "Supplier B", contact: "987-654-3210", orderHistory: [{ orderId: 102, status: "In Progress" }], currentOrderStatus: "Completed" },
  ]);

  const [newSupplier, setNewSupplier] = useState({
    name: "",
    contact: "",
    currentOrderStatus: "",
  });

  const [orderStatus] = useState(["Pending", "In Progress", "Completed"]);

  const handleChange = (e) => {
    setNewSupplier({
      ...newSupplier,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSupplier = () => {
    if (!newSupplier.name || !newSupplier.contact || !newSupplier.currentOrderStatus) {
      alert("Please fill in all fields.");
      return;
    }

    setSuppliers([
      ...suppliers,
      {
        ...newSupplier,
        id: suppliers.length + 1,  // Auto-increment the supplier ID
        orderHistory: [],
      },
    ]);
    setNewSupplier({ name: "", contact: "", currentOrderStatus: "" });
  };

  const handleDeleteSupplier = (id) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
  };

  const handleUpdateSupplier = (id) => {
    const supplierToUpdate = suppliers.find((supplier) => supplier.id === id);
    setNewSupplier({ ...supplierToUpdate });
  };

  const handleAddOrderHistory = (id, status) => {
    setSuppliers(
      suppliers.map((supplier) =>
        supplier.id === id
          ? {
              ...supplier,
              orderHistory: [...supplier.orderHistory, { orderId: supplier.orderHistory.length + 101, status }],
            }
          : supplier
      )
    );
  };

  return (
    <div>
      <h2>Manage Suppliers</h2>

      {/* Add New Supplier Form */}
      <div>
        <h3>Add/Edit Supplier</h3>
        <input
          type="text"
          name="name"
          placeholder="Supplier Name"
          value={newSupplier.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Information"
          value={newSupplier.contact}
          onChange={handleChange}
        />
        <select
          name="currentOrderStatus"
          value={newSupplier.currentOrderStatus}
          onChange={handleChange}
        >
          <option value="">Select Order Status</option>
          {orderStatus.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button onClick={handleAddSupplier}>Add Supplier</button>
      </div>

      {/* Supplier List */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Contact</th>
            <th style={headerStyle}>Current Order Status</th>
            <th style={headerStyle}>Order History</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td style={dataStyle}>{supplier.id}</td>
              <td style={dataStyle}>{supplier.name}</td>
              <td style={dataStyle}>{supplier.contact}</td>
              <td style={dataStyle}>{supplier.currentOrderStatus}</td>
              <td style={dataStyle}>
                <ul>
                  {supplier.orderHistory.map((order, index) => (
                    <li key={index}>Order #{order.orderId} - {order.status}</li>
                  ))}
                </ul>
              </td>
              <td>
                <button
                  style={actionButton}
                  onClick={() => handleUpdateSupplier(supplier.id)}
                >
                  Edit
                </button>
                <button
                  style={actionButton}
                  onClick={() => handleDeleteSupplier(supplier.id)}
                >
                  Delete
                </button>
                <button
                  style={actionButton}
                  onClick={() => handleAddOrderHistory(supplier.id, "In Progress")}
                >
                  Add Order - In Progress
                </button>
                <button
                  style={actionButton}
                  onClick={() => handleAddOrderHistory(supplier.id, "Completed")}
                >
                  Add Order - Completed
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

export default SupplierManagement;
