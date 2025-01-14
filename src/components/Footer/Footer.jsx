import styles from './Footer.module.scss';
import { ReactComponent as Heart } from './../../assets/image/icons/heart.svg';

const Footer = () => {
  return (
    <div className={styles.content}>
      <p className={styles.footerText}>
        © 2025 | All Rights Reserved |{' '}
        <span>
          Developed with <Heart /> by GoIT NZ
        </span>
      </p>
    </div>
  );
};

export default Footer;
