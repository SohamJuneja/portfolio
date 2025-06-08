import { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    // Update title
    document.title = "Soham Juneja - Portfolio";
    
    // Update meta tags
    const metaTags = {
      description: "Soham Juneja's professional portfolio showcasing web development projects, skills, and experience.",
      keywords: "Soham Juneja, Web Developer, Portfolio, React Developer, Frontend Developer",
      'og:type': 'website',
      'og:url': 'https://sohamjuneja.in/',
      'og:title': 'Soham Juneja - Portfolio',
      'og:description': "Soham Juneja's professional portfolio showcasing web development projects, skills, and experience.",
      'twitter:card': 'summary_large_image',
      'twitter:url': 'https://sohamjuneja.in/',
      'twitter:title': 'Soham Juneja - Portfolio',
      'twitter:description': "Soham Juneja's professional portfolio showcasing web development projects, skills, and experience."
    };

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://sohamjuneja.in/');

  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything
};

export default SEO; 