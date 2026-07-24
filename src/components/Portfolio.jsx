import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import portraitCover from '../images/portfolio/portraitCover.jpg'
import headshotCover from '../images/portfolio/headshotCover.jpg'
import eventCover from '../images/portfolio/eventCover.jPG'
import sportCover from '../images/portfolio/sportCover.jpg'
import tedxrun132 from '../images/portfolio/events/tedXrun/tedxrun132.jpg'
import techfest3 from '../images/portfolio/events/tech-fest/techfest3.jpg'
import arc21 from '../images/portfolio/events/arc/arc21.jpg'
import da1 from '../images/portfolio/portraits/david-abraham/da1.jpg'
import da2 from '../images/portfolio/portraits/david-abraham/da2.jpg'
import da3 from '../images/portfolio/portraits/david-abraham/da3.jpg'
import da4 from '../images/portfolio/portraits/david-abraham/da4.jpg'
import da5 from '../images/portfolio/portraits/david-abraham/da5.jpg'
import da6 from '../images/portfolio/portraits/david-abraham/da6.jpg'
import da7 from '../images/portfolio/portraits/david-abraham/da7.jpg'
import da8 from '../images/portfolio/portraits/david-abraham/da8.jpg'
import do1 from '../images/portfolio/portraits/dorcas-oladapo/do1.jpg'
import do2 from '../images/portfolio/portraits/dorcas-oladapo/do2.jpg'
import do3 from '../images/portfolio/portraits/dorcas-oladapo/do3.jpg'
import do4 from '../images/portfolio/portraits/dorcas-oladapo/do4.jpg'
import do5 from '../images/portfolio/portraits/dorcas-oladapo/do5.jpg'
import em1 from '../images/portfolio/portraits/eniola-motunrayo/em1.jpg'
import em2 from '../images/portfolio/portraits/eniola-motunrayo/em2.jpg'
import em3 from '../images/portfolio/portraits/eniola-motunrayo/em3.jpg'
import em4 from '../images/portfolio/portraits/eniola-motunrayo/em4.jpg'
import em5 from '../images/portfolio/portraits/eniola-motunrayo/em5.jpg'
import em6 from '../images/portfolio/portraits/eniola-motunrayo/em6.jpg'
import uc1 from '../images/portfolio/portraits/unsynced-clique/uc1.jpg'
import uc2 from '../images/portfolio/portraits/unsynced-clique/uc2.jpg'
import uc3 from '../images/portfolio/portraits/unsynced-clique/uc3.jpg'
import uc4 from '../images/portfolio/portraits/unsynced-clique/uc4.jpg'
import uc5 from '../images/portfolio/portraits/unsynced-clique/uc5.jpg'
import uc6 from '../images/portfolio/portraits/unsynced-clique/uc6.jpg'
import uc7 from '../images/portfolio/portraits/unsynced-clique/uc7.jpg'
import rk1 from '../images/portfolio/portraits/rukewe/rk1.jpg'
import rk2 from '../images/portfolio/portraits/rukewe/rk2.jpg'
import rk3 from '../images/portfolio/portraits/rukewe/rk3.jpg'
import rk4 from '../images/portfolio/portraits/rukewe/rk4.jpg'
import ab1 from '../images/portfolio/portraits/akinola-boluwatife/ab1.jpg'
import ab2 from '../images/portfolio/portraits/akinola-boluwatife/ab2.jpg'
import ab3 from '../images/portfolio/portraits/akinola-boluwatife/ab3.jpg'
import ab4 from '../images/portfolio/portraits/akinola-boluwatife/ab4.jpg'
import ab5 from '../images/portfolio/portraits/akinola-boluwatife/ab5.jpg'
import ab6 from '../images/portfolio/portraits/akinola-boluwatife/ab6.jpg'
import rts1 from '../images/portfolio/headshots/run-tech-space/rts1.png'
import rts2 from '../images/portfolio/headshots/run-tech-space/rts2.png'
import rts3 from '../images/portfolio/headshots/run-tech-space/rts3.png'
import rts4 from '../images/portfolio/headshots/run-tech-space/rts4.png'
import rts5 from '../images/portfolio/headshots/run-tech-space/rts5.png'
import rts6 from '../images/portfolio/headshots/run-tech-space/rts6.png'
import rts7 from '../images/portfolio/headshots/run-tech-space/rts7.png'
import rts8 from '../images/portfolio/headshots/run-tech-space/rts8.jpg'
import rts9 from '../images/portfolio/headshots/run-tech-space/rts9.png'
import rts10 from '../images/portfolio/headshots/run-tech-space/rts10.png'
import rts11 from '../images/portfolio/headshots/run-tech-space/rts11.png'
import rts12 from '../images/portfolio/headshots/run-tech-space/rts12.png'
import cve1 from '../images/portfolio/headshots/run-cve-excos/cve1.jpg'
import cve2 from '../images/portfolio/headshots/run-cve-excos/cve2.jpg'
import cve3 from '../images/portfolio/headshots/run-cve-excos/cve3.jpg'
import cve4 from '../images/portfolio/headshots/run-cve-excos/cve4.jpg'
import cve5 from '../images/portfolio/headshots/run-cve-excos/cve5.jpg'
import cve6 from '../images/portfolio/headshots/run-cve-excos/cve6.jpg'
import cve7 from '../images/portfolio/headshots/run-cve-excos/cve7.jpg'
import phe1 from '../images/portfolio/headshots/run-phe/phe1.jpg'
import phe2 from '../images/portfolio/headshots/run-phe/phe2.jpg'
import phe3 from '../images/portfolio/headshots/run-phe/phe3.jpg'
import phe4 from '../images/portfolio/headshots/run-phe/phe4.jpg'
import phe5 from '../images/portfolio/headshots/run-phe/phe5.jpg'
import phe6 from '../images/portfolio/headshots/run-phe/phe6.jpg'
import phe7 from '../images/portfolio/headshots/run-phe/phe7.jpg'
import phe8 from '../images/portfolio/headshots/run-phe/phe8.jpg'

