"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Info, Play, Volume2, Heart, Share2 } from "lucide-react"

// Netflix-inspired styling directly in the component
const netflixStyles = {
  container: {
    minHeight: "100%",
    backgroundColor: "#000",
    color: "#fff",
    paddingTop: "0px", // Added top padding to prevent collision with header
  },
  featured: {
    position: "relative",
    height: "70vh",
    marginBottom: "2rem",
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
    objectFit: "cover",
    objectPosition: "center 20%",
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
    objectFit: "cover",
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
    marginTop: "0.5rem",
    padding: "0.5rem",
    fontSize: "0.75rem",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(4px)",
    borderRadius: "4px",
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

export default function MusicContent() {
  const [activeCategory, setActiveCategory] = useState("subcontinental")
  const [expandedCard, setExpandedCard] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles())
  const [scrolled, setScrolled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)

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

  const indianMusic = [
    {
      id: "bayaan-suno",
      title: "Suno",
      artist: "Bayaan",
      image: "https://i.scdn.co/image/ab67616d0000b2737f8011441f4d43a9a6bba9d5"
    },
    {
      id: "local-train-aalas",
      title: "Aalas Ka Pedh",
      artist: "The Local Train",
      image: "https://c.saavncdn.com/111/Aalas-Ka-Pedh-Hindi-2015-20231005005130-500x500.jpg"
    },
    {
      id: "yellow-diary-izafa",
      title: "Izafa",
      artist: "The Yellow Diary",
      image: "https://c.saavncdn.com/729/Izafa-Punjabi-2018-20181115101503-500x500.jpg"
    },
    {
      id: "bayaan-4saal",
      title: "4 Saal",
      artist: "Bayaan",
      image: "https://i.scdn.co/image/ab67616d0000b273f9ea670afa6ad3f5cc553f20"
    },
    {
      id: "krsna-yours-truly",
      title: "Yours Truly",
      artist: "KRSNA",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/600x600bf-60.jpg"
    },
    {
      id: "krsna-still-here",
      title: "Still Here",
      artist: "KRSNA",
      image: "https://i.scdn.co/image/ab67616d0000b2737bb23ac6330733d95888e612"
    },
    {
      id: "krsna-far-from-over",
      title: "Far From Over",
      artist: "KRSNA",
      image: "https://i.scdn.co/image/ab67616d0000b27383e257b20f473f0063cdd351"
    },
    {
      id: "seedhe-maut-lunch-break",
      title: "Lunch Break",
      artist: "Seedhe Maut",
      image: "https://images.genius.com/2796bb670394d0cee1014739773c995f.1000x1000x1.jpg"
    },
    {
      id: "seedhe-maut-n",
      title: "N",
      artist: "Seedhe Maut",
      image: "https://images.genius.com/855b187ebe6410db091f94806b605d67.1000x1000x1.jpg"
    },
    {
      id: "aashiqui-2",
      title: "Aashiqui 2",
      artist: "Various Artists",
      image: "https://m.media-amazon.com/images/S/pv-target-images/f660a95899f7324b8593291348f78f551f32c1a40304042a43195ca71eb92931.jpg"
    },
    {
      id: "ek-villain",
      title: "Ek Villain",
      artist: "Various Artists",
      image: "https://c.saavncdn.com/151/Ek-Villain-Hindi-2014-500x500.jpg"
    },
    {
      id: "half-girlfriend",
      title: "Half Girlfriend",
      artist: "Various Artists",
      image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Half_Girlfriend_Poster.jpg"
    },
    {
      id: "ghajini",
      title: "Ghajini",
      artist: "Various Artists",
      image: "https://m.media-amazon.com/images/M/MV5BMjk3ZmQyYjAtZTgwZS00YjliLTljZmEtMDU1Nzk1Y2NhYmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "nusrat-fateh-ali-khan",
      title: "Greatest Hits",
      artist: "Nusrat Fateh Ali Khan",
      image: "https://i.scdn.co/image/ab67616d0000b273d1a78643014371ca49d7cb22"
    },
    {
      id: "sharry-mann-aate-di",
      title: "Aate Di Chiri",
      artist: "Sharry Mann",
      image: "https://c.saavncdn.com/634/Aate-Di-Chiri-Punjabi-2012-500x500.jpg"
    },
    {
      id: "sidhu-pbx1",
      title: "PBX 1",
      artist: "Sidhu Moose Wala",
      image: "https://upload.wikimedia.org/wikipedia/en/0/03/PBX_1_%28album%29.jpg"
    },
    {
      id: "sukha-2003",
      title: "2003",
      artist: "Sukha",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/21/6a/ec/216aec26-9066-34c8-bfbb-943d7aafd5f7/artwork.jpg/1200x630bb.jpg"
    },
    {
      id: "sukha-2003",
      title: "The Season",
      artist: "Prophec",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b6/7c/9e/b67c9e77-62bd-4cc4-9e86-e202969743bb/5055964338213.jpg/1200x1200bb.jpg"
    }
  ]

  const internationalMusic = [
    {
      id: "weeknd-blinding-lights",
      title: "Blinding Lights",
      artist: "The Weeknd",
      year: 2019,
      genre: ["Synth-pop", "R&B"],
      image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
      description:
        "This song defined 2020 for me. Those opening synths instantly transport me back to lockdown days, dancing alone in my room at 2AM. The Weeknd really captured that perfect blend of nostalgia and futuristic vibes. Still gets me hyped every single time.",
      inPlaylist: true,
    },
    {
      id: "taylor-swift-august",
      title: "august",
      artist: "Taylor Swift",
      year: 2020,
      genre: ["Indie Folk", "Pop"],
      image: "https://i.scdn.co/image/ab67616d0000b273c288028c2592f400dd0b9233",
      description:
        "Never considered myself a Swiftie until folklore dropped. This song especially just WRECKED me. 'August slipped away like a bottle of wine' is poetry. The way she captures that feeling of a fleeting summer romance is just *chef's kiss*. Pure storytelling magic.",
      inPlaylist: false,
    },
    {
      id: "kendrick-alright",
      title: "Alright",
      artist: "Kendrick Lamar",
      year: 2015,
      genre: ["Hip-Hop", "Rap"],
      image: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1",
      description:
        "This song got me through some DARK times. That hook - 'We gon' be alright' - became my personal mantra during finals week. Kendrick's ability to blend social commentary with something so catchy and uplifting is unmatched. True genius at work.",
      inPlaylist: true,
    },
    {
      id: "arctic-monkeys-505",
      title: "505",
      artist: "Arctic Monkeys",
      year: 2007,
      genre: ["Indie Rock", "Alternative"],
      image: "https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe5050a5becd6c",
      description:
        "That moment when the drums kick in? CHILLS. Every. Single. Time. Found this during my first year of college and it's been my go-to late night driving song ever since. Alex Turner's lyrics are just poetry - 'I'm always just about to go and spoil a surprise' hits way too close to home.",
      inPlaylist: true,
    },
    {
      id: "dua-lipa-levitating",
      title: "Levitating",
      artist: "Dua Lipa",
      year: 2020,
      genre: ["Pop", "Disco"],
      image: "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946",
      description:
        "THE ultimate mood booster! Impossible to be sad while this is playing. That disco-inspired beat just makes you want to dance no matter where you are. I've definitely embarrassed myself dancing to this in public places more times than I can count. Worth it every time.",
      inPlaylist: false,
    },
    {
      id: "frank-ocean-nights",
      title: "Nights",
      artist: "Frank Ocean",
      year: 2016,
      genre: ["R&B", "Alternative"],
      image: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
      description:
        "That beat switch at exactly 3:30? GENIUS. Pure genius. This song feels like two completely different emotional experiences. Frank Ocean really created something special with Blonde, and this track is the centerpiece. Perfect for late night overthinking sessions.",
      inPlaylist: true,
    },
    {
      id: "radiohead-weird-fishes",
      title: "Weird Fishes/Arpeggi",
      artist: "Radiohead",
      year: 2007,
      genre: ["Alternative", "Art Rock"],
      image: "https://i.scdn.co/image/ab67616d0000b273de3c04b5fc750b68899b20a9",
      description:
        "Discovered this during a particularly existential phase in college and it just CLICKED. Those hypnotic arpeggios and Thom Yorke's ethereal vocals create this underwater feeling that's hard to describe. 'I hit the bottom and escape' - still gives me goosebumps.",
      inPlaylist: false,
    },
    {
      id: "billie-eilish-happier-than-ever",
      title: "Happier Than Ever",
      artist: "Billie Eilish",
      year: 2021,
      genre: ["Pop", "Alternative"],
      image: "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
      description:
        "That moment when the song transforms from quiet ballad to full-on rock anthem? CATHARSIS. Pure catharsis. Screaming 'YOU MADE ME HATE THIS CITY' at the top of my lungs has been therapeutic on multiple occasions. Billie really captured the essence of post-breakup anger perfectly.",
      inPlaylist: true,
    },
  ]

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
      }
    } else {
      return {
        title: "Daft Punk",
        image: "https://c4.wallpaperflare.com/wallpaper/128/446/416/daft-punk-blue-hd-wallpaper-preview.jpg",
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
          <img src={featured.image || "/placeholder.svg"} alt={featured.title} style={netflixStyles.featuredImg} />
        </div>

        <div style={mergeStyles(netflixStyles.featuredContent, "featuredContent")}>
          <h2 style={mergeStyles(netflixStyles.featuredTitle, "featuredTitle")}>{featured.title}</h2>
          <p style={mergeStyles(netflixStyles.featuredDescription, "featuredDescription")}>{featured.description}</p>
          <div style={netflixStyles.featuredButtons}>
            <button style={netflixStyles.buttonPrimary} onClick={() => togglePlay(featured.id)}>
              {isPlaying && currentTrack === featured.id ? (
                <>
                  <Volume2 size={18} color="#000" />
                  <span>Now Playing</span>
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
              <img src={item.image || "/placeholder.svg"} alt={item.title} style={netflixStyles.cardImg} />

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