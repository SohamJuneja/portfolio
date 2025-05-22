"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Info, Play } from "lucide-react"

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
    backgroundImage: "linear-gradient(to top, #000, transparent 60%, rgba(0,0,0,0.7))", // Added dark top overlay for header visibility
    zIndex: 1, // Lowered z-index to be below the header
  },
  featuredGradientSide: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(to right, #000 5%, transparent 50%)",
    zIndex: 1, // Lowered z-index to be below the header
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
    backgroundColor: "#333",
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
    marginTop: "0.5rem",
    padding: "0.5rem",
    fontSize: "0.75rem",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(4px)",
    borderRadius: "4px",
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

export default function CinemaContent() {
  const [activeCategory, setActiveCategory] = useState("movies")
  const [expandedCard, setExpandedCard] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles())
  const [scrolled, setScrolled] = useState(false)

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

  const movies = [
    {
      id: "shawshank",
      title: "Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      description:
        "I'll never forget watching this on a cold winter night in 2009. Stayed up till 3am because I just couldn't stop. Still get goosebumps when Andy crawls through that sewage pipe. Pure cinema magic that hits different every time I watch it.",
    },
    {
      id: "masaan",
      title: "Masaan",
      year: 2015,
      genre: "Drama",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Masaan_poster.jpg",
      description:
        "Stumbled upon this gem while going through an indie film phase. That scene with Devi by the river? Tears. Every. Single. Time. Vicky Kaushal deserved all the awards for this one. Varanasi never looked so hauntingly beautiful.",
    },
    {
      id: "shutter-island",
      title: "Shutter Island",
      year: 2010,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "Watched this on a first date and spent the next 3 hours arguing about that ending. Is he crazy? Is he sane? Still can't decide years later. DiCaprio went all in on this one and my mind was properly blown.",
    },
    {
      id: "fight-club",
      title: "Fight Club",
      year: 1999,
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
      description:
        "First rule of Fight Club? I've broken it about 200 times because I CAN'T STOP TALKING ABOUT THIS FILM. Watched it as an angry teen and it spoke to me. Watched it as an adult and realized I missed the point entirely. That's what makes it genius.",
    },
    {
      id: "train-to-busan",
      title: "Train to Busan",
      year: 2016,
      genre: "Horror",
      image: "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_.jpg",
      description:
        "Started watching this on a plane (bad idea) and had to pause because I was literally screaming. Never felt so much for a zombie movie character before. That finale had me crying in the middle of a packed flight. No regrets.",
    },
    {
      id: "arrival",
      title: "Arrival",
      year: 2016,
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
      description:
        "Watched this after a brutal physics exam in college. My brain was fried, yet this film somehow made me think HARDER. That time-language concept kept me up for days. Amy Adams was robbed of an Oscar. Absolutely robbed.",
    },
    {
      id: "article-15",
      title: "Article 15",
      year: 2019,
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BYmNlMWYzN2MtODNhOC00ZTdhLTk3NzAtNzRkMTg3MWE4ZmJhXkEyXkFqcGc@._V1_.jpg",
      description: "Watched this with my dad and we both sat in silence for a full hour after it ended. Just processing. Ayushmann deserves all the credit for taking on this role. Still gives me chills when I think about those night scenes.",
    },
    {
      id: "talvar",
      title: "Talvar",
      year: 2015,
      genre: "Crime",
      image: "https://upload.wikimedia.org/wikipedia/en/9/91/TalvarFilmPoster.jpg",
      description:
        "Binged this after following the actual case for years. Literally yelled at my screen multiple times. Irrfan Khan was just... *chef's kiss*. That roundtable scene is cinematic perfection. Still haunts me how real it all felt.",
    },
    {
      id: "prisoners",
      title: "Prisoners",
      year: 2013,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg",
      description: "Watched this alone at 2am (huge mistake). Couldn't sleep for two days straight. Hugh Jackman's rage is TERRIFYING. That maze reveal? The whistle? The hospital drive? Pure anxiety in film form. Still not over it.",
    },
  ]

  const series = [
    {
      id: "got",
      title: "Game of Thrones",
      year: "2011-2019",
      genre: "Fantasy",
      image: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      description:
        "Spent my entire college years obsessing over this. Had actual fights with friends over who should sit on the Iron Throne. Season 8 almost ruined our friendship group. Still, those first 4 seasons? *chef's kiss* Nothing compares.",
    },
    {
      id: "breaking-bad",
      title: "Breaking Bad",
      year: "2008-2013",
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
      description:
        "Binged this entire series in ONE WEEK during semester break. My roommate thought I'd lost my mind because I kept shouting 'YEAH SCIENCE!' randomly. Walter White's transformation is still the greatest character arc I've ever witnessed.",
    },
    {
      id: "dark",
      title: "Dark",
      year: "2017-2020",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg",
      description:
        "WTF WAS THIS?! Watched season 1 in 2018 and literally had to make a family tree diagram on my wall to keep track. My roommates thought I'd gone full conspiracy theorist. Still the most mind-bending show ever made. Worth every confused minute.",
    },
    {
      id: "stranger-things",
      title: "Stranger Things",
      year: "2016-Present",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      description:
        "Started this during lockdown and became unhealthily attached to these kids. Nearly had a breakdown during that season 4 finale with Max. Even bought a Scoops Ahoy uniform for Halloween. No regrets. Dustin is my spirit animal.",
    },
    {
      id: "asur",
      title: "Asur",
      year: "2020-Present",
      genre: "Thriller",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUzmy6wHVQGrFminEtkNMLjzf1_qBsi9CfA&s",
      description: "Found this during a 3am insomnia doom scroll and THANK GOD I DID. Arshad Warsi playing a forensic expert? Genius casting. That mythology-meets-crime angle blew my mind. Finished both seasons in 2 days and now I'm empty inside waiting for more.",
    },
    {
      id: "scam-1992",
      title: "Scam 1992",
      year: "2020",
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BNGRkOTVjODgtNTBmZS00MDQ3LWE3ZjQtM2ZiNDQ3OWJkMjM2XkEyXkFqcGc@._V1_.jpg",
      description:
        "Never thought I'd be obsessed with a show about the stock market, yet here I am, three rewatches later. That theme song lives rent-free in my head. Pratik Gandhi's swagger as Harshad Mehta? *chef's kiss* Risk hai toh ishq hai!",
    },
    {
      id: "railway-men",
      title: "Railway Men",
      year: "2023",
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BZDBkZjhhYWEtZTgwZS00OWY3LWJkNzYtNTkxNWY1MDhjMDk2XkEyXkFqcGc@._V1_.jpg",
      description:
        "Watched this after learning about the Bhopal disaster in school. Had to pause multiple times because I was sobbing too hard. Kay Kay Menon and Divyenndu absolutely destroyed me. That gas leak scene will haunt me forever.",
    },
    {
      id: "sacred-games",
      title: "Sacred Games",
      year: "2018-2019",
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BMjJlMjJlMzYtNmU5Yy00N2MwLWJmMjEtNWUwZWIyMGViZDgyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg",
      description:
        "Started this during finals week (terrible idea) and failed two exams because I couldn't stop watching. Worth it. Nawazuddin as Ganesh Gaitonde is legendary. 'Kabhi kabhi lagta hai apun hi bhagwan hai' is now my life motto.",
    },
    {
      id: "fleabag",
      title: "Fleabag",
      year: "2016-2019",
      genre: "Comedy",
      image: "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_.jpg",
      description:
        "The hot priest. THE HOT PRIEST. I watched season 2 in one sitting and then immediately rewatched it. That fourth wall breaking? The guinea pig café? The confession scene? Phoebe Waller-Bridge is my god now. This show broke me in the best possible way.",
    },
  ]

  const toggleExpanded = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null)
    } else {
      setExpandedCard(id)
    }
  }

  const getFeaturedContent = () => {
    if (activeCategory === "movies") {
      return {
        title: "Shawshank Redemption",
        description:
          "The movie that changed my life. I first watched it during a rough patch in college, and Andy's resilience through impossible circumstances hit me like a ton of bricks. 'Hope is a good thing, maybe the best of things' became my personal mantra. Twenty rewatches later, I still tear up when Andy and Red meet on that beach. Pure cinematic perfection.",
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      }
    } else {
      return {
        title: "Breaking Bad",
        description:
          "The show that ruined all other TV for me. Seriously. I watched the pilot on a whim in 2012 and proceeded to call in sick to work for the next week to binge all four seasons. Bryan Cranston's transformation from meek chemistry teacher to terrifying drug kingpin broke my brain. That 'I am the one who knocks' speech? Chills. Every. Single. Time. Nothing will ever compare.",
        image: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
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
            <button style={netflixStyles.buttonPrimary}>
              <Play size={18} color="#000" />
              <span>Play</span>
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
          {activeCategory === "movies" ? "Movies That Wrecked Me" : "Series That Consumed My Life"}
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
                <p style={netflixStyles.cardMeta}>
                  {item.year} • {item.genre}
                </p>

                <button onClick={() => toggleExpanded(item.id)} style={netflixStyles.cardButton}>
                  {expandedCard === item.id ? (
                    <>
                      Less Info <ChevronUp size={14} />
                    </>
                  ) : (
                    <>
                      More Info <ChevronDown size={14} />
                    </>
                  )}
                </button>

                {expandedCard === item.id && (
                  <div style={netflixStyles.cardExpanded}>
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}