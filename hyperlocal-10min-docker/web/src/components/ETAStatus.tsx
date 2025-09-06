import React, { useState } from "react";

const ETAStatus: React.FC = () => {
  const [eta, setEta] = useState(10);

  const updateETA = () => {
    // Simulate fetching updated ETA
    const newETA = Math.floor(Math.random() * 15) + 5;
    setEta(newETA);
  };

  return (
    <div className="eta-status-container" style={{
      padding: "2rem",
      margin: "1rem",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      borderRadius: "12px",
      color: "white",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
    }}>
      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>ETA Status</h2>
      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        Estimated arrival time: <strong>{eta} minutes</strong>
      </p>
      <button
        onClick={updateETA}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          background: "#ff6b6b",
          color: "white",
          fontWeight: "bold",
          transition: "0.3s"
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#ff8787")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#ff6b6b")}
      >
        Update ETA
      </button>
    </div>
  );
};

export default ETAStatus;
