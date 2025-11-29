// src/Components/Navbar.jsx
import { useEffect, useState } from 'react';
import './Navbar.css';

const sections = ['home', 'features', 'about'];

const Navbar = ({ onLoginClick }) => {
  const [active, setActive] = useState('home');

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleLogin = () => {
    if (onLoginClick) onLoginClick();
  };

  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = id;
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <div className="nav-inner">
          <ul className="nav-links">
            <li
              className={active === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleScrollTo('home')}
            >
              Home
            </li>
            <li
              className={active === 'features' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleScrollTo('features')}
            >
              Features
            </li>
            <li
              className={active === 'about' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleScrollTo('about')}
            >
              About Us
            </li>
          </ul>

          <div
            aria-label="User Login Button"
            tabIndex={0}
            role="button"
            className="user-profile"
            onClick={handleLogin}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleLogin();
            }}
          >
            <div className="user-profile-inner">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2">
                  <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z" />
                </g>
              </svg>
              <p>Log In</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
