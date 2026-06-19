function AdminDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚙️ Admin Dashboard</h1>

      {/* Add Product Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>➕ Add Product</h2>

        <input
          placeholder="Product Name"
          style={styles.input}
        />

        <input
          placeholder="Price"
          style={styles.input}
        />

        <button style={styles.addBtn}>
          Add Product
        </button>
      </div>

      {/* Manage Products Card */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>🛠️ Manage Products</h2>

        <p style={styles.text}>
          Edit / Delete products will appear here
        </p>

        <button style={styles.manageBtn}>
          View All Products
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background:
      "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
    color: "#fff",
    textAlign: "center"
  },

  title: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    fontWeight: "800"
  },

  card: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "30px",
    borderRadius: "20px",

    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",

    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
    textAlign: "center"
  },

  cardTitle: {
    marginBottom: "20px",
    fontSize: "1.5rem"
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",

    borderRadius: "10px",
    border: "none",
    outline: "none",

    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: "15px"
  },

  addBtn: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",

    background: "linear-gradient(135deg,#06b6d4,#2563eb)",
    color: "#fff",

    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",

    transition: "0.3s"
  },

  manageBtn: {
    marginTop: "10px",
    width: "100%",
    padding: "14px",

    border: "none",
    borderRadius: "10px",

    background: "linear-gradient(135deg,#f97316,#ef4444)",
    color: "#fff",

    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer"
  },

  text: {
    color: "#cbd5e1",
    marginBottom: "10px"
  }
};

export default AdminDashboard;