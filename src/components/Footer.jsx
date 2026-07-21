// Footer component
// Simple closing section with brand name, links and copyright

function Footer() {
  return (
    <footer style={styles.footer}>

      {/* Top section — logo and nav links */}
      <div style={styles.top}>

        {/* Brand name */}
        <h2 style={styles.logo}>JPSHOTZZ</h2>

        {/* Quick navigation links */}
        <ul style={styles.links}>
          <li><a href="#about" style={styles.link}>About</a></li>
          <li><a href="#portfolio" style={styles.link}>Portfolio</a></li>
          <li><a href="#services" style={styles.link}>Services</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>

        {/* Social media links */}
        <div style={styles.socials}>
          <a href="https://instagram.com/jp_shotzz" target="_blank" style={styles.social}>Instagram</a>
          <a href="https://twitter.com/jpshotzz" target="_blank" style={styles.social}>Twitter</a>
        </div>

      </div>

      {/* Divider line */}
      <div style={styles.divider}></div>

      {/* Bottom section — copyright */}
      <div style={styles.bottom}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} JPSHOTZZ. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const styles = {

  // Footer wrapper — dark background, generous padding
  footer: {
    backgroundColor: '#080808',
    padding: '80px 60px 40px 60px',
  },

  // Top row — flexbox with space between logo, links and socials
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
    marginBottom: '60px',
  },

  // Brand logo in gold
  logo: {
    color: '#C9A84C',
    fontSize: '24px',
    letterSpacing: '4px',
  },

  // Navigation links in a row
  links: {
    display: 'flex',
    gap: '40px',
    listStyle: 'none',
  },

  // Individual nav link
  link: {
    color: '#888',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },

  // Social links container
  socials: {
    display: 'flex',
    gap: '24px',
  },

  // Individual social link
  social: {
    color: '#888',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },

  // Thin divider line between top and bottom
  divider: {
    borderBottom: '1px solid #1a1a1a',
    maxWidth: '1100px',
    margin: '0 auto 40px auto',
  },

  // Bottom row — copyright and credit side by side
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  // Copyright text
  copyright: {
    color: '#444',
    fontSize: '12px',
    letterSpacing: '1px',
  },

}

export default Footer