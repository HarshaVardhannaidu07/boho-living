import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo} onClick={() => scrollToSection('home')}>
            <span className={styles.logoText}>Boho</span>
            <span className={styles.logoAccent}>Living</span>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <button className={styles.navLink} onClick={() => scrollToSection('home')}>
              Home
            </button>
            <button className={styles.navLink} onClick={() => scrollToSection('rooms')}>
              Rooms
            </button>
            <button className={styles.navLink} onClick={() => scrollToSection('amenities')}>
              Amenities
            </button>
            <button className={styles.navLink} onClick={() => scrollToSection('pricing')}>
              Pricing
            </button>
            <button className={styles.navLink} onClick={() => scrollToSection('gallery')}>
              Gallery
            </button>
            <button className={styles.navLink} onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </nav>

          {/* Call Button - Desktop */}
          <button className={styles.callButton} onClick={handleCall}>
            <FaPhone /> Call Now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <button className={styles.mobileNavLink} onClick={() => scrollToSection('home')}>
            Home
          </button>
          <button className={styles.mobileNavLink} onClick={() => scrollToSection('rooms')}>
            Rooms
          </button>
          <button className={styles.mobileNavLink} onClick={() => scrollToSection('amenities')}>
            Amenities
          </button>
          <button className={styles.mobileNavLink} onClick={() => scrollToSection('pricing')}>
            Pricing
          </button>
          <button className={styles.mobileNavLink} onClick={() => scrollToSection('gallery')}>
            Gallery
          </button>
          <button className={styles.mobileNavLink} onClick={() => scrollToSection('contact')}>
            Contact
          </button>
          
          <button className={styles.mobileCallButton} onClick={handleCall}>
            <FaPhone /> Call Now
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
