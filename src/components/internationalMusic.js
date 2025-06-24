const internationalMusic = [
    {
      id: "tame-impala-currents",
      title: "Currents",
      artist: "Tame Impala",
      image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png",
      youtubeId: "pFptt7Cargc" // "Let It Happen" from Currents[2]
    },
    {
      id: "tame-impala-slow-rush",
      title: "The Slow Rush",
      artist: "Tame Impala",
      image: "https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png",
      youtubeId: "2g5xkLqIElU" // "Borderline" from The Slow Rush
    },
    {
      id: "pink-floyd-wall",
      title: "The Wall",
      artist: "Pink Floyd",
      image: "https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf",
      youtubeId: "HrxX9TBj2zY" // "Another Brick in the Wall, Pt. 2"
    },
    {
      id: "pink-floyd-wish-you-were-here",
      title: "Wish You Were Here",
      artist: "Pink Floyd",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png/250px-Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png",
      youtubeId: "IXdNnw99-Ic" // "Wish You Were Here"[3]
    },
    {
      id: "arctic-monkeys-am",
      title: "AM",
      artist: "Arctic Monkeys",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg",
      youtubeId: "bpOSxM0rNPM" // "Do I Wanna Know?" (most popular from AM)
    },
    {
      id: "daft-punk-ram",
      title: "Random Access Memories",
      artist: "Daft Punk",
      image: "https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png",
      youtubeId: "wIMSU8otS-g" // Full album[5]
    },
    {
      id: "boa-duvet",
      title: "Duvet",
      artist: "Boa",
      image: "https://i.ytimg.com/vi/o7fgFaXKVa0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBuvtgSJ6hYdJg3uOngEi7xuHsOSQ",
      youtubeId: "Ava0duwBsZo" // "Duvet"[6]
    },
    {
      id: "keane-somewhere-only-we-know",
      title: "Somewhere Only We Know",
      artist: "Keane",
      image: "https://i.scdn.co/image/ab67616d0000b2737d6cd95a046a3c0dacbc7d33",
      youtubeId: "kx4RTBZFAYU" // "Somewhere Only We Know"[7]
    },
    {
      id: "weeknd-after-hours",
      title: "After Hours",
      artist: "The Weeknd",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
      youtubeId: "ygTZZpVkmKg" // "After Hours" (official video)
    },
    {
      id: "weeknd-starboy",
      title: "Starboy",
      artist: "The Weeknd",
      image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
      youtubeId: "34Na4j8AVgA" // "Starboy" (official video)
    },
    {
      id: "chainsmokers-sick-boy",
      title: "Sick Boy",
      artist: "The Chainsmokers",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Chainsmokers_%E2%80%93_Sick_Boy_album.png",
      youtubeId: "fKtY_37r1VI" // "Sick Boy" (official video)
    },
    {
      id: "chainsmokers-memories",
      title: "Memories...Do Not Open",
      artist: "The Chainsmokers",
      image: "https://upload.wikimedia.org/wikipedia/en/5/51/Memories...Do_Not_Open.jpg",
      youtubeId: "fRNkQH4DVg8" // "Something Just Like This" (most popular from album)
    },
    {
      id: "lumineers-cleopatra",
      title: "Cleopatra",
      artist: "The Lumineers",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4f/Cleopatra_album_cover.jpg",
      youtubeId: "pTOC_q0NLTk" // "Ophelia" (most popular from Cleopatra)
    },
    {
      id: "eminem-show",
      title: "The Eminem Show",
      artist: "Eminem",
      image: "https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg",
      youtubeId: "eJO5HU_7_1w" // "Without Me" (most popular from The Eminem Show)
    },
    {
      id: "eminem-recovery",
      title: "Recovery",
      artist: "Eminem",
      image: "https://m.media-amazon.com/images/I/51uKuWtPQAL._UF1000,1000_QL80_.jpg",
      youtubeId: "XbGs_qK2PQA" // "Not Afraid" (most popular from Recovery)
    },
    {
      id: "coldplay-head-full-of-dreams",
      title: "A Head Full of Dreams",
      artist: "Coldplay",
      image: "https://m.media-amazon.com/images/I/A1PfrjnfTCL._UF1000,1000_QL80_.jpg",
      youtubeId: "vGZMvV9KBp8" // "Adventure of a Lifetime"
    },
    {
      id: "post-malone-hollywoods-bleeding",
      title: "Hollywood's Bleeding",
      artist: "Post Malone",
      image: "https://m.media-amazon.com/images/I/61qlAR-fHeL._UF1000,1000_QL80_.jpg",
      youtubeId: "wXhTHyIgQ_U" // "Circles"
    },
    {
      id: "coldplay-parachutes",
      title: "Parachutes",
      artist: "Coldplay",
      image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png",
      youtubeId: "yKNxeF4KMsY" // "Yellow"
    },
    {
      id: "la-la-land",
      title: "La La Land",
      artist: "Various Artists",
      image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
      youtubeId: "uRBwGKLK9ig" // "City of Stars" (official video)
    },
    {
      id: "weeknd-cry-for-me",
      title: "Cry for Me",
      artist: "The Weeknd",
      image: "https://i1.sndcdn.com/artworks-ImmC9XXsukYm-0-t500x500.jpg",
      youtubeId: "bn8gP5N8hqM" // No official video found
    },
    {
      id: "drake-nokia",
      title: "Nokia",
      artist: "Drake",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOW9euo-0-RaO8HzaQBIi-lbisrHqgVLXGQ&s",
      youtubeId: "8ekJMC8OtGU" // No official video found
    },
    {
      id: "pink+white",
      title: "Pink+White",
      artist: "Frank Ocean",
      image: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
      youtubeId: "uzS3WG6__G4" // No official video found
    },
    {
      id: "creep",
      title: "Creep",
      artist: "Radiohead",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78f6AeGY9nvgvrm2rPzL-t7XDT00GxO8CGw&s",
      youtubeId: "XFkzRNyygfk" // "Creep" (official video)
    },
    {
      id: "intheend",
      title: "In The End",
      artist: "Linkin Park",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3f/LinkinParkIntheEnd.jpg",
      youtubeId: "eVTXPUF4Oz4" // "In The End" (official video)
    },
    {
      id: "thestrokes",
      title: "Ode To The Mets",
      artist: "The Strokes",
      image: "https://i.scdn.co/image/ab67616d0000b273bfa99afb5ef0d26d5064b23b",
      youtubeId: "BjC0KUxiMhc" // "Ode To The Mets" (official audio)
    }
  ];
  
  export default internationalMusic;
  