// TedXRUN — imports all photos in the folder automatically
const tedxrunPhotos = Object.values(
  import.meta.glob('../images/portfolio/events/tedXrun/*.jpg', { eager: true })
).map(module => module.default)

// TechFest - imports all photos in the folder automatically
const techfestPhotos = Object.values(
  import.meta.glob('../images/portfolio/events/tech-fest/*.jpg', { eager: true })
).map(module => module.default)

// ARC - imports all photos in the folder automatically
const arcPhotos = Object.values(
  import.meta.glob('../images/portfolio/events/arc/*.jpg', { eager: true })
).map(module => module.default)

// All portfolio data lives here — add new shoots and categories in this object
const portfolioData = {
  categories: [
    { id: 1, name: 'Portraits', description: 'Editorial & Creative Portraits', cover: portraitCover, ratio: '4/5' },
    { id: 2, name: 'Headshots', description: 'Professional & Corporate', cover: headshotCover, ratio: '4/5' },
    { id: 3, name: 'Events', description: 'Moments & Memories', cover: eventCover, ratio: '3/2' },
    { id: 4, name: 'Sports', description: 'Action & Energy', cover: sportCover, ratio: '3/2' },
  ],
  shoots: {
    Portraits: [
      { id: 1, name: 'David Abraham', cover: da1, photos: [da1, da2, da3, da4, da5, da6, da7, da8] },
      { id: 2, name: 'Dorcas Oladapo', cover: do1, photos: [do1, do2, do3, do4, do5] },
      { id: 3, name: 'Akinola Boluwatife', cover: ab1, photos: [ab1, ab2, ab3, ab4, ab5, ab6] },
      { id: 4, name: 'Eniola Motunrayo', cover: em1, photos: [em1, em2, em3, em4, em5, em6] },
      { id: 5, name: 'Unsynced Clique', cover: uc4, photos: [uc1, uc2, uc3, uc4, uc5, uc6, uc7] },
      { id: 6, name: 'Rukewe', cover: rk2, photos: [rk1, rk2, rk3, rk4] },
    ],
    Headshots: [
      { id: 1, name: 'RUN TECH SPACE EXECUTIVES 2025/2026', cover: rts1, photos: [rts1, rts2, rts3, rts4, rts5, rts6, rts7, rts8, rts9, rts10, rts11, rts12] },
      { id: 2, name: 'RUN CVE EXCOS 2025/2026', cover: cve1, photos: [cve1, cve2, cve3, cve4, cve5, cve6, cve7] },
      { id: 3, name: 'RUN PUBLIC HEALTH EXCOS 2025/2026', cover: phe3, photos: [phe1, phe2, phe3, phe4, phe5, phe6, phe7, phe8] },
    ],
    Events: [
      { id: 1, name: 'TedXRUN', cover: tedxrun132, photos: tedxrunPhotos },
      { id: 2, name: 'TechFest 5.0', cover: techfest3, photos: techfestPhotos },
      { id: 3, name: 'ARC 2.0', cover: arc21, photos: arcPhotos },
    ],
    Sports: [], // Coming soon
  }
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

function Portfolio() {
  // Tracks which level we are on: categories, shoots, or photos
  const [view, setView] = useState('categories')

  // Remembers which category was clicked e.g. 'Portraits'
  const [activeCategory, setActiveCategory] = useState(null)

  // Remembers which shoot was clicked e.g. 'David Abraham'
  const [activeShoot, setActiveShoot] = useState(null)

  // Remembers the ratio of the active category e.g. '4/5' or '3/2'
  const [activeRatio, setActiveRatio] = useState('4/5')

  // Tracks which photo indices have finished loading, so each photo can fade
  // in independently instead of waiting for the whole shoot to be ready.
  // Shape: { 0: true, 1: true, 2: false, ... }
  const [loadedPhotos, setLoadedPhotos] = useState({})

  // Which photo index is open in the lightbox. null = lightbox closed.
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Tracks where a mobile swipe started, so we can detect swipe direction on release
  const [touchStartX, setTouchStartX] = useState(null)

  // Points at the <section> DOM node — used to scroll back to the top of the
  // portfolio section every time the view changes (categories -> shoots ->
  // photos -> back), so new content never renders above your current scroll
  // position.
  const sectionRef = useRef(null)

  function scrollToSectionTop() {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // When a category is clicked store its name and ratio, switch to shoots view
  function handleCategoryClick(category) {
    const cat = portfolioData.categories.find(c => c.name === category)
    setActiveCategory(category)
    setActiveRatio(cat.ratio)
    setView('shoots')
    scrollToSectionTop()
  }

  // When a shoot is clicked store its name, switch to photos view
  function handleShootClick(shoot) {
    setActiveShoot(shoot)
    setView('photos')
    scrollToSectionTop()
  }

  // Back button — go one level up
  function handleBack() {
    if (view === 'photos') {
      setView('shoots')
      setActiveShoot(null)
    } else if (view === 'shoots') {
      setView('categories')
      setActiveCategory(null)
      setActiveRatio('4/5')
    }
    scrollToSectionTop()
  }

  // Get the current shoot object
  function getCurrentShoot() {
    if (!activeCategory || !activeShoot) return null
    return portfolioData.shoots[activeCategory].find(s => s.name === activeShoot)
  }

  // Reset which photos are "loaded" whenever we switch shoots, so the new
  // shoot's images start hidden and fade in as they individually finish
  // loading — instead of the whole grid waiting on the slowest photo.
  // (Important for big shoots like TEDxRUN's 210 photos: forcing the
  // browser to fully download all 210 before showing anything also used to
  // clog the browser's connection queue, which is why cover images for
  // other shoots looked slow to load right after leaving TEDxRUN.)
  useEffect(() => {
    setLoadedPhotos({})
  }, [activeShoot])

  function markPhotoLoaded(index) {
    setLoadedPhotos(prev => ({ ...prev, [index]: true }))
  }

  // ── Lightbox controls ─────────────────────────────────────────────────

  function openLightbox(index) {
    setLightboxIndex(index)
  }

  function closeLightbox() {
    setLightboxIndex(null)
  }

  function nextPhoto() {
    const shoot = getCurrentShoot()
    if (!shoot) return
    setLightboxIndex(prev => (prev + 1) % shoot.photos.length)
  }

  function prevPhoto() {
    const shoot = getCurrentShoot()
    if (!shoot) return
    setLightboxIndex(prev => (prev - 1 + shoot.photos.length) % shoot.photos.length)
  }

  // Desktop: left/right arrow keys navigate, Escape closes
  useEffect(() => {
    if (lightboxIndex === null) return
    function handleKeyDown(e) {
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex])

  // Mobile: swipe left for next, swipe right for previous
  function handleTouchStart(e) {
    setTouchStartX(e.touches[0].clientX)
  }
  function handleTouchEnd(e) {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    const SWIPE_THRESHOLD = 50 // pixels — avoids triggering on tiny accidental drags
    if (diff > SWIPE_THRESHOLD) nextPhoto()
    else if (diff < -SWIPE_THRESHOLD) prevPhoto()
    setTouchStartX(null)
  }

  const currentShoot = getCurrentShoot()

  return (
    <section id="portfolio" style={styles.section} ref={sectionRef}>

      {/* Section header */}
      <div style={styles.header}>
        <p style={styles.subtitle}>My Work</p>
        <h2 style={styles.heading}>Portfolio</h2>
      </div>

      {/* Back button — only shows when not on categories view */}
      {view !== 'categories' && (
        <button onClick={handleBack} style={styles.backButton} className="back-btn-hover">← Back</button>
      )}

      <AnimatePresence mode="wait">

        {/* LEVEL 1 — Category cards */}
        {view === 'categories' && (
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.categoriesGrid}
            className="categories-grid"
          >
            {portfolioData.categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={styles.card}
                className="card-hover"
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.cover ? (
                  <img
                    src={category.cover}
                    alt={category.name}
                    style={{
                      ...styles.coverImage,
                      aspectRatio: category.ratio === '4/5' ? '4/5' : 'unset',
                      maxHeight: category.ratio === '4/5' ? '800px' : 'unset',
                    }}
                  />
                ) : (
                  <div style={{ ...styles.imagePlaceholder, aspectRatio: category.ratio }}>
                    <p style={styles.placeholderText}>{category.name}</p>
                  </div>
                )}
                <div style={styles.cardInfo}>
                  <p style={styles.cardCategory}>{category.name}</p>
                  <p style={styles.cardTitle}>{category.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* LEVEL 2 — Shoot cards inside a category */}
        {view === 'shoots' && (
          <motion.div key="shoots" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h3 style={styles.viewHeading}>{activeCategory}</h3>
            <div style={styles.shootsGrid} className="shoots-grid">
              {portfolioData.shoots[activeCategory].length === 0 ? (
                <p style={styles.comingSoon}>Coming Soon</p>
              ) : (
                portfolioData.shoots[activeCategory].map((shoot, index) => (
                  <motion.div
                    key={shoot.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.1, 0.6), duration: 0.5 }}
                    style={styles.card}
                    className="card-hover"
                    onClick={() => handleShootClick(shoot.name)}
                  >
                    {shoot.cover ? (
                      <img src={shoot.cover} alt={shoot.name} style={styles.coverImage} />
                    ) : (
                      <div style={{ ...styles.imagePlaceholder, aspectRatio: shoot.ratio }}>
                        <p style={styles.placeholderText}>{shoot.name}</p>
                      </div>
                    )}
                    <div style={styles.cardInfo}>
                      <p style={styles.cardCategory}>{shoot.photos.length} photos</p>
                      <p style={styles.cardTitle}>{shoot.name}</p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}

        {/* LEVEL 3 — Individual photos inside a shoot */}
        {view === 'photos' && (
          <motion.div key="photos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h3 style={styles.viewHeading}>{activeShoot}</h3>

            {currentShoot?.photos.length === 0 ? (
              // No photos yet — show placeholders
              <div style={styles.photosGrid}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    style={styles.imagePlaceholder}
                  >
                    <p style={styles.placeholderText}>Photo {i + 1}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Grid renders immediately — each photo lazy-loads and fades in
              // on its own as soon as it's ready, instead of the whole shoot
              // waiting on its slowest image.
              <div
                style={activeRatio === '4/5' ? styles.portraitGrid : styles.landscapeGrid}
                className="photos-grid"
              >
                {currentShoot.photos.map((photo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    // Capped so shoots with hundreds of photos (e.g. TEDxRUN)
                    // don't take 30+ seconds to finish staggering in.
                    transition={{ delay: Math.min(i * 0.03, 0.6), duration: 0.4 }}
                    style={styles.photoWrapper}
                    className="card-hover"
                    onClick={() => openLightbox(i)}
                  >
                    {/* Skeleton placeholder shown until this specific photo loads */}
                    {!loadedPhotos[i] && <div style={styles.photoSkeleton} className="skeleton-pulse" />}
                    <img
                      src={photo}
                      alt={`${activeShoot} ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => markPhotoLoaded(i)}
                      style={{
                        ...(activeRatio === '4/5' ? styles.portraitPhoto : styles.landscapePhoto),
                        opacity: loadedPhotos[i] ? 1 : 0,
                        transition: 'opacity 0.35s ease',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

      </AnimatePresence>

      {/* LIGHTBOX — full-screen photo preview with prev/next navigation.
          Lives outside the AnimatePresence above so it can stay open
          independently of which "view" (categories/shoots/photos) is active. */}
      <AnimatePresence>
        {lightboxIndex !== null && currentShoot && (
          <motion.div
            key="lightbox"
            style={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              style={styles.lightboxClose}
              onClick={(e) => { e.stopPropagation(); closeLightbox() }}
              aria-label="Close preview"
            >
              ✕
            </button>

            {/* Prev arrow — hidden on very small screens via CSS class, swipe still works there */}
            <button
              style={{ ...styles.lightboxArrow, left: '16px' }}
              onClick={(e) => { e.stopPropagation(); prevPhoto() }}
              aria-label="Previous photo"
              className="lightbox-arrow"
            >
              ‹
            </button>

            <motion.img
              key={lightboxIndex}
              src={currentShoot.photos[lightboxIndex]}
              alt={`${activeShoot} preview ${lightboxIndex + 1}`}
              style={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.02 }}
            />

            <button
              style={{ ...styles.lightboxArrow, right: '16px' }}
              onClick={(e) => { e.stopPropagation(); nextPhoto() }}
              aria-label="Next photo"
              className="lightbox-arrow"
            >
              ›
            </button>

            <p style={styles.lightboxCounter}>{lightboxIndex + 1} / {currentShoot.photos.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const styles = {

  section: {
    // clamp() shrinks the side padding smoothly on narrow screens instead of
    // staying fixed at 60px, which is part of what was causing content to
    // overflow the right edge on mobile.
    padding: '120px clamp(16px, 5vw, 60px)',
    backgroundColor: '#0D0D0D',
    overflowX: 'hidden', // safety net: nothing inside can force horizontal scroll
    scrollMarginTop: '80px', // keeps content clear of the fixed navbar when we scroll here
  },

  header: {
    textAlign: 'center',
    marginBottom: '60px',
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
  },

  viewHeading: {
    color: '#F5F0E8',
    fontSize: '28px',
    fontFamily: 'Playfair Display, serif',
    marginBottom: '40px',
    textAlign: 'center',
  },

  // auto-fit + minmax lets the browser choose how many columns fit the
  // available width — this is the fix for the mobile overflow bug, since a
  // fixed repeat(2, 1fr) / repeat(3, 1fr) can compute wider than the screen.
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  shootsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  portraitGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '8px',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  landscapeGrid: {
    display: 'grid',
    // 480px minimum locks this to 2 columns within the 1100px max-width
    // container on desktop (matching Sports), while still dropping to 1
    // column automatically on narrow phone screens.
    gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
    gap: '16px',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  // Used for the "no photos yet" placeholder grid
  photosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  card: {
    backgroundColor: '#1a1a1a',
    cursor: 'pointer',
  },

  coverImage: {
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'center top',
  },

  imagePlaceholder: {
    width: '100%',
    backgroundColor: '#222222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #333',
    minHeight: '200px',
    boxSizing: 'border-box', // keeps the border from adding to the element's total width
  },

  placeholderText: {
    color: '#888',
    fontSize: '12px',
    letterSpacing: '2px',
    textAlign: 'center',
  },

  cardInfo: {
    padding: '16px',
  },

  cardCategory: {
    color: '#C9A84C',
    fontSize: '11px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '6px',
  },

  cardTitle: {
    color: '#F5F0E8',
    fontSize: '16px',
  },

  backButton: {
    background: 'none',
    border: '1px solid #C9A84C',
    color: '#C9A84C',
    padding: '10px 24px',
    fontSize: '12px',
    letterSpacing: '2px',
    cursor: 'pointer',
    marginBottom: '40px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  comingSoon: {
    color: '#888',
    fontSize: '14px',
    letterSpacing: '2px',
    textAlign: 'center',
  },

  photoWrapper: {
    position: 'relative', // lets photoSkeleton sit exactly on top of the img while it loads
    overflow: 'hidden',
    cursor: 'pointer',
  },

  portraitPhoto: {
    width: '100%',
    aspectRatio: '4/5',
    objectFit: 'cover',
    objectPosition: 'center top',
    display: 'block',
  },

  landscapePhoto: {
    width: '100%',
    display: 'block',
    objectFit: 'contain',
  },

  // Sits behind a single photo, filling the space until that photo's onLoad fires
  photoSkeleton: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#1a1a1a',
  },

  // ── Lightbox ──────────────────────────────────────────────────────────

  lightboxOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(13, 13, 13, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },

  lightboxImage: {
    maxWidth: '90vw',
    maxHeight: '85vh',
    objectFit: 'contain',
    display: 'block',
    cursor: 'default',
  },

  lightboxClose: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    color: '#F5F0E8',
    fontSize: '28px',
    cursor: 'pointer',
    lineHeight: 1,
  },

  lightboxArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#F5F0E8',
    fontSize: '48px',
    cursor: 'pointer',
    lineHeight: 1,
    padding: '0 10px',
  },

  lightboxCounter: {
    position: 'absolute',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#C9A84C',
    fontSize: '12px',
    letterSpacing: '2px',
  },
}

export default Portfolio
