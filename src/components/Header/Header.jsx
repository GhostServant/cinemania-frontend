import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import useWindowWidth from '../../hooks/useWindowWidth';
import StarRating from '../../containers/StarRating/StarRating';

import Logo from '../../assets/image/icons/logo.svg';

import styles from './Header.module.scss';

const Header = () => {
  const { width } = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

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
          <>
            <span className={styles.headerMenuText} onClick={toggleMenu}>
              Menu
            </span>
            {isMenuOpen && (
              <div
                className={`${styles.dropdownMenu} ${isMenuOpen ? styles.open : ''}`}
              >
                <nav className={styles.dropdownMenuNav}>
                  <ul className={styles.dropdownMenuList}>
                    <li className={styles.dropdownMenuItem}>
                      <Link
                        to=""
                        className={styles.listItemLink}
                        onClick={toggleMenu}
                      >
                        Home
                      </Link>
                    </li>
                    <li className={styles.dropdownMenuItem}>
                      <Link
                        to="catalog"
                        className={styles.listItemLink}
                        onClick={toggleMenu}
                      >
                        Catalog
                      </Link>
                    </li>
                    <li className={styles.dropdownMenuItem}>
                      <Link
                        to="library"
                        className={styles.listItemLink}
                        onClick={toggleMenu}
                      >
                        My Library
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </>
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
          <StarRating key={1} rating={4.5} size={'24px'} />
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
