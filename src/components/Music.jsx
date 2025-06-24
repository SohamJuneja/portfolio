"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, Info, Play, Volume2, Heart, Share2, Pause } from "lucide-react"
import indianMusic from './indianMusic';
import internationalMusic from './internationalMusic';

// Netflix-inspired styling directly in the component
const netflixStyles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    paddingTop: "0px",
    position: "relative",
    overflow: "hidden"
  },
  featured: {
    position: "relative",
    height: "70vh",
    marginBottom: "2rem",
    backgroundColor: "#000"
  },
  featuredGradientTop: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
    zIndex: 1,
  },
  featuredGradientSide: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, transparent 60%)",
    zIndex: 1,
  },
  featuredImage: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  featuredImg: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    objectPosition: "center",
  },
  featuredContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
    padding: "3rem",
    maxWidth: "50%",
  },
  featuredTitle: {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "1rem",
  },
  featuredDescription: {
    fontSize: "1rem",
    marginBottom: "1.5rem",
    opacity: 0.9,
  },
  featuredButtons: {
    display: "flex",
    gap: "1rem",
  },
  buttonPrimary: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1.5rem",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "4px",
    fontWeight: 600,
    transition: "all 0.2s",
    cursor: "pointer",
    border: "none",
    minWidth: "120px", // Fixed minimum width to prevent size changes
    justifyContent: "center", // Center content
  },
  buttonSecondary: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1.5rem",
    backgroundColor: "rgba(109, 109, 110, 0.7)",
    color: "#fff",
    borderRadius: "4px",
    fontWeight: 600,
    transition: "all 0.2s",
    cursor: "pointer",
    border: "none",
  },
  categoryToggleContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    marginBottom: "2rem",
  },
  categoryToggle: {
    display: "inline-flex",
    backgroundColor: "#333",
    borderRadius: "9999px",
    padding: "0.25rem",
  },
  categoryButton: {
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "rgba(255, 255, 255, 0.7)",
    transition: "all 0.2s",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  categoryButtonActive: {
    backgroundColor: "#e50914",
    color: "#fff",
  },
  contentSection: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    marginBottom: "3rem",
    backgroundColor: "#000"
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: "1rem",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "1rem",
  },
  card: {
    position: "relative",
    aspectRatio: "1/1", // Square for album covers
    overflow: "hidden",
    borderRadius: "4px",
    backgroundColor: "#333",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.05)",
    zIndex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    transition: "transform 0.3s",
  },
  cardOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), transparent)",
    opacity: 0,
    transition: "opacity 0.3s",
  },
  cardOverlayVisible: {
    opacity: 1,
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "0.75rem",
    background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
    opacity: 0,
    transition: "opacity 0.3s",
  },
  cardContentVisible: {
    opacity: 1,
  },
  cardTitle: {
    fontWeight: 500,
    marginBottom: "0.25rem",
    fontSize: "0.875rem",
  },
  cardMeta: {
    fontSize: "0.75rem",
    opacity: 0.7,
  },
  cardButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    width: "100%",
    padding: "0.25rem 0.5rem",
    fontSize: "0.75rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(4px)",
    borderRadius: "4px",
    transition: "background-color 0.2s",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  cardExpanded: {
    padding: "0.75rem",
    fontSize: "0.75rem",
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Darker background
    backdropFilter: "blur(5px)", // Slightly more blur
    borderRadius: "4px",
    // Removed marginTop as it will be positioned absolutely
  },
  audioControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "0.5rem",
    padding: "0.25rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "4px",
  },
  audioProgress: {
    flex: 1,
    height: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "2px",
    margin: "0 0.5rem",
    position: "relative",
  },
  audioProgressFill: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#e50914",
    borderRadius: "2px",
  },
  playlistBadge: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    backgroundColor: "#e50914",
    color: "white",
    fontSize: "0.625rem",
    padding: "0.125rem 0.375rem",
    borderRadius: "2px",
    fontWeight: "bold",
    zIndex: 10,
  },
  genrePill: {
    display: "inline-block",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    fontSize: "0.625rem",
    padding: "0.125rem 0.375rem",
    borderRadius: "2px",
    marginRight: "0.25rem",
    marginBottom: "0.25rem",
  },
}

