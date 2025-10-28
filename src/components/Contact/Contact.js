import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT_INFO } from '../../data/constants';
import styles from './Contact.module.css';

const Contact = () => {
  const contactItems = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: CONTACT_INFO.phone,
      action: `tel:${CONTACT_INFO.phone}`,
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: CONTACT_INFO.email,
      action: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: CONTACT_INFO.address,
      action: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`,
    },
  ];

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>We'd love to hear from you</p>
        </div>

        {/* Contact List */}
        <div className={styles.contactList}>
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.action}
                className={styles.contactItem}
                target={item.label === 'Address' ? '_blank' : undefined}
                rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
              >
                <div className={styles.iconCircle}>
                  <Icon />
                </div>
                <div className={styles.contactContent}>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.value}>{item.value}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
