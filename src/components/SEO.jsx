import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Get current path and create canonical URL
    const currentPath = location.pathname;
    const canonicalUrl = `https://www.sohamjuneja.in${currentPath}`;
    
    // Update title based on current page
    const pageTitles = {
      '/': 'Soham Juneja - Portfolio',
      '/browse': 'Browse Profiles - Soham Juneja',
      '/certifications': 'Certifications - Soham Juneja',
      '/work-experience': 'Work Experience - Soham Juneja',
      '/skills': 'Skills - Soham Juneja',
      '/projects': 'Projects - Soham Juneja',
      '/contact-me': 'Contact Me - Soham Juneja',
      '/cinema': 'Cinema Interests - Soham Juneja',
      '/music': 'Music Interests - Soham Juneja',
      '/blogs': 'Blogs - Soham Juneja',
      '/profile/Recruiter': 'Recruiter Profile - Soham Juneja',
      '/profile/Explorer': 'Explorer Profile - Soham Juneja'
    };
    
    document.title = pageTitles[currentPath] || 'Soham Juneja - Portfolio';
      // Update meta tags with dynamic content
    const metaTags = {
      description: "Soham Juneja's professional portfolio showcasing web development projects, skills, and experience.",
      keywords: "Soham Juneja, Web Developer, Portfolio, React Developer, Frontend Developer",
      robots: "index, follow",
      'og:type': 'website',
      'og:url': canonicalUrl,
      'og:title': document.title,
      'og:description': "Soham Juneja's professional portfolio showcasing web development projects, skills, and experience.",
      'twitter:card': 'summary_large_image',
      'twitter:url': canonicalUrl,
      'twitter:title': document.title,
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
    }    canonical.setAttribute('href', canonicalUrl);

  }, [location.pathname]); // Update when route changes

  return null; // This component doesn't render anything
};

export default SEO; 