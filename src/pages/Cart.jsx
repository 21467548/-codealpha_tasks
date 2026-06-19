function Cart() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Your Shopping Cart</h1>

      <div style={styles.card}>
        <div style={styles.productSection}>
          <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
            alt="iPhone"
            style={styles.image}
          />

          <div>
            <h3 style={styles.productName}>iPhone 14 Pro</h3>
            <p style={styles.description}>
              Latest Apple Smartphone with Premium Features
            </p>
            <h2 style={styles.price}>$1200</h2>
          </div>
        </div>

        <button style={styles.removeBtn}>
          Remove
        </button>
      </div>

      <div style={styles.summary}>
        <h2>Total: $1200</h2>

        <button style={styles.checkoutBtn}>
          Proceed To Checkout
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
    color: "#fff"
  },

  title: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5rem",
    fontWeight: "700"
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },

  productSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },

  image: {
    width: "130px",
    height: "130px",
    objectFit: "cover",
    borderRadius: "15px"
  },

  productName: {
    marginBottom: "10px",
    fontSize: "1.5rem"
  },

  description: {
    color: "#cbd5e1",
    marginBottom: "10px"
  },

  price: {
    color: "#38bdf8"
  },

  removeBtn: {
    padding: "12px 25px",
    border: "none",
    borderRadius: "10px",
    background: "#ef4444",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px"
  },

  summary: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },

  checkoutBtn: {
    marginTop: "15px",
    padding: "14px 30px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#06b6d4,#2563eb)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Cart;