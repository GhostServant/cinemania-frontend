import { Link } from 'react-router-dom';
import ToggleSwitch from './../ToggleSwitch/ToggleSwitch';
import Logo from './../../assets/image/icons/logo.svg';
import useWindowWidth from './../../hooks/useWindowWidth';
import styles from './Header.module.scss';

const Header = () => {
  const { width } = useWindowWidth();

  return (
    <div className={styles.content}>
      <div className={styles.headerTop}>
        <div className={styles.headerLogo}>
          <img className={styles.headerLogoImg} src={Logo} alt={Logo} />
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
      <div className={styles.headerContent}>Image</div>
    </div>
  );
};

export default Header;
