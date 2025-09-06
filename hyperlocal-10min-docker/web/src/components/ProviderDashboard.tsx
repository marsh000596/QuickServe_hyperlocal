import React from "react";

interface Job {
  id: number;
  name: string;
  status: string;
  rating: number;
}

const jobs: Job[] = [
  { id: 1, name: "Plumbing Fix", status: "In Progress", rating: 4.5 },
  { id: 2, name: "Electric Wiring", status: "Pending", rating: 4.8 },
  { id: 3, name: "Math Tutor", status: "Completed", rating: 5.0 },
];

const ProviderDashboard: React.FC = () => {
  return (
    <div style={{
      padding: "2rem",
      margin: "1rem",
      borderRadius: "12px",
      background: "linear-gradient(to right, #f7971e, #ffd200)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
    }}>
      <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>Provider Dashboard</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", color: "#333" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", textAlign: "left" }}>Job</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} style={{ borderTop: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>{job.name}</td>
              <td style={{ padding: "10px" }}>{job.status}</td>
              <td style={{ padding: "10px" }}>{job.rating} ⭐</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProviderDashboard;
