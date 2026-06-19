import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  const orderId = "NM-" + Math.floor(Math.random() * 1000000);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>✅</div>

        <h1 style={styles.title}>Order Placed Successfully!</h1>
        <p style={styles.subtitle}>
          Thank you for shopping with NeoMart
        </p>

        <div style={styles.orderBox}>
          <p>Order ID</p>
          <h3>{orderId}</h3>
        </div>

        <button
          style={styles.button}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

        <button
          style={styles.secondaryBtn}
          onClick={() => navigate("/profile")}
        >
          View Profile
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
    maxWidth: "450px",
    textAlign: "center",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
    color: "#fff"
  },

  icon: {
    fontSize: "60px",
    marginBottom: "10px"
  },

  title: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#cbd5e1",
    marginBottom: "20px"
  },

  orderBox: {
    background: "rgba(255,255,255,0.1)",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "25px"
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

  secondaryBtn: {
    width: "100%",
    padding: "12px",
    border: "1px solid #38bdf8",
    borderRadius: "10px",
    background: "transparent",
    color: "#38bdf8",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default OrderSuccess;