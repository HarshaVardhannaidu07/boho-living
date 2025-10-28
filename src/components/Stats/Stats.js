import { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaBed, FaSmile } from 'react-icons/fa';
import styles from './Stats.module.css';

const STATS = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    number: 1,
    label: 'Locations',
    suffix: '',
  },
  {
    id: 2,
    icon: FaBed,
    number: 40,
    label: 'Rooms',
    suffix: '',
  },
  {
    id: 3,
    icon: FaSmile,
    number: 150,
    label: 'Happy Customers',
    suffix: '+',
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate numbers counting up
  useEffect(() => {
    if (!isVisible) return;

    const durations = [2000, 2500, 2000]; // Different durations for variety
    const steps = 60;

    STATS.forEach((stat, index) => {
      const increment = stat.number / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;

        if (step >= steps) {
          current = stat.number;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, durations[index] / steps);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div
                key={stat.id}
                className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>

                {/* Divider */}
                <div className={styles.divider}>/</div>

                {/* Number & Label */}
                <div className={styles.content}>
                  <div className={styles.number}>
                    {counts[index]}
                    {stat.suffix}
                  </div>
                  <div className={styles.label}>{stat.label}</div>
                </div>

                {/* Animated Border */}
                <div className={styles.borderAnimation}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
