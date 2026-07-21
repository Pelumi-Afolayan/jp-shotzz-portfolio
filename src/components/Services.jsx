// Services component
// Showcases what Pelumi offers with card-level background images

import portrait from '../images/services/portrait.jpg'
import event from '../images/services/event.jpg'
import headshot from '../images/services/headshot.jpg'
import sports from '../images/services/sports.jpg'

const services = [
  {
    id: 1,
    name: 'Portraits',
    description: 'Creative and editorial portrait sessions that capture your personality, emotion, and story in every frame.',
    image: portrait,
    position: 'center center',
  },
  {
    id: 2,
    name: 'Headshots',
    description: 'Clean, professional headshots for corporate profiles, LinkedIn, and personal branding that make a lasting impression.',
    image: headshot,
    position: 'center 30%',  // moves image down so face shows
  },
  {
    id: 3,
    name: 'Sports',
    description: 'High energy sports photography that freezes the action, the sweat, and the glory of every defining moment.',
    image: sports,
    position: 'center center',
  },
  {
    id: 4,
    name: 'Events',
    description: 'Full event coverage that documents every detail, candid moment, and memory worth keeping forever.',
    image: event,
    position: 'center center',
  },
]

function Services() {
  return (
    <section id="services" style={styles.section}>

      {/* Section header */}
      <div style={styles.header}>
        <p style={styles.subtitle}>What I Offer</p>
        <h2 style={styles.heading}>Services</h2>
        <p style={styles.intro}>
          Every shoot is tailored to you. Reach out and let's create something extraordinary together.
        </p>
      </div>

      {/* Services grid — one card per service */}
      <div style={styles.grid}>
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              ...styles.card,
              // Each card uses its own photo as background
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: service.position,
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Dark overlay on each card so text stays readable */}
            <div style={styles.cardOverlay}></div>

            {/* Card content sits above the overlay */}
            <div style={styles.cardContent}>

              {/* Service name */}
              <h3 style={styles.name}>{service.name}</h3>

              {/* Service description */}
              <p style={styles.description}>{service.description}</p>

            </div>
          </div>
        ))}
      </div>

      {/* Single centered CTA button sitting below all four cards */}
      <div style={styles.buttonWrapper}>
        <a href="#contact" style={styles.button} className="btn-hover">Get In Touch</a>
      </div>

    </section>
  )
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const styles = {

  // Section background — flat dark with subtle gold gradient at top
  section: {
    padding: '120px 60px',
    backgroundColor: '#141414',
    background: 'linear-gradient(180deg, rgba(201,168,76,0.05) 0%, #141414 100px)',
  },

  // Centered header block
  header: {
    textAlign: 'center',
    marginBottom: '80px',
  },

  // Small gold uppercase label
  subtitle: {
    color: '#C9A84C',
    fontSize: '12px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },

  // Main heading
  heading: {
    fontSize: '48px',
    fontFamily: 'Playfair Display, serif',
    color: '#F5F0E8',
    marginBottom: '20px',
  },

  // Short intro paragraph
  intro: {
    color: '#888',
    fontSize: '15px',
    lineHeight: '1.8',
    maxWidth: '500px',
    margin: '0 auto',
  },

  // 2x2 grid layout
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  // Each card — position relative so overlay can stretch inside it
  card: {
    position: 'relative',
    minHeight: '400px',
    cursor: 'pointer',
  },

  // Dark overlay on each card — 80% opacity so photo is visible but subtle
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // reduced from 0.78 to 0.55
  },

  // Content sits above the overlay using zIndex
  cardContent: {
    position: 'relative',
    zIndex: 1,
    padding: '48px 40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
  },

  // Decorative gold icon
  icon: {
    color: '#C9A84C',
    fontSize: '32px',
    marginBottom: '24px',
  },

  // Service name
  name: {
    color: '#F5F0E8',
    fontSize: '24px',
    fontFamily: 'Playfair Display, serif',
    marginBottom: '16px',
  },

  // Service description
  description: {
    color: '#888',
    fontSize: '14px',
    lineHeight: '1.9',
    marginBottom: '32px',
  },

  // Get In Touch button
  button: {
    display: 'inline-block',
    padding: '12px 32px',
    border: '1px solid #C9A84C',
    color: '#C9A84C',
    fontSize: '11px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },

  // Centers the single CTA button below the grid
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '48px',
  },
}

export default Services