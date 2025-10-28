import { useEffect, useRef, useState } from 'react';
import {
  FaUsers,
  FaTv,
  FaWifi,
  FaUtensils,
  FaParking,
  FaShieldAlt,
  FaBroom,
  FaExpandArrowsAlt,
  FaTshirt,
  FaBolt,
} from 'react-icons/fa';
import { AMENITIES } from '../../data/constants';
import styles from './Amenities.module.css';

const iconMap = {
  users: FaUsers,
  tv: FaTv,
  wifi: FaWifi,
  utensils: FaUtensils,
  parking: FaParking,
  shield: FaShieldAlt,
  broom: FaBroom,
  expand: FaExpandArrowsAlt,
  washer: FaTshirt,
  bolt: FaBolt,
};

const Amenities = () => {
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
              }, index * 50);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="amenities" ref={sectionRef}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Amenities</span>
          <h2 className={styles.title}>Premium Facilities & Services</h2>
          <p className={styles.subtitle}>
            Everything you need for a comfortable and convenient stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className={styles.grid}>
          {AMENITIES.map((amenity, index) => {
            const Icon = iconMap[amenity.icon];
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={amenity.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{amenity.title}</h3>
                  <p className={styles.cardDescription}>{amenity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
