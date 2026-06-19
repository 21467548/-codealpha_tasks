function Register() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>
          Join TechMart and start shopping today
        </p>

        <input
          type="text"
          placeholder="Full Name"
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email Address"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <button style={styles.button}>
          Register
        </button>

        <p style={styles.loginText}>
          Already have an account?
          <span style={styles.link}> Login</span>
        </p>
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
    maxWidth: "420px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 15px 35px rgba(0,0,0,0.35)"
  },

  title: {
    color: "#fff",
    marginBottom: "10px",
    fontSize: "2rem",
    fontWeight: "700"
  },

  subtitle: {
    color: "#cbd5e1",
    marginBottom: "25px"
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

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background:
      "linear-gradient(135deg,#06b6d4,#2563eb)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    transition: "0.3s"
  },

  loginText: {
    marginTop: "20px",
    color: "#cbd5e1",
    fontSize: "14px"
  },

  link: {
    color: "#38bdf8",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Register;