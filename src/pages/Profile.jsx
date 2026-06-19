import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  // Dummy user (later replace with backend/JWT data)
  const user = {
    name: "Anusha Qadir",
    email: "anusha@example.com",
    joined: "Jan 2026",
    orders: 12
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.avatar}>👤</div>

        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.email}>{user.email}</p>

        <div style={styles.stats}>
          <div style={styles.statBox}>
            <h3>{user.orders}</h3>
            <p>Orders</p>
          </div>

          <div style={styles.statBox}>
            <h3>{user.joined}</h3>
            <p>Joined</p>
          </div>
        </div>

        <button
          style={styles.button}
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>

        <button
          style={styles.logoutBtn}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
    padding: "20px"
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "40px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 15px 35px rgba(0,0,0,0.35)"
  },

  avatar: {
    fontSize: "60px",
    marginBottom: "10px"
  },

  name: {
    fontSize: "22px",
    fontWeight: "700"
  },

  email: {
    color: "#cbd5e1",
    marginBottom: "20px"
  },

  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "25px"
  },

  statBox: {
    background: "rgba(255,255,255,0.1)",
    padding: "15px",
    borderRadius: "10px",
    width: "45%"
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#06b6d4,#2563eb)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "10px"
  },

  logoutBtn: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ef4444",
    borderRadius: "10px",
    background: "transparent",
    color: "#ef4444",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Profile;