import { useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FAQ_DATA } from '../../data/constants';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  const faqsRef = useRef([]);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="faq" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Everything you need to know about Boho PG
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQ_DATA.map((faq, index) => (
            <div
              key={faq.id}
              className={`${styles.faqItem} ${openId === faq.id ? styles.open : ''}`}
              ref={el => (faqsRef.current[index] = el)}
            >
              <div className={styles.question} onClick={() => toggleFAQ(faq.id)}>
                <h3>{faq.question}</h3>
                <div className={styles.icon}>
                  {openId === faq.id ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
