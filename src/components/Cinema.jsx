"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Info, Play, Pause, StopCircle  } from "lucide-react"
import PlayButton from './PlayButton'
import { movies } from './moviesData'
import { series } from './seriesData'

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
    zIndex: 1, // Lowered z-index to be below the header
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
    aspectRatio: "2/3",
    overflow: "hidden",
    borderRadius: "4px",
    backgroundColor: "#000",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.05)",
    zIndex: 1, // Lowered z-index to be below the header
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
    transform: "translateY(4px)",
    opacity: 0,
    transition: "all 0.3s",
  },
  cardContentVisible: {
    transform: "translateY(0)",
    opacity: 1,
  },
  cardTitle: {
    fontWeight: 500,
    marginBottom: "0.25rem",
  },
  cardMeta: {
    fontSize: "0.75rem",
    opacity: 0.7,
    marginBottom: "0.5rem",
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
  },
}

// Media query styles to be applied with JavaScript
const getResponsiveStyles = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 1200
  const isMobile = width <= 480;

  if (isMobile) {
    return {
      isMobile: true,
      featured: {
        height: "auto",
        minHeight: "unset",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        marginBottom: "1rem",
        marginTop: "10rem", // Push banner lower for mobile
      },
      featuredImage: {
        position: "relative",
        width: "100%",
        height: "200px",
        minHeight: "200px",
        maxHeight: "220px",
        overflow: "hidden",
      },
      featuredImg: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "center",
      },
      featuredContent: {
        position: "static",
        maxWidth: "100%",
        padding: "1rem 0.75rem 1.5rem 0.75rem",
        background: "#000",
        zIndex: 2,
      },
      featuredTitle: {
        fontSize: "1.25rem",
        marginBottom: "0.5rem",
      },
      featuredDescription: {
        fontSize: "0.95rem",
        marginBottom: "1rem",
      },
      featuredGradientTop: { display: "none" },
      featuredGradientSide: { display: "none" },
      contentGrid: {
        gridTemplateColumns: "repeat(2, 1fr)", // Show 2 movies at a time for mobile
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

export default function CinemaContent() {
  const [activeCategory, setActiveCategory] = useState("movies")
  const [expandedCard, setExpandedCard] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles())
  const [scrolled, setScrolled] = useState(false)
  const [playingCardId, setPlayingCardId] = useState(null)
  const [bannerPlaying, setBannerPlaying] = useState(false)

  // Update responsive styles on window resize
  useEffect(() => {
    const handleResize = () => {
      setResponsiveStyles(getResponsiveStyles())
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

  const toggleExpanded = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null)
    } else {
      setExpandedCard(id)
    }
  }

  const getFeaturedContent = () => {
    if (activeCategory === "movies") {
      const movie = movies.find(m => m.id === "shutter-island");
      return {
        title: "Shutter Island",
        description: "Which would be worse - to live as a monster, or to die as a good man?",
        image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9a33dd8f-a0b9-40f3-9567-c620019b87c0_1024x435.jpeg",
        youtubeId: movie?.youtubeId
      };
    } else {
      const serie = series.find(s => s.id === "got");
      return {
        title: "Game of Thrones",
        description: "Can a man still be brave if he's afraid?<br />That is the only time a man can be brave.",
        image: "https://images3.alphacoders.com/710/710804.jpg",
        youtubeId: serie?.youtubeId
      };
    }
  };

  const featured = getFeaturedContent()

  // Merge base styles with responsive styles
  const mergeStyles = (baseStyle, responsiveKey) => {
    return responsiveStyles[responsiveKey] ? { ...baseStyle, ...responsiveStyles[responsiveKey] } : baseStyle
  }

  // Helper to check if mobile
  const isMobile = responsiveStyles.isMobile;

  return (
    <div style={netflixStyles.container}>
      {/* Featured content */}
      {isMobile ? (
        <section style={mergeStyles(netflixStyles.featured, "featured")}>  
          <div style={mergeStyles(netflixStyles.featuredImage, "featuredImage")}>  
            {bannerPlaying && featured.youtubeId ? (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div
                  onClick={() => setBannerPlaying(false)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    cursor: 'pointer',
                  }}
                />
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${featured.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={featured.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'relative', zIndex: 1 }}
                ></iframe>
                <button
                  onClick={() => setBannerPlaying(false)}
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
                  title="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            ) : (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  style={mergeStyles(netflixStyles.featuredImg, "featuredImg")}
                  loading="lazy"
                />
              </div>
            )}
          </div>
          <div style={mergeStyles(netflixStyles.featuredContent, "featuredContent")}>  
            <h2 style={mergeStyles(netflixStyles.featuredTitle, "featuredTitle")}>{featured.title}</h2>
            <p style={mergeStyles(netflixStyles.featuredDescription, "featuredDescription")}
              dangerouslySetInnerHTML={{ __html: featured.description }}></p>
            {featured.youtubeId && (
              <div style={{ marginTop: '1rem' }}>
                <PlayButton 
                  onClick={() => setBannerPlaying(!bannerPlaying)} 
                  label={bannerPlaying ? 'Stop' : 'Play'}
                  icon={bannerPlaying ? <StopCircle size={24} color="black" /> : undefined}
                />
              </div>
            )}
          </div>
        </section>
      ) : (
        <section style={mergeStyles(netflixStyles.featured, "featured")}>  
          <div style={mergeStyles(netflixStyles.featuredGradientTop, "featuredGradientTop")}></div>
          <div style={mergeStyles(netflixStyles.featuredGradientSide, "featuredGradientSide")}></div>
          <div style={mergeStyles(netflixStyles.featuredImage, "featuredImage")}>  
            {bannerPlaying && featured.youtubeId ? (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div
                  onClick={() => setBannerPlaying(false)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    cursor: 'pointer',
                  }}
                />
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${featured.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={featured.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'relative', zIndex: 1 }}
                ></iframe>
                <button
                  onClick={() => setBannerPlaying(false)}
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
                  title="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            ) : (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  style={mergeStyles(netflixStyles.featuredImg, "featuredImg")}
                  loading="lazy"
                />
              </div>
            )}
          </div>
          <div style={mergeStyles(netflixStyles.featuredContent, "featuredContent")}>  
            <h2 style={mergeStyles(netflixStyles.featuredTitle, "featuredTitle")}>{featured.title}</h2>
            <p style={mergeStyles(netflixStyles.featuredDescription, "featuredDescription")}
              dangerouslySetInnerHTML={{ __html: featured.description }}></p>
            {featured.youtubeId && (
              <div style={{ marginTop: '1.5rem' }}>
                <PlayButton 
                  onClick={() => setBannerPlaying(!bannerPlaying)} 
                  label={bannerPlaying ? 'Stop' : 'Play'}
                  icon={bannerPlaying ? <StopCircle size={24} color="black" /> : undefined}
                />
              </div>
            )}
            <div style={netflixStyles.featuredButtons}></div>
          </div>
        </section>
      )}

      {/* Category toggle */}
      <div style={netflixStyles.categoryToggleContainer}>
        <div style={netflixStyles.categoryToggle}>
          <button
            onClick={() => setActiveCategory("movies")}
            style={{
              ...netflixStyles.categoryButton,
              ...(activeCategory === "movies" ? netflixStyles.categoryButtonActive : {}),
            }}
          >
            Movies
          </button>
          <button
            onClick={() => setActiveCategory("series")}
            style={{
              ...netflixStyles.categoryButton,
              ...(activeCategory === "series" ? netflixStyles.categoryButtonActive : {}),
            }}
          >
            Web Series
          </button>
        </div>
      </div>

      {/* Content grid */}
      <section style={netflixStyles.contentSection}>
        <h3 style={netflixStyles.sectionTitle}>
          {activeCategory === "movies" ? "Movies" : "Web Series"}
        </h3>

        <div style={mergeStyles(netflixStyles.contentGrid, "contentGrid")}>
          {(activeCategory === "movies" ? movies : series).map((item) => (
            <div
              key={item.id}
              style={{
                ...netflixStyles.card,
                ...(hoveredCard === item.id ? netflixStyles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={netflixStyles.cardImg}
                  loading="lazy"
                />
              </div>

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
                <p style={netflixStyles.cardMeta}>
                  {item.year} • {item.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}