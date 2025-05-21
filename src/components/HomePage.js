import React, { useEffect } from 'react';
import '../styles/HomePage.css';
import cursorImg from '../assets/cartoon-pointer.webp'; // adjust path as needed

const HomePage = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.backgroundImage = `url(${cursorImg})`;
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="homepage">
      <h1>Welcome to the Home Page</h1>
      <p>This page has a light blue background and a custom image cursor.</p>
    </div>
  );
};

export default HomePage;
