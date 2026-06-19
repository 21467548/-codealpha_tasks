import { useState, useEffect } from "react";

function Home() {
  const [products] = useState([
    {
      id: 1,
      name: "iPhone 18 Pro Max",
      price: 1499,
      originalPrice: 1699,
      description: "Revolutionary AI-powered smartphone with holographic display",
      rating: 4.9,
      reviews: 3421,
      badge: "AI-Powered",
      image: "📱",
      color: "#FF3366",
      features: ["Holographic Display", "AI Chip X4", "48MP AI Camera", "Solar Charging"]
    },
    {
      id: 2,
      name: "MacBook Pro M5",
      price: 2499,
      originalPrice: 2899,
      description: "Next-gen laptop with neural engine and 72hr battery life",
      rating: 4.8,
      reviews: 2156,
      badge: "Neural Engine",
      image: "💻",
      color: "#00D4FF",
      features: ["M5 Ultra Chip", "72hr Battery", "32GB Neural RAM", "6K HDR Display"]
    },
    {
      id: 3,
      name: "Sony XR Headset",
      price: 899,
      originalPrice: 1199,
      description: "Mixed reality headset with eye-tracking and haptic feedback",
      rating: 4.9,
      reviews: 876,
      badge: "Mixed Reality",
      image: "🥽",
      color: "#B721FF",
      features: ["4K per eye", "Eye Tracking", "Haptic Gloves", "120° FOV"]
    },
    {
      id: 4,
      name: "Galaxy Ring S3",
      price: 399,
      originalPrice: 499,
      description: "Smart ring with health monitoring and contactless payments",
      rating: 4.7,
      reviews: 1243,
      badge: "Wearable",
      image: "💍",
      color: "#FADB5F",
      features: ["Health Monitor", "NFC Payment", "5 Days Battery", "Sapphire Glass"]
    },
    {
      id: 5,
      name: "Neo QLED TV",
      price: 3299,
      originalPrice: 3999,
      description: "8K Quantum Dot TV with AI upscaling and ambient mode",
      rating: 4.9,
      reviews: 567,
      badge: "8K Resolution",
      image: "📺",
      color: "#00F5A0",
      features: ["8K QLED", "AI Upscaling", "144Hz", "Ambient Mode+"]
    },
    {
      id: 6,
      name: "Drone X5 Pro",
      price: 1299,
      originalPrice: 1599,
      description: "8K cinematic drone with obstacle avoidance and 45min flight",
      rating: 4.8,
      reviews: 892,
      badge: "Cinematic",
      image: "🚁",
      color: "#FF6B6B",
      features: ["8K Camera", "45min Flight", "5km Range", "Auto Return"]
    }
  ]);

  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState(5000);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    show3DNotification(`✨ ${product.name} added!`);
  };

  const show3DNotification = (message) => {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0,0,0,0.9);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.2);
      color: white;
      padding: 16px 28px;
      border-radius: 60px;
      z-index: 10000;
      animation: slideInNeo 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      font-weight: 600;
      letter-spacing: 0.5px;
      font-family: 'Inter', sans-serif;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2500);
  };

  const filteredProducts = products
    .filter(p => activeFilter === "all" || p.badge === activeFilter)
    .filter(p => p.price <= priceRange);

  const theme = isDarkMode ? stylesDark : stylesLight;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        @keyframes floatNeo {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes slideInNeo {
          from { transform: translateX(100%) scale(0.8); opacity: 0; }
          to { transform: translateX(0) scale(1); opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
        }

        @keyframes rotateBg {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .cursor-glow {
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0) 70%);
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .card-3d {
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card-3d:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-10px);
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #00D4FF, #FF3366);
          border-radius: 10px;
        }

        .neon-text {
          background: linear-gradient(135deg, #00D4FF, #FF3366, #B721FF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}} />
      
      <div id="cursor-glow" className="cursor-glow"></div>
      
      <div style={theme.container}>
        {/* Animated Background */}
        <div style={theme.animatedBg}>
          <div style={theme.gradientOrb1}></div>
          <div style={theme.gradientOrb2}></div>
          <div style={theme.gradientOrb3}></div>
        </div>

        {/* Navbar */}
        <nav style={theme.navbar}>
          <div style={theme.logo} className="neon-text">
            <span style={theme.logoIcon}>⚡</span>
            <span style={theme.logoText}>NEO<span style={{color: "#00D4FF"}}>MART</span></span>
          </div>
          <div style={theme.navLinks}>
            <a href="#" style={theme.navLink}>Home</a>
            <a href="#" style={theme.navLink}>Products</a>
            <a href="#" style={theme.navLink}>AI Picks</a>
            <a href="#" style={theme.navLink}>Future Tech</a>
          </div>
          <div style={theme.navIcons}>
            <button style={theme.iconBtn} onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <button style={theme.iconBtn} onClick={() => setShowCart(true)}>
              🛒
              {cartItems.length > 0 && <span style={theme.cartBadge}>{cartItems.length}</span>}
            </button>
            <button style={theme.iconBtn}>👤</button>
          </div>
        </nav>

        {/* Cart Modal */}
        {showCart && (
          <div style={theme.modalOverlay} onClick={() => setShowCart(false)}>
            <div style={theme.cartModal} onClick={(e) => e.stopPropagation()}>
              <h2 style={theme.cartTitle}>Your Cart</h2>
              {cartItems.length === 0 ? (
                <p style={theme.emptyCart}>Cart is empty</p>
              ) : (
                <>
                  {cartItems.map((item, idx) => (
                    <div key={idx} style={theme.cartItem}>
                      <span style={{fontSize: "40px"}}>{item.image}</span>
                      <div>
                        <p style={theme.cartItemName}>{item.name}</p>
                        <p style={theme.cartItemPrice}>${item.price}</p>
                      </div>
                    </div>
                  ))}
                  <div style={theme.cartTotal}>
                    <span>Total:</span>
                    <span style={{fontSize: "28px", fontWeight: "bold"}}>
                      ${cartItems.reduce((sum, item) => sum + item.price, 0)}
                    </span>
                  </div>
                  <button style={theme.checkoutBtn}>Checkout →</button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Hero Section 2026 */}
        <div style={theme.hero}>
          <div style={theme.heroContent}>
            <div style={theme.chip}>
              <span>✨ FUTURE IS NOW</span>
              <span style={theme.liveDot}></span>
              <span>LIVE 2026</span>
            </div>
            <h1 style={theme.heroTitle}>
              Experience the
              <span className="neon-text"> Next Dimension</span>
            </h1>
            <p style={theme.heroSubtitle}>
              Discover AI-powered products that redefine reality. 
              Limited edition drops available now.
            </p>
            <div style={theme.heroButtons}>
              <button style={theme.primaryBtn} onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                Explore Collection →
              </button>
              <button style={theme.secondaryBtn}>
                Watch Demo ▶
              </button>
            </div>
            <div style={theme.stats}>
              <div><span style={theme.statNum}>100K+</span><br/>Customers</div>
              <div><span style={theme.statNum}>4.9</span><br/>Rating ★</div>
              <div><span style={theme.statNum}>24/7</span><br/>AI Support</div>
            </div>
          </div>
          <div style={theme.heroVisual}>
            <div style={theme.hologram}>
              <div style={theme.rotatingRing}></div>
              <div style={theme.rotatingRing2}></div>
              <span style={theme.hologramIcon}>🚀</span>
              <div style={theme.floatingParticles}>
                <div style={theme.particle}></div>
                <div style={theme.particle}></div>
                <div style={theme.particle}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" style={theme.productsSection}>
          <div style={theme.sectionHeader}>
            <div>
              <h2 style={theme.sectionTitle}>
                🔥 Trending in <span className="neon-text">2026</span>
              </h2>
              <p style={theme.sectionSubtitle}>AI-curated picks just for you</p>
            </div>
            <div style={theme.controls}>
              <div style={theme.priceFilter}>
                <span>💰 Max: ${priceRange}</span>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  style={theme.rangeSlider}
                />
              </div>
              <div style={theme.viewToggle}>
                <button onClick={() => setViewMode("grid")} style={{...theme.viewBtn, background: viewMode === "grid" ? "#00D4FF" : "transparent"}}>⊞</button>
                <button onClick={() => setViewMode("list")} style={{...theme.viewBtn, background: viewMode === "list" ? "#00D4FF" : "transparent"}}>☰</button>
              </div>
            </div>
          </div>

          <div style={viewMode === "grid" ? theme.grid : theme.listView}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="card-3d"
                style={{
                  ...theme.card,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                  border: `1px solid ${product.color}40`
                }}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={theme.cardBadge}>
                  <span style={{...theme.productBadge, background: product.color}}>{product.badge}</span>
                </div>
                <div style={theme.cardImage}>
                  <span style={theme.productImage}>{product.image}</span>
                  <div style={theme.cardActions}>
                    <button style={theme.actionBtn} onClick={() => handleAddToCart(product)}>🛒</button>
                    <button style={theme.actionBtn} onClick={() => {
                      setLikedProducts([...likedProducts, product.id]);
                      show3DNotification(`❤️ ${product.name} saved!`);
                    }}>❤️</button>
                    <button style={theme.actionBtn}>👁️</button>
                  </div>
                </div>
                <h3 style={theme.productName}>{product.name}</h3>
                <p style={theme.productDesc}>{product.description}</p>
                <div style={theme.features}>
                  {product.features.slice(0, 3).map((feature, i) => (
                    <span key={i} style={theme.featureTag}>{feature}</span>
                  ))}
                </div>
                <div style={theme.rating}>
                  <div style={theme.stars}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{color: i < Math.floor(product.rating) ? "#FFD700" : "#333"}}>
                        {i < Math.floor(product.rating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span style={theme.reviewCount}>({product.reviews.toLocaleString()} reviews)</span>
                </div>
                <div style={theme.priceContainer}>
                  <div>
                    <span style={theme.price}>${product.price}</span>
                    <span style={theme.originalPrice}>${product.originalPrice}</span>
                  </div>
                  <div style={theme.discountBadge}>
                    SAVE ${product.originalPrice - product.price}
                  </div>
                </div>
                <button style={theme.buyNowBtn} onClick={() => handleAddToCart(product)}>
                  Buy Now →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Futuristic */}
        <div style={theme.newsletter}>
          <div style={theme.newsletterContent}>
            <div style={theme.newsletterChip}>📡 SUBSCRIBE NOW</div>
            <h2 style={theme.newsletterTitle}>Join the <span className="neon-text">Future</span></h2>
            <p style={theme.newsletterText}>Get early access to drops + 20% off your first order</p>
            <div style={theme.newsletterForm}>
              <input type="email" placeholder="Enter your email address" style={theme.newsletterInput} />
              <button style={theme.newsletterBtn}>Subscribe →</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={theme.footer}>
          <div style={theme.footerContent}>
            <div>
              <h3 style={theme.footerLogo}>NEOMART</h3>
              <p style={theme.footerText}>Pioneering the future of tech since 2026</p>
            </div>
            <div>
              <h4>Explore</h4>
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>AI Recommendations</p>
            </div>
            <div>
              <h4>Support</h4>
              <p>24/7 AI Chat</p>
              <p>Warranty</p>
              <p>Returns</p>
            </div>
            <div>
              <h4>Connect</h4>
              <div style={theme.socialLinks}>
                <span>𝕏</span>
                <span>📱</span>
                <span>💬</span>
                <span>🎮</span>
              </div>
            </div>
          </div>
          <div style={theme.footerBottom}>
            <p>© 2026 NEOMART — The Future of E-Commerce</p>
          </div>
        </footer>
      </div>
    </>
  );
}

// 2026 Light Theme - Cyberpunk/Futuristic
const stylesLight = {
  container: {
    minHeight: "100vh",
    background: "#ffffff",
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
  navbar: {
    position: "sticky",
    top: 20,
    margin: "20px 40px",
    padding: "16px 32px",
    background: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(20px)",
    borderRadius: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 100,
    border: "1px solid rgba(0,212,255,0.2)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.05)"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "28px",
    fontWeight: "800"
  },
  logoIcon: {
    fontSize: "32px"
  },
  logoText: {
    fontSize: "24px"
  },
  navLinks: {
    display: "flex",
    gap: "40px"
  },
  navLink: {
    textDecoration: "none",
    color: "#1a1a1a",
    fontWeight: "500",
    transition: "color 0.3s"
  },
  navIcons: {
    display: "flex",
    gap: "20px"
  },
  iconBtn: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    position: "relative",
    padding: "8px"
  },
  cartBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "#FF3366",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "10px",
    fontWeight: "bold"
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "flex-end"
  },
  cartModal: {
    width: "500px",
    height: "100vh",
    background: "white",
    padding: "40px",
    animation: "slideInNeo 0.3s ease"
  },
  cartTitle: {
    fontSize: "32px",
    marginBottom: "30px"
  },
  emptyCart: {
    textAlign: "center",
    padding: "60px",
    color: "#999"
  },
  cartItem: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    borderBottom: "1px solid #eee"
  },
  cartItemName: {
    fontWeight: "600",
    marginBottom: "5px"
  },
  cartItemPrice: {
    color: "#00D4FF",
    fontWeight: "bold"
  },
  cartTotal: {
    padding: "20px",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    borderTop: "2px solid #eee"
  },
  checkoutBtn: {
    width: "100%",
    padding: "16px",
    background: "linear-gradient(135deg, #00D4FF, #FF3366)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "20px"
  },
  hero: {
    padding: "80px 60px",
    display: "flex",
    alignItems: "center",
    gap: "60px",
    position: "relative",
    zIndex: 1
  },
  heroContent: {
    flex: 1
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    background: "rgba(0,212,255,0.1)",
    padding: "8px 20px",
    borderRadius: "60px",
    marginBottom: "30px",
    fontSize: "14px",
    fontWeight: "600"
  },
  liveDot: {
    width: "8px",
    height: "8px",
    background: "#00FF00",
    borderRadius: "50%",
    animation: "glowPulse 1s infinite"
  },
  heroTitle: {
    fontSize: "64px",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "30px",
    color: "#1a1a1a"
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "40px",
    lineHeight: "1.6"
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
    marginBottom: "60px"
  },
  primaryBtn: {
    padding: "16px 40px",
    background: "linear-gradient(135deg, #00D4FF, #FF3366)",
    color: "white",
    border: "none",
    borderRadius: "60px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.3s"
  },
  secondaryBtn: {
    padding: "16px 40px",
    background: "transparent",
    color: "#1a1a1a",
    border: "2px solid #1a1a1a",
    borderRadius: "60px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  },
  stats: {
    display: "flex",
    gap: "50px"
  },
  statNum: {
    fontSize: "32px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #00D4FF, #FF3366)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  heroVisual: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  hologram: {
    position: "relative",
    width: "300px",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  rotatingRing: {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "2px solid rgba(0,212,255,0.3)",
    borderRadius: "50%",
    animation: "rotateBg 10s linear infinite"
  },
  rotatingRing2: {
    position: "absolute",
    width: "80%",
    height: "80%",
    border: "2px solid rgba(255,51,102,0.3)",
    borderRadius: "50%",
    animation: "rotateBg 7s linear infinite reverse"
  },
  hologramIcon: {
    fontSize: "80px",
    animation: "floatNeo 3s ease-in-out infinite"
  },
  floatingParticles: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  particle: {
    position: "absolute",
    width: "4px",
    height: "4px",
    background: "#00D4FF",
    borderRadius: "50%"
  },
  productsSection: {
    padding: "60px",
    background: "#f8f9fa",
    borderRadius: "40px 40px 0 0",
    position: "relative",
    zIndex: 1
  },
  sectionHeader: {
    maxWidth: "1400px",
    margin: "0 auto 50px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: "20px"
  },
  sectionTitle: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "10px"
  },
  sectionSubtitle: {
    color: "#666",
    fontSize: "16px"
  },
  controls: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  priceFilter: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  rangeSlider: {
    width: "200px",
    height: "4px",
    WebkitAppearance: "none",
    background: "linear-gradient(135deg, #00D4FF, #FF3366)",
    borderRadius: "2px"
  },
  viewToggle: {
    display: "flex",
    gap: "8px",
    background: "white",
    padding: "4px",
    borderRadius: "12px",
    border: "1px solid #ddd"
  },
  viewBtn: {
    padding: "8px 12px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "20px"
  },
  grid: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
    gap: "30px"
  },
  listView: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  card: {
    background: "white",
    borderRadius: "24px",
    padding: "28px",
    position: "relative",
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    cursor: "pointer"
  },
  cardBadge: {
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 1
  },
  productBadge: {
    padding: "6px 14px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
    color: "white"
  },
  cardImage: {
    position: "relative",
    textAlign: "center",
    marginBottom: "24px"
  },
  productImage: {
    fontSize: "100px",
    display: "inline-block",
    transition: "transform 0.3s"
  },
  cardActions: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    display: "flex",
    gap: "8px",
    opacity: 0,
    transition: "opacity 0.3s"
  },
  actionBtn: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    background: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  productName: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "12px"
  },
  productDesc: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "16px",
    lineHeight: "1.5"
  },
  features: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "16px"
  },
  featureTag: {
    background: "#f0f0f0",
    padding: "4px 10px",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: "500"
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px"
  },
  stars: {
    display: "flex",
    gap: "4px",
    fontSize: "18px"
  },
  reviewCount: {
    fontSize: "13px",
    color: "#999"
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },
  price: {
    fontSize: "32px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #00D4FF, #FF3366)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  originalPrice: {
    fontSize: "16px",
    color: "#999",
    textDecoration: "line-through",
    marginLeft: "10px"
  },
  discountBadge: {
    background: "#FF3366",
    color: "white",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600"
  },
  buyNowBtn: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #00D4FF, #FF3366)",
    color: "white",
    border: "none",
    borderRadius: "16px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.2s"
  },
  newsletter: {
    margin: "60px",
    background: "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(255,51,102,0.1))",
    borderRadius: "40px",
    padding: "80px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0,212,255,0.2)"
  },
  newsletterContent: {
    maxWidth: "600px",
    margin: "0 auto"
  },
  newsletterChip: {
    display: "inline-block",
    padding: "6px 16px",
    background: "rgba(0,212,255,0.2)",
    borderRadius: "60px",
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: "20px"
  },
  newsletterTitle: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "20px"
  },
  newsletterText: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px"
  },
  newsletterForm: {
    display: "flex",
    gap: "15px"
  },
  newsletterInput: {
    flex: 1,
    padding: "16px 24px",
    border: "1px solid #ddd",
    borderRadius: "60px",
    fontSize: "16px",
    background: "white"
  },
  newsletterBtn: {
    padding: "16px 32px",
    background: "linear-gradient(135deg, #00D4FF, #FF3366)",
    color: "white",
    border: "none",
    borderRadius: "60px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  },
  footer: {
    background: "#0a0a0a",
    color: "white",
    padding: "60px 60px 30px"
  },
  footerContent: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    marginBottom: "40px"
  },
  footerLogo: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "15px"
  },
  footerText: {
    color: "#999",
    lineHeight: "1.6"
  },
  socialLinks: {
    display: "flex",
    gap: "20px",
    fontSize: "24px",
    cursor: "pointer"
  },
  footerBottom: {
    textAlign: "center",
    paddingTop: "30px",
    borderTop: "1px solid #222",
    color: "#666"
  }
};

