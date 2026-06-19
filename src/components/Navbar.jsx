// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav style={styles.nav}>
//       <h2 style={styles.logo}>🛒 TechMart</h2>

//       <div style={styles.links}>
//         <Link to="/" style={styles.link}>Home</Link>
//         <Link to="/cart" style={styles.link}>Cart</Link>
//         <Link to="/login" style={styles.link}>Login</Link>
//         <Link to="/register" style={styles.link}>Register</Link>
//         <Link to="/checkout" style={styles.link}>Checkout</Link>
//         <Link to="/admin" style={styles.link}>Admin</Link>
//       </div>
//     </nav>
//   );
// }

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "15px 30px",
//     background: "#111",
//     color: "white"
//   },
//   logo: {
//     margin: 0
//   },
//   links: {
//     display: "flex",
//     gap: "15px"
//   },
//   link: {
//     color: "white",
//     textDecoration: "none",
//     fontWeight: "bold"
//   }
// };

// export default Navbar;


import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo-section">
          <h1 className="logo">
            <span>🛒</span> TechMart
          </h1>
        </div>

        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/checkout" className="nav-link">Checkout</Link>

          <Link to="/admin" className="admin-btn">
            Admin Panel
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;