import { Link } from 'react-router-dom';
import ToggleSwitch from './../ToggleSwitch/ToggleSwitch';
import Logo from './../../assets/image/logo.svg';

import styles from './Header.module.scss';

const Header = () => {
  return <div className={styles.content}>
    <div className={styles.headerTop}>
      <div className={styles.headerLogo}>
        <img className="" src={Logo} alt=""/>
        <span className={styles.headerLogoText}>Cinemania</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <Link to="/" className={styles.listItemLink}>
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
      <ToggleSwitch />
    </div>
    <div className={styles.headerContent}>
      Image
    </div>
  </div>;
};

export default Header;
