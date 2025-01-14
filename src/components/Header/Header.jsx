import { Link } from 'react-router-dom';
import ToggleSwitch from './../ToggleSwitch/ToggleSwitch';
import useWindowWidth from './../../hooks/useWindowWidth';
import StarRating from '../../styles/StarRating/StarRating';

import Logo from './../../assets/image/icons/logo.svg';
import { ReactComponent as Star } from './../../assets/image/icons/star.svg';

import styles from './Header.module.scss';

const Header = () => {
  const { width } = useWindowWidth();

  return (
    <div className={styles.content}>
      <div className={styles.headerTop}>
        <div className={styles.headerLogo}>
          <img
            className={styles.headerLogoImg}
            src={Logo}
            alt="Cinemania Logo"
          />
          <span className={styles.headerLogoText}>Cinemania</span>
        </div>
        {width < 768 ? (
          <span className={styles.headerMenuText}>Menu</span>
        ) : (
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.listItem}>
                <Link to="" className={styles.listItemLink}>
                  Home
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link to="catalog" className={styles.listItemLink}>
                  Catalog
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link to="library" className={styles.listItemLink}>
                  My Library
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <ToggleSwitch />
      </div>
      <div className={styles.headerContent}>
        <div className={styles.headerContentDesc}>
          <h2 className={styles.contentTitle}>Quantumania</h2>
          <StarRating size={'24px'} />
          <p className={styles.contentText}>
            Salt-of-the-earth Cole falls head over heels for enigmatic Sadie —
            but then makes the shocking discovery that she’s a secret agent.
          </p>
          <div className={styles.contentBtns}>
            <button className={styles.contentTrailer}>Watch trailer</button>
            <Link to="#" className={styles.contentMore}>
              More details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
