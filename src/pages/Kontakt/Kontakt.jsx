import React from "react";
import { useNav } from "../../customHooks/useNav";
import styles from "./Kontakt.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const Kontakt = () => {
  // useNav takes in a navLinkId and returns a ref
  // this ref is used to register the navLinkId that's
  // currently in view, and apply activeClass styling
  // to the corresponding nav childElement

  const kontaktRef = useNav("Kontakt");

  return (
	
    <section ref={kontaktRef} id="kontaktContainer" className={styles.kontaktContainer}>
      <h3>Kontakt</h3>
  <div className={styles.iframeContainer}>
	<iframe title="Storsjökol" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.1579006088398!2d14.5337892!3d63.3569421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466fcc2bb169a79f%3A0xcd01d0013174e3dd!2zTsOkc2V2w6RnZW4gMTc3LCA4MzUgOTQgQXNww6Vz!5e0!3m2!1sen!2sse!4v1656861330179!5m2!1sen!2sse" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
    <div className={styles.contactInfo}>
		<li><span><a href="mailto:info@storsjokol.se">E-post: info@storsjokol.se</a></span></li>
		<li><span><a href="tel:+467030703891">Telefon: 073-070 38 91</a></span></li>
	  </div>

      <div className={styles.socialContainer}>
        <a
          href="https://www.youtube.com/channel/UCzKS1ussa70mbqhLmiJgsxQ"
          className={`${styles.youtube} ${styles.social}`}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/Storsj%C3%B6kol-112010304851335"
          className={`${styles.facebook} ${styles.social}`}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/storsjokol/?hl=en"
          className={`${styles.instagram} ${styles.social}`}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </section>
	
  );
};

export default Kontakt;
