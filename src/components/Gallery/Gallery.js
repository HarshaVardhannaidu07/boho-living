import { useState, useRef, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ROOM_CATEGORIES } from '../../data/constants';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  // Collect all images from all room categories
  const allImages = Object.keys(ROOM_CATEGORIES).flatMap(key => 
    ROOM_CATEGORIES[key].images.map(img => ({
      src: img,
      category: key,
      title: ROOM_CATEGORIES[key].title,
    }))
  );

  const filteredImages = filter === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        navigatePrevious();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, filteredImages]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const navigatePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const navigateNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const getCurrentImageIndex = () => {
    if (!selectedImage) return { current: 0, total: 0 };
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    return {
      current: currentIndex + 1,
      total: filteredImages.length,
    };
  };

  return (
    <section className={styles.section} id="gallery" ref={sectionRef}>
      <div className={styles.container}>
        <Parallax speed={-5}>
          <div className={styles.header}>
            <span className={styles.badge}>Gallery</span>
            <h2 className={styles.title}>Photo Gallery</h2>
            <p className={styles.subtitle}>
              Take a visual tour of our beautiful rooms and facilities
            </p>
          </div>
        </Parallax>

        {/* Filter Buttons */}
        <div className={styles.filters}>
          <button 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.activeFilter : ''}`}
            onClick={() => setFilter('all')}
          >
            All Rooms
          </button>
          {Object.keys(ROOM_CATEGORIES).map(key => (
            <button
              key={key}
              className={`${styles.filterBtn} ${filter === key ? styles.activeFilter : ''}`}
              onClick={() => setFilter(key)}
            >
              {ROOM_CATEGORIES[key].title}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={styles.imageCard}
              ref={el => (imagesRef.current[index] = el)}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.title} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.imageTitle}>{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Navigation */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            <FaTimes />
          </button>

          {/* Previous Button */}
          <button
            className={`${styles.navButton} ${styles.navButtonPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              navigatePrevious();
            }}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>

          {/* Image Content */}
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <p className={styles.lightboxTitle}>{selectedImage.title}</p>
            
            {/* Image Counter */}
            <div className={styles.imageCounter}>
              {getCurrentImageIndex().current} / {getCurrentImageIndex().total}
            </div>
          </div>

          {/* Next Button */}
          <button
            className={`${styles.navButton} ${styles.navButtonNext}`}
            onClick={(e) => {
              e.stopPropagation();
              navigateNext();
            }}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
