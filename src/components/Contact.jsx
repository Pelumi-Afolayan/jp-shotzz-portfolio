// Contact component
// Gives visitors a way to reach Pelumi directly
// Connected to EmailJS to send messages to jayphee247@gmail.com

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// EmailJS credentials
const SERVICE_ID = 'service_x2kcspf'
const TEMPLATE_ID = 'template_30q24s6'
const PUBLIC_KEY = 'ormE4TfyV06lxuip6'

function Contact() {

  // Initialize EmailJS once when the component mounts
  useEffect(() => {
    emailjs.init({ publicKey: PUBLIC_KEY })
  }, [])

  // State to track what the user types into each form field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  // State to show a success message after form is submitted
  const [submitted, setSubmitted] = useState(false)

  // State to show a loading indicator while sending
  const [loading, setLoading] = useState(false)

  // State to show an error message if sending fails
  const [error, setError] = useState(false)

  // This function runs every time the user types in any field
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // This function runs when the user clicks Send Message
  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)  // show loading state
    setError(false)   // reset any previous error

    try {
      // Send the form data to EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      })

      // Success — show success message and reset form
      setSubmitted(true)
      setFormData({ name: '', email: '', service: '', message: '' })

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)

    } catch (err) {
      // Something went wrong — show error message
      console.error('EmailJS error:', err)
      setError(true)
    } finally {
      setLoading(false)  // hide loading state
    }
  }

  return (
    <section id="contact" style={styles.section}>

      {/* Section header */}
      <div style={styles.header}>
        <p style={styles.subtitle}>Get In Touch</p>
        <h2 style={styles.heading}>Let's Work Together</h2>
        <p style={styles.intro}>
          Have a shoot in mind? Fill out the form below and I'll get back to you within 24 hours.
        </p>
      </div>

      <div style={styles.container}>

        {/* Left side — contact info */}
        <div style={styles.infoBox}>

          <div style={styles.infoItem}>
            <p style={styles.infoLabel}>Email</p>
            <p style={styles.infoValue}>jayphee247@gmail.com</p>
          </div>

          <div style={styles.infoItem}>
            <p style={styles.infoLabel}>Phone</p>
            <p style={styles.infoValue}>+234 901 941 7657</p>
          </div>

          <div style={styles.infoItem}>
            <p style={styles.infoLabel}>Instagram</p>
            <p style={styles.infoValue}>@jp_shotzz</p>
          </div>

          <div style={styles.infoItem}>
            <p style={styles.infoLabel}>Location</p>
            <p style={styles.infoValue}>Nigeria</p>
          </div>

        </div>

        {/* Right side — contact form */}
        <div style={styles.formBox}>

          {/* Contact form — always visible */}
          <form onSubmit={handleSubmit} style={styles.form}>

            {/* Name field */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Your Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required
                style={styles.input}
                placeholder="John Doe"
              />
            </div>

            {/* Email field */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="john@example.com"
              />
            </div>

            {/* Service dropdown */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Service Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                style={styles.input}
              >
                <option value="">Select a service</option>
                <option value="Portraits">Portraits</option>
                <option value="Headshots">Headshots</option>
                <option value="Sports">Sports</option>
                <option value="Events">Events</option>
              </select>
            </div>

            {/* Message field */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{ ...styles.input, resize: 'none' }}
                placeholder="Tell me about your shoot..."
              />
            </div>

            {/* Submit button — shows loading text while sending */}
            <button
              type="submit"
              style={styles.button}
              className="btn-hover"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

          </form>

          {/* Success message — shows after successful submission */}
          {submitted && (
            <div style={styles.successMessage}>
              <p style={styles.successText}>Thank you! I'll be in touch soon.</p>
            </div>
          )}

          {/* Error message — shows if something goes wrong */}
          {error && (
            <div style={styles.errorMessage}>
              <p style={styles.errorText}>Something went wrong. Please try again or email me directly.</p>
            </div>
          )}

        </div>

      </div>

    </section>
  )
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const styles = {

  section: {
    padding: '120px 60px',
    backgroundColor: '#0D0D0D',
  },

  header: {
    textAlign: 'center',
    marginBottom: '80px',
  },

  subtitle: {
    color: '#C9A84C',
    fontSize: '12px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },

  heading: {
    fontSize: '48px',
    fontFamily: 'Playfair Display, serif',
    color: '#F5F0E8',
    marginBottom: '20px',
  },

  intro: {
    color: '#888',
    fontSize: '15px',
    lineHeight: '1.8',
    maxWidth: '500px',
    margin: '0 auto',
  },

  container: {
    display: 'flex',
    gap: '80px',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  infoBox: {
    flex: 1,
    paddingTop: '40px',
  },

  infoItem: {
    marginBottom: '40px',
    borderBottom: '1px solid #1a1a1a',
    paddingBottom: '24px',
  },

  infoLabel: {
    color: '#C9A84C',
    fontSize: '11px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },

  infoValue: {
    color: '#F5F0E8',
    fontSize: '16px',
  },

  formBox: {
    flex: 2,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },

  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  label: {
    color: '#888',
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },

  input: {
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    color: '#F5F0E8',
    padding: '14px 16px',
    fontSize: '14px',
    fontFamily: 'Raleway, sans-serif',
    outline: 'none',
    width: '100%',
  },

  button: {
    backgroundColor: 'transparent',
    border: '1px solid #C9A84C',
    color: '#C9A84C',
    padding: '16px 40px',
    fontSize: '12px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    fontFamily: 'Raleway, sans-serif',
    transition: 'all 0.3s',
  },

  // Success message box
  successMessage: {
    marginTop: '24px',
    padding: '20px 40px',
    border: '1px solid #C9A84C',
    textAlign: 'center',
  },

  successText: {
    color: '#C9A84C',
    fontSize: '14px',
    letterSpacing: '2px',
  },

  // Error message box
  errorMessage: {
    marginTop: '24px',
    padding: '20px 40px',
    border: '1px solid #ff4444',
    textAlign: 'center',
  },

  errorText: {
    color: '#ff4444',
    fontSize: '14px',
    letterSpacing: '1px',
  },
}

export default Contact