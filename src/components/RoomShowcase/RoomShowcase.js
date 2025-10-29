import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaCheckCircle, FaHeart, FaRegHeart } from 'react-icons/fa';
import { ROOM_CATEGORIES } from '../../data/constants';
import styles from './RoomShowcase.module.css';

const RoomShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('single');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const currentRoom = ROOM_CATEGORIES[activeCategory];

  // Reset image index when category changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeCategory]);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentRoom.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentRoom.images.length - 1 : prev - 1
    );
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section 
      className={`${styles.section} ${isVisible ? styles.visible : ''}`} 
      id="rooms" 
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Room Types</span>
          <h2 className={styles.title}>Explore Our Rooms</h2>
          <p className={styles.subtitle}>
            Choose from our variety of well-furnished rooms designed for your comfort
          </p>
        </div>

        {/* Category Tabs - Mobile Scroll */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabs}>
            {Object.keys(ROOM_CATEGORIES).map((key) => (
              <button
                key={key}
                className={`${styles.tab} ${activeCategory === key ? styles.activeTab : ''}`}
                onClick={() => handleCategoryChange(key)}
              >
                {ROOM_CATEGORIES[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Room Display */}
        <div className={styles.roomDisplay}>
          {/* Image Carousel */}
          <div className={styles.imageSection}>
            <div className={styles.mainImageContainer}>
              <img
                src={currentRoom.images[currentImageIndex]}
                alt={`${currentRoom.title} - ${currentImageIndex + 1}`}
                className={styles.mainImage}
              />
              
              {/* Image Navigation */}
              <button 
                className={`${styles.navButton} ${styles.navButtonLeft}`}
                onClick={prevImage}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button 
                className={`${styles.navButton} ${styles.navButtonRight}`}
                onClick={nextImage}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              {/* Image Counter */}
              <div className={styles.imageCounter}>
                {currentImageIndex + 1} / {currentRoom.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className={styles.thumbnailGallery}>
              {currentRoom.images.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${
                    index === currentImageIndex ? styles.activeThumbnail : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Room Details */}
          <div className={styles.detailsSection}>
            <div className={styles.roomInfo}>
              <h3 className={styles.roomTitle}>{currentRoom.title}</h3>
              <p className={styles.roomDescription}>{currentRoom.description}</p>
              
              <div className={styles.priceTag}>
                <span className={styles.priceLabel}>Starting from</span>
                <span className={styles.priceAmount}>{currentRoom.price}</span>
                <span className={styles.pricePeriod}>/month</span>
              </div>

              {/* Features List */}
              <div className={styles.featuresSection}>
                <h4 className={styles.featuresTitle}>Room Features</h4>
                <ul className={styles.featuresList}>
                  {currentRoom.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className={styles.actions}>
                <button className={styles.bookButton}>
                  Book This Room
                </button>
                <button className={styles.contactButton}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;
