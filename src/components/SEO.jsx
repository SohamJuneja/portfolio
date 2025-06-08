import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Soham Juneja - Portfolio</title>
      <meta name="description" content="Soham Juneja's professional portfolio showcasing web development projects, skills, and experience." />
      <meta name="keywords" content="Soham Juneja, Web Developer, Portfolio, React Developer, Frontend Developer" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sohamjuneja.in/" />
      <meta property="og:title" content="Soham Juneja - Portfolio" />
      <meta property="og:description" content="Soham Juneja's professional portfolio showcasing web development projects, skills, and experience." />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sohamjuneja.in/" />
      <meta property="twitter:title" content="Soham Juneja - Portfolio" />
      <meta property="twitter:description" content="Soham Juneja's professional portfolio showcasing web development projects, skills, and experience." />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://sohamjuneja.in/" />
    </Helmet>
  );
};

export default SEO; 