// Dark Theme - Cyberpunk 2026
const stylesDark = {
  ...stylesLight,
  container: {
    ...stylesLight.container,
    background: "#0a0a0a"
  },
  navbar: {
    ...stylesLight.navbar,
    background: "rgba(0,0,0,0.8)",
    border: "1px solid rgba(0,212,255,0.3)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
  },
  navLink: {
    ...stylesLight.navLink,
    color: "#ffffff"
  },
  heroTitle: {
    ...stylesLight.heroTitle,
    color: "#ffffff"
  },
  heroSubtitle: {
    ...stylesLight.heroSubtitle,
    color: "#999"
  },
  secondaryBtn: {
    ...stylesLight.secondaryBtn,
    color: "#ffffff",
    borderColor: "#ffffff"
  },
  productsSection: {
    ...stylesLight.productsSection,
    background: "#111111"
  },
  sectionTitle: {
    ...stylesLight.sectionTitle,
    color: "#ffffff"
  },
  card: {
    ...stylesLight.card,
    background: "#1a1a1a",
    border: "1px solid #222"
  },
  productName: {
    ...stylesLight.productName,
    color: "#ffffff"
  },
  productDesc: {
    ...stylesLight.productDesc,
    color: "#999"
  },
  featureTag: {
    ...stylesLight.featureTag,
    background: "#222",
    color: "#ccc"
  },
  actionBtn: {
    ...stylesLight.actionBtn,
    background: "#1a1a1a",
    color: "#fff"
  },
  newsletter: {
    ...stylesLight.newsletter,
    background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(255,51,102,0.05))",
    border: "1px solid rgba(0,212,255,0.2)"
  },
  newsletterInput: {
    ...stylesLight.newsletterInput,
    background: "#1a1a1a",
    border: "1px solid #333",
    color: "#fff"
  }
};

export default Home;