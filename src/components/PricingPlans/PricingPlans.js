import { useRef, useEffect, useState } from 'react';
import { FaCheck, FaStar } from 'react-icons/fa';
import { ROOM_TYPES } from '../../data/constants';
import styles from './PricingPlans.module.css';

const PricingPlans = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled (0 to 1)
      const scrolled = Math.max(0, windowHeight - rect.top);
      const progress = Math.min(1, scrolled / (sectionHeight + windowHeight));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate background darkness (0 to 0.4)
  const darkness = scrollProgress * 0.4;

  return (
    <section 
      className={styles.section} 
      id="pricing" 
      ref={sectionRef}
      style={{
        background: `linear-gradient(135deg, 
          rgba(45, 95, 93, ${0.9 + darkness}) 0%, 
          rgba(26, 47, 46, ${1 - darkness * 0.5}) 100%)`
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Pricing Plans</span>
          <h2 className={styles.title}>Choose Your Perfect Room</h2>
          <p className={styles.subtitle}>Flexible plans that fit your budget and lifestyle</p>
        </div>

        <div className={styles.grid}>
          {ROOM_TYPES.map((room, index) => (
            <div
              key={room.id}
              className={`${styles.card} ${room.popular ? styles.popular : ''}`}
              ref={el => (cardsRef.current[index] = el)}
            >
              {room.popular && (
                <div className={styles.popularBadge}>
                  <FaStar /> Most Popular
                </div>
              )}
              <h3 className={styles.roomType}>{room.type}</h3>
              <div className={styles.price}>
                <span className={styles.priceAmount}>{room.price}</span>
                <span className={styles.pricePeriod}>/{room.period}</span>
              </div>
              <ul className={styles.featureList}>
                {room.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>
                    <FaCheck className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.bookBtn}>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
