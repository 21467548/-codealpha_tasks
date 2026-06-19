import { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      alert(`✨ Welcome back! Logging in as ${email}`);
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    alert(`🔐 Connecting with ${provider}...`);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes floatNeo {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes slideInNeo {
          from { 
            opacity: 0; 
            transform: translateX(50px) scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
            border-color: rgba(0, 212, 255, 0.5);
          }
          50% { 
            box-shadow: 0 0 40px rgba(0, 212, 255, 0.6);
            border-color: rgba(0, 212, 255, 0.8);
          }
        }

        @keyframes rotateBg {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .cursor-glow {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0) 70%);
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .input-focus-glow {
          transition: all 0.3s ease;
        }

        .input-focus-glow:focus {
          transform: scale(1.02);
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.3);
        }

        .social-btn {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .social-btn:hover {
          transform: translateY(-2px) scale(1.05);
        }

        .login-card {
          animation: slideInNeo 0.6s ease-out;
        }

        ::-webkit-scrollbar {
          width: 0px;
        }
      `}} />

      <div id="cursor-glow" className="cursor-glow"></div>
      
      <div style={styles.container}>
        {/* Animated Background */}
        <div style={styles.animatedBg}>
          <div style={styles.gradientOrb1}></div>
          <div style={styles.gradientOrb2}></div>
          <div style={styles.gradientOrb3}></div>
          <div style={styles.gradientOrb4}></div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContainer}>
          {/* Left Side - Brand Section */}
          <div style={styles.brandSection}>
            <div style={styles.brandContent}>
              <div style={styles.logo}>
                <span style={styles.logoIcon}>⚡</span>
                <span style={styles.logoText}>NEO<span style={{color: "#00D4FF"}}>MART</span></span>
              </div>
              
              <div style={styles.tagline}>
                <div style={styles.chip}>
                  <span style={styles.liveDot}></span>
                  <span>WELCOME TO 2026</span>
                </div>
                <h1 style={styles.brandTitle}>
                  The Future of<br />
                  <span className="neon-text" style={styles.gradientText}>Digital Commerce</span>
                </h1>
                <p style={styles.brandDescription}>
                  Join the revolution of AI-powered shopping experience. 
                  Millions of users already trust NEOMART.
                </p>
              </div>

              <div style={styles.features}>
                <div style={styles.feature}>
                  <span style={styles.featureIcon}>🚀</span>
                  <div>
                    <h4>AI-Powered</h4>
                    <p>Smart recommendations</p>
                  </div>
                </div>
                <div style={styles.feature}>
                  <span style={styles.featureIcon}>🔒</span>
                  <div>
                    <h4>Bank-Level Security</h4>
                    <p>256-bit encryption</p>
                  </div>
                </div>
                <div style={styles.feature}>
                  <span style={styles.featureIcon}>⚡</span>
                  <div>
                    <h4>Instant Access</h4>
                    <p>One-click checkout</p>
                  </div>
                </div>
              </div>

              <div style={styles.testimonial}>
                <div style={styles.testimonialStars}>★★★★★</div>
                <p>"Best platform I've ever used! The AI recommendations are spot on."</p>
                <div style={styles.testimonialAuthor}>
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Avatar" style={styles.avatar} />
                  <div>
                    <strong>Sarah Johnson</strong>
                    <span>Tech Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div style={styles.formSection}>
            <div style={styles.formCard} className="login-card">
              <div style={styles.formHeader}>
                <h2 style={styles.formTitle}>Welcome Back</h2>
                <p style={styles.formSubtitle}>Sign in to continue your journey</p>
              </div>

              <form onSubmit={handleLogin} style={styles.form}>
                {/* Email Input */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>
                    <span>📧 Email Address</span>
                  </label>
                  <div style={styles.inputWrapper}>
                    <input
                      type="email"
                      placeholder="hello@neomart.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="input-focus-glow"
                      style={styles.input}
                    />
                    {email && <span style={styles.inputIcon}>✓</span>}
                  </div>
                </div>

                {/* Password Input */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>
                    <span>🔒 Password</span>
                  </label>
                  <div style={styles.inputWrapper}>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="input-focus-glow"
                      style={styles.input}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={styles.passwordToggle}
                    >
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>

                {/* Options */}
                <div style={styles.options}>
                  <label style={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={styles.checkbox}
                    />
                    <span>Remember me</span>
                  </label>
                  <a href="#" style={styles.forgotLink}>Forgot Password?</a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    ...styles.loginButton,
                    opacity: isLoading ? 0.7 : 1,
                    cursor: isLoading ? "not-allowed" : "pointer"
                  }}
                >
                  {isLoading ? (
                    <div style={styles.loader}>
                      <div style={styles.loaderDot}></div>
                      <div style={styles.loaderDot}></div>
                      <div style={styles.loaderDot}></div>
                    </div>
                  ) : (
                    "Login →"
                  )}
                </button>

                {/* Divider */}
                <div style={styles.divider}>
                  <span></span>
                  <span>OR</span>
                  <span></span>
                </div>

                {/* Social Login */}
                <div style={styles.socialButtons}>
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("Google")}
                    className="social-btn"
                    style={styles.socialBtn}
                  >
                    <span style={styles.socialIcon}>G</span>
                    <span>Continue with Google</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("Apple")}
                    className="social-btn"
                    style={styles.socialBtn}
                  >
                    <span style={styles.socialIcon}>🍎</span>
                    <span>Continue with Apple</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("GitHub")}
                    className="social-btn"
                    style={styles.socialBtn}
                  >
                    <span style={styles.socialIcon}>⌨️</span>
                    <span>Continue with GitHub</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <div style={styles.signupPrompt}>
                  <span>New to NEOMART? </span>
                  <a href="#" style={styles.signupLink}>Create an account</a>
                </div>
              </form>
            </div>

            {/* Footer Note */}
            <div style={styles.formFooter}>
              <p>By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0a0a0a",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    overflowX: "hidden"
  },
  animatedBg: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    zIndex: 0
  },
  gradientOrb1: {
    position: "absolute",
    top: "-20%",
    right: "-10%",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0) 70%)",
    borderRadius: "50%",
    animation: "floatNeo 8s ease-in-out infinite"
  },
  gradientOrb2: {
    position: "absolute",
    bottom: "-20%",
    left: "-10%",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(255,51,102,0.1) 0%, rgba(255,51,102,0) 70%)",
    borderRadius: "50%",
    animation: "floatNeo 6s ease-in-out infinite reverse"
  },
  gradientOrb3: {
    position: "absolute",
    top: "40%",
    left: "30%",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(183,33,255,0.08) 0%, rgba(183,33,255,0) 70%)",
    borderRadius: "50%",
    animation: "floatNeo 10s ease-in-out infinite"
  },
  gradientOrb4: {
    position: "absolute",
    bottom: "30%",
    right: "20%",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(0,245,160,0.08) 0%, rgba(0,245,160,0) 70%)",
    borderRadius: "50%",
    animation: "floatNeo 7s ease-in-out infinite"
  },
  mainContainer: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    display: "flex",
    overflow: "hidden"
  },
  brandSection: {
    flex: 1,
    padding: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(255,51,102,0.05))",
    backdropFilter: "blur(10px)"
  },
  brandContent: {
    maxWidth: "500px",
    animation: "fadeInUp 0.6s ease-out"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "60px"
  },
  logoIcon: {
    fontSize: "40px"
  },
  logoText: {
    fontSize: "32px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #fff, #00D4FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  tagline: {
    marginBottom: "50px"
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "rgba(0,212,255,0.15)",
    padding: "8px 20px",
    borderRadius: "60px",
    marginBottom: "30px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#00D4FF"
  },
  liveDot: {
    width: "8px",
    height: "8px",
    background: "#00FF00",
    borderRadius: "50%",
    animation: "glowPulse 1s infinite"
  },
  brandTitle: {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "20px",
    color: "#ffffff"
  },
  gradientText: {
    background: "linear-gradient(135deg, #00D4FF, #FF3366, #B721FF)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shimmer 3s linear infinite"
  },
  brandDescription: {
    fontSize: "16px",
    color: "#999",
    lineHeight: "1.6"
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    marginBottom: "50px"
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },
  featureIcon: {
    fontSize: "28px"
  },
  testimonial: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "25px",
    border: "1px solid rgba(0,212,255,0.2)"
  },
  testimonialStars: {
    color: "#FFD700",
    fontSize: "18px",
    marginBottom: "15px",
    letterSpacing: "2px"
  },
  testimonialAuthor: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "15px"
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover"
  },
  formSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(20px)"
  },
  formCard: {
    width: "100%",
    maxWidth: "480px",
    background: "rgba(26,26,26,0.8)",
    backdropFilter: "blur(20px)",
    borderRadius: "32px",
    padding: "48px",
    border: "1px solid rgba(0,212,255,0.2)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
  },
  formHeader: {
    textAlign: "center",
    marginBottom: "40px"
  },
  formTitle: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "10px",
    background: "linear-gradient(135deg, #fff, #00D4FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  formSubtitle: {
    color: "#999",
    fontSize: "14px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  label: {
    color: "#ccc",
    fontSize: "14px",
    fontWeight: "500"
  },
  inputWrapper: {
    position: "relative"
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "16px",
    transition: "all 0.3s ease",
    outline: "none"
  },
  inputIcon: {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#00FF00",
    fontSize: "16px"
  },
  passwordToggle: {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    opacity: 0.7
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px"
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#ccc",
    cursor: "pointer"
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer"
  },
  forgotLink: {
    color: "#00D4FF",
    textDecoration: "none",
    fontSize: "14px"
  },
  loginButton: {
    padding: "14px",
    background: "linear-gradient(135deg, #00D4FF, #FF3366)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    marginTop: "8px"
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    gap: "8px"
  },
  loaderDot: {
    width: "8px",
    height: "8px",
    background: "white",
    borderRadius: "50%",
    animation: "floatNeo 0.6s ease-in-out infinite"
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    color: "#666",
    fontSize: "12px",
    margin: "8px 0"
  },
  socialButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  socialBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s ease"
  },
  socialIcon: {
    fontSize: "20px"
  },
  signupPrompt: {
    textAlign: "center",
    fontSize: "14px",
    color: "#999",
    marginTop: "8px"
  },
  signupLink: {
    color: "#00D4FF",
    textDecoration: "none",
    fontWeight: "600"
  },
  formFooter: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "12px",
    color: "#666"
  }
};

// Add style for neon text
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .neon-text {
    background: linear-gradient(135deg, #00D4FF, #FF3366, #B721FF);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
  }
  
  input:focus {
    border-color: #00D4FF !important;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.2) !important;
  }
  
  button:active {
    transform: scale(0.98);
  }
`;
document.head.appendChild(styleSheet);

export default Login;