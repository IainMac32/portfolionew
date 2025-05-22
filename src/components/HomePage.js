import '../styles/HomePage.css';
import React, { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    const handleMouseEnter = () => {
      document.body.style.cursor = 'url(p.png), auto';
    };

    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return <div className="homepage-container"></div>;
}

export default HomePage;
