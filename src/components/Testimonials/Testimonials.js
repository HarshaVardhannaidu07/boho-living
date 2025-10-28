import { FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: 'Amazing PG with all modern amenities. The rooms are spacious and well-maintained. Great community and very safe environment!',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    rating: 5,
    text: 'Best decision I made was moving here. The food is delicious, staff is friendly, and the location is perfect for my office commute.',
  },
  {
    id: 3,
    name: 'Anjali Patel',
    rating: 4,
    text: 'Clean rooms, good WiFi, and 24/7 security. The owner is very responsive to any concerns. Highly recommend for working professionals.',
  },
  {
    id: 4,
    name: 'Karthik Reddy',
    rating: 5,
    text: 'Love the boho-chic vibe! The common areas are great for socializing. Met amazing people here. Feel like home away from home.',
  },
  {
    id: 5,
    name: 'Sneha Desai',
    rating: 5,
    text: 'Excellent value for money. All basic amenities included. The location is prime with easy access to everything. Very happy here!',
  },
  {
    id: 6,
    name: 'Amit Kumar',
    rating: 4,
    text: 'Great PG for students and professionals. The management is professional and helpful. Rooms are comfortable and well-furnished.',
  },
  {
    id: 7,
    name: 'Neha Singh',
    rating: 5,
    text: 'Highly satisfied with the cleanliness and maintenance. The team is always available to help. Best PG I have stayed in Bangalore!',
  },
  {
    id: 8,
    name: 'Vikram Joshi',
    rating: 5,
    text: 'Perfect for bachelors! Good food, great roommates, and awesome facilities. The WiFi is super fast - perfect for work from home.',
  },
];

const Testimonials = () => {
  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  const renderStars = (rating) => {
    return (
      <div className={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? styles.starFilled : styles.starEmpty}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>What Our Residents Say</h2>
          <p className={styles.subtitle}>
            Real experiences from our happy community members
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className={styles.scrollContainer}>
          <div className={styles.scrollTrack}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className={styles.card}>
                {/* Stars */}
                {renderStars(testimonial.rating)}

                {/* Review Text */}
                <p className={styles.text}>"{testimonial.text}"</p>

                {/* Author Name */}
                <div className={styles.author}>
                  <div className={styles.authorName}>{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
