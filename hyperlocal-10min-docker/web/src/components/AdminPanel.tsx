import React from "react";

const AdminPanel: React.FC = () => {
  return (
    <div style={{
      padding: "2rem",
      margin: "1rem",
      borderRadius: "12px",
      background: "linear-gradient(to right, #43cea2, #185a9d)",
      color: "white",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
    }}>
      <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Admin Panel</h2>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
        <li style={{ marginBottom: "10px", cursor: "pointer" }}>👤 Manage Users</li>
        <li style={{ marginBottom: "10px", cursor: "pointer" }}>🛠 Manage Services</li>
        <li style={{ marginBottom: "10px", cursor: "pointer" }}>⚙ System Settings</li>
      </ul>
    </div>
  );
};

export default AdminPanel;