// Media query styles to be applied with JavaScript
const getResponsiveStyles = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 1200

  if (width <= 480) {
    return {
      featured: {
        height: "40vh",
      },
      featuredContent: {
        maxWidth: "100%",
        padding: "1rem",
      },
      featuredTitle: {
        fontSize: "1.5rem",
      },
      contentGrid: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      buttonPrimary: {
        minWidth: "80px", // Smaller minimum width for mobile
        width: "80px", // Fixed width to prevent size changes
        padding: "0.4rem 0.8rem",
        fontSize: "0.8rem",
        gap: "0.25rem", // Reduce gap between icon and text
        justifyContent: "center", // Center content
      },
    }
  } else if (width <= 768) {
    return {
      featured: {
        height: "50vh",
      },
      featuredContent: {
        maxWidth: "90%",
        padding: "1.5rem",
      },
      featuredTitle: {
        fontSize: "2rem",
      },
      featuredDescription: {
        fontSize: "0.875rem",
      },
      contentGrid: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      buttonPrimary: {
        minWidth: "100px",
        width: "100px", // Fixed width to prevent size changes
        padding: "0.45rem 1.25rem",
        fontSize: "0.875rem",
        justifyContent: "center", // Center content
      },
    }
  } else if (width <= 1024) {
    return {
      contentGrid: {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    }
  } else {
    return {
      contentGrid: {
        gridTemplateColumns: "repeat(5, 1fr)",
      },
    }
  }
}

