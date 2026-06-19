function Checkout() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🛍️ Checkout</h2>

        <p style={styles.subtitle}>
          Complete your order details
        </p>

        <input
          type="text"
          placeholder="Enter Delivery Address"
          style={styles.input}
        />

        <input
          type="tel"
          placeholder="Enter Phone Number"
          style={styles.input}
        />

        <button style={styles.button}>
          Place Order
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
    background:
      "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
    padding: "20px"
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
    textAlign: "center"
  },

  title: {
    color: "#fff",
    fontSize: "2rem",
    marginBottom: "10px",
    fontWeight: "700"
  },

  subtitle: {
    color: "#cbd5e1",
    marginBottom: "25px"
  },

  input: {
    width: "100%",
    padding: "15px",
    marginBottom: "18px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: "15px"
  },

  button: {
    width: "100%",
    padding: "15px",
    border: "none",
    borderRadius: "12px",
    background:
      "linear-gradient(135deg,#10b981,#059669)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 10px 25px rgba(16,185,129,0.4)"
  }
};

export default Checkout;