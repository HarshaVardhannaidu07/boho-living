import { useEffect, useState } from 'react';
import { FaPlay, FaChevronDown } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleWords, setVisibleWords] = useState([]);

  const titleWords = ['Your', 'Perfect', 'Home Away', 'From Home'];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);

    // Animate words appearing one by one
    titleWords.forEach((word, index) => {
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, index]);
      }, 600 + index * 150); // Start after 600ms, 150ms between each word
    });
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="home">
      {/* Clean Background */}
      <div className={styles.heroBackground}>
        <img src="/image.jpg" alt="Boho PG" />
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
        <span className={styles.badge}>
          <span className={styles.sparkle}>✨</span> Premium Living Spaces
        </span>

        <h1 className={styles.title}>
          {titleWords.map((word, index) => {
            const isHighlight = word === 'Home Away';
            
            return (
              <span key={index}>
                <span
                  className={`${styles.word} ${
                    visibleWords.includes(index) ? styles.wordVisible : ''
                  } ${isHighlight ? styles.highlight : ''}`}
                >
                  {word}
                </span>
                {/* Add line breaks at specific positions */}
                {(index === 1 || index === 2) && <br />}
                {/* Add space if not the last word and no line break */}
                {index < titleWords.length - 1 && index !== 1 && index !== 2 && ' '}
              </span>
            );
          })}
        </h1>

        <p className={styles.description}>
          Experience comfortable, boho-chic living in Bangalore with modern amenities and vibrant community.
        </p>

        <div className={styles.ctaButtons}>
          <button 
            className={styles.primaryButton}
            onClick={() => scrollToSection('contact')}
          >
            Book Free Tour
          </button>
          <button className={styles.secondaryButton}>
            <FaPlay /> Watch Video
          </button>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Residents</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4.5★</div>
            <div className={styles.statLabel}>Rating</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        className={styles.scrollIndicator}
        onClick={() => scrollToSection('features')}
        aria-label="Scroll down"
      >
        <FaChevronDown />
      </button>
    </section>
  );
};

export default Hero;
