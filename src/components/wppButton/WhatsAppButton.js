import React from 'react';
import styles from './WhatsAppButton.module.css';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
        <FaWhatsapp color='white' size={30} />
    
    </a>
  );
};

export default WhatsAppButton;