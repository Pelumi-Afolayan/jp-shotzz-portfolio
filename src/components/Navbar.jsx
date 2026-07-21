import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>JPSHOTZZ</h1>

      {/* Hamburger button — only visible on mobile via CSS */}
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        style={styles.hamburger}
      >
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'nav-links-open' : ''}`} style={styles.navLinks}>
        <li><a href="#about" style={styles.link} onClick={closeMenu}>About</a></li>
        <li><a href="#portfolio" style={styles.link} onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#services" style={styles.link} onClick={closeMenu}>Services</a></li>
        <li><a href="#contact" style={styles.link} onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 60px',
    backgroundColor: 'rgba(13, 13, 13, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
  },
  logo: {
    color: '#C9A84C',
    fontSize: '24px',
    letterSpacing: '4px',
  },
  navLinks: {
    display: 'flex',
    gap: '40px',
  },
  link: {
    color: '#F5F0E8',
    fontSize: '13px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    transition: 'color 0.3s',
  },
  hamburger: {
    display: 'none',   // hidden on desktop, shown via CSS on mobile
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  bar: {
    width: '26px',
    height: '2px',
    backgroundColor: '#C9A84C',
    display: 'block',
  },
}

export default Navbar