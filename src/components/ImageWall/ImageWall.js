import { useState, useEffect } from 'react';
import styles from './ImageWall.module.css';

const ImageWall = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const images = [
    '/CuratedChef (1).webp',
    '/CuratedChef (2).webp',
    '/CuratedChef (3).webp',
    '/CuratedChef (11).webp',
    '/CuratedChef (4).webp', 
    '/CuratedChef (5).webp',
    '/CuratedChef (6).webp',
    '/CuratedChef (7).webp',
    '/CuratedChef (8).webp',
    '/CuratedChef (9).webp',
    '/CuratedChef (10).webp',
    '/CuratedChef (12).webp',
  ];

  const getColumnImages = (startIndex, count) => {
    const columnImages = [];
    for (let i = 0; i < count; i++) {
      columnImages.push(images[(startIndex + i) % images.length]);
    }
    return columnImages;
  };

  const column1 = getColumnImages(0, 5);
  const column2 = getColumnImages(5, 5);
  const column3 = getColumnImages(10, 5);
  const column4 = getColumnImages(15, 4);
  const column5 = getColumnImages(19, 2);
  const column6 = getColumnImages(0, 5);

  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      {/* Scrolling Image Columns */}
      <div className={styles.imageWall}>
        {/* Column 1 */}
        <div className={styles.columnWrapper}>
          <div className={`${styles.column} ${styles.columnDown}`}>
            {[...column1, ...column1, ...column1].map((img, index) => (
              <div key={index} className={styles.imageCard}>
                <img 
                  src={img} 
                  alt="" 
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className={styles.columnWrapper}>
          <div className={`${styles.column} ${styles.columnUp}`}>
            {[...column2, ...column2, ...column2].map((img, index) => (
              <div key={index} className={styles.imageCard}>
                <img 
                  src={img} 
                  alt="" 
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className={styles.columnWrapper}>
          <div className={`${styles.column} ${styles.columnDown}`}>
            {[...column3, ...column3, ...column3].map((img, index) => (
              <div key={index} className={styles.imageCard}>
                <img 
                  src={img} 
                  alt="" 
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 4 */}
        <div className={styles.columnWrapper}>
          <div className={`${styles.column} ${styles.columnUp}`}>
            {[...column4, ...column4, ...column4].map((img, index) => (
              <div key={index} className={styles.imageCard}>
                <img 
                  src={img} 
                  alt="" 
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 5 */}
        <div className={styles.columnWrapper}>
          <div className={`${styles.column} ${styles.columnDown}`}>
            {[...column5, ...column5, ...column5].map((img, index) => (
              <div key={index} className={styles.imageCard}>
                <img 
                  src={img} 
                  alt="" 
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 6 */}
        <div className={styles.columnWrapper}>
          <div className={`${styles.column} ${styles.columnUp}`}>
            {[...column6, ...column6, ...column6].map((img, index) => (
              <div key={index} className={styles.imageCard}>
                <img 
                  src={img} 
                  alt="" 
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content with Animations */}
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <span className={styles.badge}>Chef Curated</span>
        <h2 className={styles.title}>
          Delicious <span className={styles.highlight}>Chef-Cooked</span> Meals
        </h2>
        <p className={styles.subtitle}>
          Freshly prepared with love, served daily at your doorstep
        </p>
        <div className={styles.features}>
          <span className={styles.feature}>🍛 3 Meals Daily</span>
          <span className={styles.feature}>👨‍🍳 Expert Chefs</span>
          <span className={styles.feature}>🌱 Healthy & Hygienic</span>
        </div>
      </div>
    </section>
  );
};

export default ImageWall;
