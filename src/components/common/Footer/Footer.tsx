// Styles
import styles from "./styles.module.css";
const { footerContainer } = styles;

// Global
const currentYear = new Date().getFullYear();

const Footer = () => {
   return (
      <div className={footerContainer}>
         © {currentYear} Our Ecom. All rights reserved.
      </div>
   );
};

export default Footer;
