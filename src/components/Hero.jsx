import bgImage from '../images/hero/bgImage.jpg'

function Hero() {
  return (
    <section className="hero-section" style={{...styles.hero, backgroundImage: `url(${bgImage})`}}>
      {/* Dark overlay so text stays readable over the background image */}
      <div style={styles.overlay}></div>

      {/* Hero text content */}
      <div style={styles.content}>
        <p style={styles.tagline}>Portraits · Sports · Events</p>
        <h1 style={styles.heading}>Capturing Moments<br />That Last Forever</h1>
        <a href="#portfolio" style={styles.button} className="btn-hover">View My Work</a>
      </div>
    </section>
  )
}

const styles = {
 hero: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
  },
overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.65)',  // change this
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
  tagline: {
    color: '#C9A84C',
    fontSize: '13px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '64px',
    fontFamily: 'Playfair Display, serif',
    color: '#F5F0E8',
    lineHeight: '1.2',
    marginBottom: '40px',
  },
  button: {
    display: 'inline-block',
    padding: '14px 40px',
    border: '1px solid #C9A84C',
    color: '#C9A84C',
    fontSize: '12px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },
}

export default Hero