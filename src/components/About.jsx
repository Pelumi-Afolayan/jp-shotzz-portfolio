import portrait1 from '../images/about/portrait1.jpg'
import bgImage2 from '../images/about/bgImage2.jpg'
function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.overlay}></div>

      <div className="about-container" style={styles.container}>
        <div className="about-image-box" style={styles.imageBox}>
          <img src={portrait1} alt="Pelumi Afolayan" className="about-image" style={styles.image} />
        </div>
        <div style={styles.textBox}>
          <p style={styles.subtitle}>About Me</p>
          <h2 style={styles.heading}>I Am Pelumi Afolayan<br />The Eye Behind<br />The Lens</h2>
          <p style={styles.body}>
            I am a Nigerian photographer specialising in portraits,
            sports, and events photography. My work is driven by
            a passion for storytelling — every frame I capture is
            a moment frozen in time, telling a story that words alone cannot.
          </p>
          <p style={styles.body}>
            Based in Nigeria, I bring energy, precision, and an
            artistic eye to every shoot — whether it's the raw emotion
            of a portrait or the split-second action of a sporting event.
          </p>
          <a href="#contact" style={styles.button} className="btn-hover">Work With Me</a>
        </div>
      </div>
    </section>
  )
}


const styles = {
  section: {
    padding: '120px 60px',
    backgroundImage: `url(${bgImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  // Dark overlay on top of background image — controls how visible the bg is
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.90)', // 95% dark
  },

  // Container needs relative positioning to sit above the overlay
 container: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    gap: '80px',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  imageBox: {
    flex: 1,
  },
  image: {
  width: '100%',
  height: '600px',
  objectFit: 'cover',
  objectPosition: 'center 10%',
  border: '1px solid #C9A84C',
  },
  textBox: {
    flex: 1,
  },
  subtitle: {
    color: '#C9A84C',
    fontSize: '12px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '48px',
    fontFamily: 'Playfair Display, serif',
    color: '#F5F0E8',
    lineHeight: '1.2',
    marginBottom: '30px',
  },
  body: {
    color: '#888888',
    fontSize: '15px',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '14px 40px',
    border: '1px solid #C9A84C',
    color: '#C9A84C',
    fontSize: '12px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginTop: '20px',
  },
}

export default About