export default function MusicContent() {
  const [activeCategory, setActiveCategory] = useState("subcontinental")
  const [expandedCard, setExpandedCard] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles())
  const [scrolled, setScrolled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)
  const [showYouTubeEmbed, setShowYouTubeEmbed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [playingSongId, setPlayingSongId] = useState(null)

  // Update responsive styles on window resize
  useEffect(() => {
    const handleResize = () => {
      const newStyles = getResponsiveStyles()
      setResponsiveStyles(newStyles)
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 480)
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track scroll position for header compatibility
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle YouTube embed toggle
  const toggleYouTubeEmbed = () => {
    setShowYouTubeEmbed(!showYouTubeEmbed)
  }

  const toggleExpanded = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null)
    } else {
      setExpandedCard(id)
    }
  }

  const togglePlay = (id) => {
    if (currentTrack === id && isPlaying) {
      setIsPlaying(false)
    } else {
      setCurrentTrack(id)
      setIsPlaying(true)
    }
  }

  const getFeaturedContent = () => {
    if (activeCategory === "subcontinental") {
      return {
        title: "Bayaan",
        image: "https://lh3.googleusercontent.com/FVhxdltn23ryETRuSEEIl109CvUaiT1nXYBQ503BstnPaO0hRiOPbw-IMeEvX-ni2WZ4K_Kqk6Z4Sg=w2880-h1200-p-l90-rj",
        youtubeId: "bhURPd3ZNGc" // Bayaan - Suno
      }
    } else {
      return {
        title: "Daft Punk",
        image: "https://c4.wallpaperflare.com/wallpaper/128/446/416/daft-punk-blue-hd-wallpaper-preview.jpg",
        youtubeId: "TCd6PfxOy0Y" // Daft Punk - Veridis Quo
      }
    }
  }

  const featured = getFeaturedContent()

  // Merge base styles with responsive styles
  const mergeStyles = (baseStyle, responsiveKey) => {
    return responsiveStyles[responsiveKey] ? { ...baseStyle, ...responsiveStyles[responsiveKey] } : baseStyle
  }

  return (
    <div style={netflixStyles.container}>
      {/* Featured content */}
      <section style={mergeStyles(netflixStyles.featured, "featured")}>
        <div style={netflixStyles.featuredGradientTop}></div>
        <div style={netflixStyles.featuredGradientSide}></div>

        <div style={netflixStyles.featuredImage}>
          {showYouTubeEmbed ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${featured.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={featured.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={netflixStyles.featuredImg}
            />
          ) : (
            <img src={featured.image || "/placeholder.svg"} alt={featured.title} style={netflixStyles.featuredImg} />
          )}
        </div>

        <div style={mergeStyles(netflixStyles.featuredContent, "featuredContent")}>
          <h2 style={mergeStyles(netflixStyles.featuredTitle, "featuredTitle")}>{featured.title}</h2>
          <p style={mergeStyles(netflixStyles.featuredDescription, "featuredDescription")}>{featured.description}</p>
          <div style={netflixStyles.featuredButtons}>
            <button 
              style={mergeStyles(netflixStyles.buttonPrimary, "buttonPrimary")} 
              onClick={toggleYouTubeEmbed}
            >
              {showYouTubeEmbed ? (
                <>
                  {!isMobile && <Volume2 size={18} color="#000" />}
                  <span>{isMobile ? "Playing" : "Now Playing"}</span>
                </>
              ) : (
                <>
                  <Play size={18} color="#000" />
                  <span>Play</span>
                </>
              )}
            </button>
            <button style={netflixStyles.buttonSecondary}>
              <Info size={18} />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category toggle */}
      <div style={netflixStyles.categoryToggleContainer}>
        <div style={netflixStyles.categoryToggle}>
          <button
            onClick={() => setActiveCategory("subcontinental")}
            style={{
              ...netflixStyles.categoryButton,
              ...(activeCategory === "subcontinental" ? netflixStyles.categoryButtonActive : {}),
            }}
          >
            Subcontinental
          </button>
          <button
            onClick={() => setActiveCategory("international")}
            style={{
              ...netflixStyles.categoryButton,
              ...(activeCategory === "international" ? netflixStyles.categoryButtonActive : {}),
            }}
          >
            International
          </button>
        </div>
      </div>

      {/* Content grid */}
      <section style={netflixStyles.contentSection}>
        <h3 style={netflixStyles.sectionTitle}>
          {activeCategory === "subcontinental" ? "" : ""}
        </h3>

        <div style={mergeStyles(netflixStyles.contentGrid, "contentGrid")}>
          {(activeCategory === "subcontinental" ? indianMusic : internationalMusic).map((item) => (
            <div
              key={item.id}
              style={{
                ...netflixStyles.card,
                ...(hoveredCard === item.id ? netflixStyles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {item.id === playingSongId ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    onClick={e => { e.stopPropagation(); setPlayingSongId(null); }}
                    style={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      background: 'rgba(0,0,0,0.7)',
                      border: 'none',
                      borderRadius: '50%',
                      width: 32,
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 3
                    }}
                    title="Pause/Close"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>
              ) : (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img src={item.image || "/placeholder.svg"} alt={item.title} style={netflixStyles.cardImg} />
                  {item.youtubeId && (
                    <button
                      onClick={e => { e.stopPropagation(); setPlayingSongId(item.id); }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'rgba(0,0,0,0.6)',
                        border: 'none',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 2
                      }}
                    >
                      <Play size={24} color="#fff" />
                    </button>
                  )}
                </div>
              )}

              <div
                style={{
                  ...netflixStyles.cardOverlay,
                  ...(hoveredCard === item.id ? netflixStyles.cardOverlayVisible : {}),
                }}
              ></div>

              <div
                style={{
                  ...netflixStyles.cardContent,
                  ...(hoveredCard === item.id ? netflixStyles.cardContentVisible : {}),
                }}
              >
                <h4 style={netflixStyles.cardTitle}>{item.title}</h4>
                <p style={netflixStyles.cardMeta}>{item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}