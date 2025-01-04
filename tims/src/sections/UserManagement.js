import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "x", email: "x@example.com" },
    { id: 2, name: "y", email: "y@example.com" },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>Manage Users</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Email</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={dataStyle}>{user.id}</td>
              <td style={dataStyle}>{user.name}</td>
              <td style={dataStyle}>{user.email}</td>
              <td>
                <button style={actionButton} onClick={() => handleDelete(user.id)}>
                  Delete
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
  textAlign: "left",  // Aligns text to the left for better readability
  padding: "10px",
  backgroundColor: "#f1f1f1",  // Optional: Adds background color to header for contrast
};

const dataStyle = {
  padding: "10px",
  textAlign: "left",  // Left-aligns the text in the cells
  borderBottom: "1px solid #ddd",  // Adds a light bottom border to separate rows
};

const actionButton = {
  padding: "5px 10px",
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
};

export default UserManagement;
