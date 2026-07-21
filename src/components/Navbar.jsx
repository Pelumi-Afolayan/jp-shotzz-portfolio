// Navbar component — fixed at the top of every page
// Contains the brand logo and navigation links

function Navbar() {
  return (
    // nav is the HTML element for navigation bars
    <nav style={styles.nav}>

      {/* Brand logo — clicking it could later link to the home page */}
      <h1 style={styles.logo}>JPSHOTZZ</h1>

      {/* Navigation links — each href scrolls to that section on the page */}
      <ul style={styles.navLinks}>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#portfolio" style={styles.link}>Portfolio</a></li>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>

    </nav>
  )
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const styles = {
  nav: {
    position: 'fixed',       // stays at top even when scrolling
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',  // logo on left, links on right
    alignItems: 'center',
    padding: '20px 60px',
    backgroundColor: 'rgba(13, 13, 13, 0.9)',  // slightly transparent dark background
    backdropFilter: 'blur(10px)',   // frosted glass effect behind navbar
    zIndex: 1000,   // keeps navbar on top of all other elements
  },
  logo: {
    color: '#C9A84C',       // gold brand colour
    fontSize: '24px',
    letterSpacing: '4px',   // spaced out letters for premium feel
  },
  navLinks: {
    display: 'flex',
    gap: '40px',            // space between each link
  },
  link: {
    color: '#F5F0E8',       // cream colour
    fontSize: '13px',
    letterSpacing: '2px',
    textTransform: 'uppercase',   // all caps automatically
    transition: 'color 0.3s',     // smooth colour change on hover
  },
}

export default Navbar