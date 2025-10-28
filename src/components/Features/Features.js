import { useEffect, useRef, useState } from 'react';
import { FaHome, FaWifi, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { FEATURES } from '../../data/constants';
import styles from './Features.module.css';

const iconMap = {
  home: FaHome,
  wifi: FaWifi,
  location: FaMapMarkerAlt,
  calendar: FaCalendarAlt,
};

const Features = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="features" ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Why Choose Us</span>
          <h2 className={styles.title}>Your Comfort, Our Priority: Facilities</h2>
          <p className={styles.subtitle}>
            Experience the perfect blend of comfort, convenience, and community
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className={styles.grid}>
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={feature.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              >
                {/* Decorative Elements */}
                <div className={styles.cardBg}></div>
                <div className={styles.cardGlow}></div>
                
                {/* Icon Container */}
                <div className={styles.iconContainer}>
                  <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} />
                  </div>
                  <div className={styles.iconCircle}></div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDescription}>{feature.description}</p>
                </div>

                {/* Card Number */}
                <div className={styles.cardNumber}>0{index + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
