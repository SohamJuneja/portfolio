"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Info, Play, Pause, StopCircle  } from "lucide-react"
import PlayButton from './PlayButton'

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

  const movies = [
    {
      id: "shawshank",
      title: "The Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
    },
    {
      id: "shutter-island",
      title: "Shutter Island",
      year: 2010,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      youtubeId: "XkUwpoXr85M"
    },
    {
      id: "memento",
      title: "Memento",
      year: 2000,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
      id: "prestige",
      title: "The Prestige",
      year: 2006,
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg"
    },
    {
      id: "train-to-busan",
      title: "Train to Busan",
      year: 2016,
      genre: "Horror",
      image: "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_.jpg"
    },
    {
      id: "gone-girl",
      title: "Gone Girl",
      year: 2014,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg"
    },
    {
      id: "inception",
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      id: "interstellar",
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      id: "tenet",
      title: "Tenet",
      year: 2020,
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
    },
    {
      id: "arrival",
      title: "Arrival",
      year: 2016,
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg"
    },
    {
      id: "udaan",
      title: "Udaan",
      year: 2010,
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BNzgxMzExMzUwNV5BMl5BanBnXkFtZTcwMDc2MjUwNA@@._V1_.jpg"
    },
    {
      id: "tumbbad",
      title: "Tumbbad",
      year: 2018,
      genre: "Horror",
      image: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_.jpg"
    },
    {
      id: "article-15",
      title: "Article 15",
      year: 2019,
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BYmNlMWYzN2MtODNhOC00ZTdhLTk3NzAtNzRkMTg3MWE4ZmJhXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "primer",
      title: "Primer",
      year: 2004,
      genre: "Sci-Fi",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f7/Primer_%282004_film_poster%29.jpg"
    },
    {
      id: "fight-club",
      title: "Fight Club",
      year: 1999,
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"
    },
    {
      id: "prisoners",
      title: "Prisoners",
      year: 2013,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg"
    },
    {
      id: "badla",
      title: "Badla",
      year: 2019,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BMDEyNjI2NTktZmJlMy00Njk5LTk2OGQtMjI5NTAwNWRiZmFlXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "parasite",
      title: "Parasite",
      year: 2019,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
    },
    {
      id: "no-smoking",
      title: "No Smoking",
      year: 2007,
      genre: "Drama",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d4/No_Smoking_%28Poster%29.jpg"
    },
    {
      id: "departed",
      title: "The Departed",
      year: 2006,
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg"
    },
    {
      id: "joker",
      title: "Joker",
      year: 2019,
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
      id: "host",
      title: "The Host",
      year: 2006,
      genre: "Horror",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6XdadgVHLLa549xR-734Jr-4yV-iuRmb3g&s"
    },
    {
      id: "wailing",
      title: "The Wailing",
      year: 2016,
      genre: "Horror",
      image: "https://m.media-amazon.com/images/M/MV5BODkwMTgxNjA2NF5BMl5BanBnXkFtZTgwMDc0OTcwOTE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "wednesday",
      title: "A Wednesday",
      year: 2008,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BOTcwMzdiMWItMjZlOS00MzAzLTg5OTItNTA4OGYyMjBhMmRiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    },
    {
      id: "coherence",
      title: "Coherence",
      year: 2013,
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BNzQ3ODUzNDY2M15BMl5BanBnXkFtZTgwNzg0ODY2MTE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "andhadhun",
      title: "Andhadhun",
      year: 2018,
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg"
    },
    {
      id: "oldboy",
      title: "Oldboy",
      year: 2003,
      genre: "Action",
      image: "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg"
    },
    {
      id: "raman-raghav",
      title: "Raman Raghav 2.0",
      year: 2016,
      genre: "Crime",
      image: "https://upload.wikimedia.org/wikipedia/en/5/53/Raman_Raghav_2.png"
    },
    {
      id: "drishyam",
      title: "Drishyam",
      year: 2015,
      genre: "Thriller",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Drishyam_2015_film.jpg/250px-Drishyam_2015_film.jpg"
    },
    {
      id: "get-out",
      title: "Get Out",
      year: 2017,
      genre: "Horror",
      image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg"
    },
    {
      id: "mist",
      title: "The Mist",
      year: 2007,
      genre: "Horror",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a1/The_Mist_poster.jpg"
    },
    {
      id: "action-hero",
      title: "An Action Hero",
      year: 2022,
      genre: "Action",
      image: "https://m.media-amazon.com/images/M/MV5BNWUzNzljNjMtYTdiZS00MWQ2LWFkZWItYTM0MzVmZGFhYzNjXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "guilty",
      title: "The Guilty",
      year: 2021,
      genre: "Thriller",
      image: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUL3lGqmL4lNOKWRxYPZ4YI0c2SsnAfQQD8IwDoOfH9Hd7wYv0ztpNQ_N5NOveQY4IAzxyOJy8Tg3kYgxoyKBjuHwJ7zM0Hoe4-PaHJCsFwbJzmlmizscQzaSFQLLnu9kRFNAQ.jpg?r=f9b"
    },
    {
      id: "everything-everywhere",
      title: "Everything Everywhere All at Once",
      year: 2022,
      genre: "Sci-Fi",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg"
    },
    {
      id: "invention-of-lying",
      title: "The Invention of Lying",
      year: 2009,
      genre: "Comedy",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCu4Q3nEgLPHMPWeyuA0CseRu8BuyY7tOlBQ&s"
    },
    {
      id: "predestination",
      title: "Predestination",
      year: 2014,
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg"
    },
    {
      id: "talvar",
      title: "Talvar",
      year: 2015,
      genre: "Crime",
      image: "https://upload.wikimedia.org/wikipedia/en/9/91/TalvarFilmPoster.jpg"
    },
    {
      id: "znmd",
      title: "Zindagi Na Milegi Dobara",
      year: 2011,
      genre: "Drama",
      image: "https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg"
    },
    {
      id: "wolf-of-wall-street",
      title: "The Wolf of Wall Street",
      year: 2013,
      genre: "Biography",
      image: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg"
    },
    {
      id: "12th-fail",
      title: "12th Fail",
      year: 2023,
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BNTE3OTIxZDYtNjA0NC00N2YxLTg1NGQtOTYxNmZkMDkwOWNjXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "talaash",
      title: "Talaash",
      year: 2012,
      genre: "Thriller",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f3/Talaash_poster.jpg"
    },
    {
      id: "lootera",
      title: "Lootera",
      year: 2013,
      genre: "Drama",
      image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Lootera_poster.jpg"
    },
    {
      id: "silenced",
      title: "Silenced",
      year: 2011,
      genre: "Drama",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlecLj-6EaojYweuTj1g_AaQQ320q9afpOdQ&s"
    },
    {
      id: "rang-de-basanti",
      title: "Rang De Basanti",
      year: 2006,
      genre: "Drama",
      image: "https://upload.wikimedia.org/wikipedia/en/0/08/Rang_De_Basanti_poster.jpg"
    },
    {
      id: "laapta-ladies",
      title: "Laapta Ladies",
      year: 2023,
      genre: "Comedy",
      image: "https://upload.wikimedia.org/wikipedia/en/5/52/Laapataa_Ladies_poster.jpg"
    },
    {
      id: "rockstar",
      title: "Rockstar",
      year: 2011,
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_.jpg"
    },
    {
      id: "maharaja",
      title: "Maharaja",
      year: 2024,
      genre: "Action",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Maharaja_2024_film_poster.jpg/250px-Maharaja_2024_film_poster.jpg"
    },
    {
      id: "burning",
      title: "Burning",
      year: 2018,
      genre: "Drama",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0L8_INVHvAHeu-P-WKFlSfCH1QXLTsBqpMQ&s"
    },
    {
      id: "sector-36",
      title: "Sector 36",
      year: 2023,
      genre: "Action",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d1/Sector_36.jpg"
    },
    {
      id: "memories-of-murder",
      title: "Memories of Murder",
      year: 2003,
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
    },
    {
      id: "ship-of-theseus",
      title: "Ship of Theseus",
      year: 2012,
      genre: "Drama",
      image: "https://upload.wikimedia.org/wikipedia/en/9/98/Ship_of_Theseus_domestic_release_poster.jpg"
    },
    {
      id: "masaan",
      title: "Masaan",
      year: 2015,
      genre: "Drama",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Masaan_poster.jpg"
    },
    {
      id: "special-26",
      title: "Special 26",
      year: 2013,
      genre: "Crime",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Special_26_poster.jpg"
    },
    {
      id: "1971",
      title: "1971",
      year: 2007,
      genre: "War",
      image: "https://m.media-amazon.com/images/M/MV5BNDljZThkNjItMzFhYy00NDk1LWJlZTEtMTI4NzcxODU5NTQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    }
  ]

  const series = [
    {
      id: "stranger-things",
      title: "Stranger Things",
      year: "2016-Present",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      youtubeId: "b9EkMc79ZSU"
    },
    {
      id: "sacred-games",
      title: "Sacred Games",
      year: "2018-2019",
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BYjA4NzJlOGQtZmQzMy00Mjc0LWE2YzEtZjBlY2YyOGMwYmNkXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "mirzapur",
      title: "Mirzapur",
      year: "2018-Present",
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BZTFjMzMxZTUtYTMyNy00OWNhLTk4ODQtNGI1NjI1NjJhMzc3XkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "breaking-bad",
      title: "Breaking Bad",
      year: "2008-2013",
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
    },
    {
      id: "scam-1992",
      title: "Scam 1992",
      year: "2020",
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BNGRkOTVjODgtNTBmZS00MDQ3LWE3ZjQtM2ZiNDQ3OWJkMjM2XkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "dark",
      title: "Dark",
      year: "2017-2020",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BOWJjMGViY2UtNTAzNS00ZGFjLWFkNTMtMDBiMDMyZTM1NTY3XkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "black-spot",
      title: "Black Spot",
      year: "2017-2019",
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BYjVjMmE4OGUtYjYyYS00N2YxLTkwN2ItYmY3ZTViZDc5NzZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "the-100",
      title: "The 100",
      year: "2014-2020",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BNDdmZGYwOWEtN2FkZC00Y2ExLWJkY2UtNzFlODVlNzc3MGIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "katla",
      title: "Katla",
      year: "2021",
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BZDhkNzAyNjctODQ0Yi00NDg3LThmOTctNDg4MTA0NGY4NDgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "behind-her-eyes",
      title: "Behind Her Eyes",
      year: "2021",
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BYTYzZjMzMTctNWZjYy00MGYxLWEzZTAtOTc5ZTcxNDAzNGUxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "family-man",
      title: "The Family Man",
      year: "2019-Present",
      genre: "Action",
      image: "https://m.media-amazon.com/images/M/MV5BMDc3NWMwNGMtYjc3Mi00NzU5LWFiYjgtMTJjZGE3ZmFiNzRjXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "asur",
      title: "Asur",
      year: "2020-Present",
      genre: "Thriller",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUzmy6wHVQGrFminEtkNMLjzf1_qBsi9CfA&s"
    },
    {
      id: "kota-factory",
      title: "Kota Factory",
      year: "2019-Present",
      genre: "Drama",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXD7sqfPsi7obllbMe6q3D4hjZ-Jl_mKiug&s"
    },
    {
      id: "aspirants",
      title: "Aspirants",
      year: "2021-Present",
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BMjE0NjJiYjYtNDUzZC00MGE2LTgzNDktZTVmOWI1Y2E2MDFkXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "death-note",
      title: "Death Note",
      year: "2006-2007",
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "house-of-secrets",
      title: "House of Secrets",
      year: "2021",
      genre: "Horror",
      image: "https://m.media-amazon.com/images/M/MV5BZGNiNDQ1MTEtNzkyMS00NDQzLWFkNzYtMmZmODc5NjQ5YTRiXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "squid-game",
      title: "Squid Game",
      year: "2021-Present",
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
      id: "chernobyl",
      title: "Chernobyl",
      year: "2019",
      genre: "Drama",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKJ_XDkGejDZnmUXfNpG1D3oBR_pswjTp3Q&s"
    },
    {
      id: "wild-wild-country",
      title: "Wild Wild Country",
      year: "2018",
      genre: "Documentary",
      image: "https://m.media-amazon.com/images/M/MV5BODY5ZWY0YzctOGNjMi00MzM0LWFjNDUtNDUxMzI0Mjc1N2Y1XkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "into-the-night",
      title: "Into the Night",
      year: "2020-2021",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BYmI5N2ZhMmMtZThkYS00ZmYyLWI0NWItNWI4ZDg0MjVkOTczXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "paatal-lok",
      title: "Paatal Lok",
      year: "2020",
      genre: "Crime",
      image: "https://m.media-amazon.com/images/M/MV5BM2NlZDUwNzAtZTgyYi00YjhlLThhZTEtYTIxMzdjZjVkOTI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "bodyguard",
      title: "Bodyguard",
      year: "2018",
      genre: "Thriller",
      image: "https://m.media-amazon.com/images/M/MV5BN2I0NWE2Y2QtM2I3YS00MzRlLThlMjAtMDViNGMwNjRhZjVlXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "special-ops",
      title: "Special Ops",
      year: "2020-Present",
      genre: "Action",
      image: "https://m.media-amazon.com/images/M/MV5BN2E3OTI0OGItMWRhMi00NjU1LTk1ZTctMDEwOWZiMDczOWNlXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "1899",
      title: "1899",
      year: "2022",
      genre: "Mystery",
      image: "https://m.media-amazon.com/images/M/MV5BY2UyM2YwZTEtOTk5Zi00ODhkLTg2ZjctMzIxMTViZjFmN2Y4XkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg"
    },
    {
      id: "hellbound",
      title: "Hellbound",
      year: "2021",
      genre: "Horror",
      image: "https://m.media-amazon.com/images/M/MV5BMjIwMDBlZjItNzMyMi00NjQwLWEzOTgtNGFmZTA0NThiMDhkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "12-monkeys",
      title: "12 Monkeys",
      year: "2015-2018",
      genre: "Sci-Fi",
      image: "https://m.media-amazon.com/images/M/MV5BMTkwOTcxNzMzOV5BMl5BanBnXkFtZTgwODYxNjg0ODE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "cobra-kai",
      title: "Cobra Kai",
      year: "2018-Present",
      genre: "Action",
      image: "https://m.media-amazon.com/images/M/MV5BYjA3NDkwNzktNjJkYi00ODNhLWFhYzQtYzk5NjU4MDM0OWZmXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "panchayat",
      title: "Panchayat",
      year: "2020-Present",
      genre: "Comedy",
      image: "https://m.media-amazon.com/images/M/MV5BYzkwZGNkYTctZDc2MS00OWM2LWI2NTUtMTM2ZGMzMTY0N2Q1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "got",
      title: "Game of Thrones",
      year: "2011-2019",
      genre: "Fantasy",
      image: "https://hips.hearstapps.com/hmg-prod/images/hbz-got-poster-aftermath-1554224896.jpg?crop=1.00xw:0.693xh;0,0.0577xh&resize=640:*",
      youtubeId: "VrJYq2exNAs"
    },
    {
      id: "railway-men",
      title: "Railway Men",
      year: "2023",
      genre: "Drama",
      image: "https://m.media-amazon.com/images/M/MV5BZDBkZjhhYWEtZTgwZS00OWY3LWJkNzYtNTkxNWY1MDhjMDk2XkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: "three-body-problem",
      title: "3 Body Problem",
      year: "2024",
      genre: "Sci-Fi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wZzS-yiEU9dDrkRvsmHWWCOflwCqRtzeJQ&s"
    },
    {
      id: "attack-on-titan",
      title: "Attack on Titan",
      year: "2013-2023",
      genre: "Animation",
      image: "https://images.justwatch.com/poster/306747132/s718/attack-on-titan.jpg"
    },
    {
      id: "drive-to-survive",
      title: "Drive to Survive",
      year: "2019-Present",
      genre: "Documentary",
      image: "https://m.media-amazon.com/images/M/MV5BNTkyYzhiYzctZGRiOC00ODM1LTg0MDQtYzVmMzcyNTI5MDEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: "the-test",
      title: "The Test",
      year: "2020-Present",
      genre: "Documentary",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmWVqY-EumARrpMPGnOX4RjSzvfZGWKsdJw&s"
    }
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

  return (
    <div style={netflixStyles.container}>
      {/* Featured content */}
      <section style={mergeStyles(netflixStyles.featured, "featured")}>
        <div style={netflixStyles.featuredGradientTop}></div>
        <div style={netflixStyles.featuredGradientSide}></div>

        <div style={netflixStyles.featuredImage}>
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
                style={netflixStyles.featuredImg}
                loading="lazy"
              />
            </div>
          )}
        </div>

        <div style={mergeStyles(netflixStyles.featuredContent, "featuredContent")}>
          <h2 style={mergeStyles(netflixStyles.featuredTitle, "featuredTitle")}>{featured.title}</h2>
          <p style={netflixStyles.featuredDescription} dangerouslySetInnerHTML={{ __html: featured.description }}></p>
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