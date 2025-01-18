import styles from './UpcomingFilm.module.scss';
import UpcomingBg from './../../assets/image/bg/upcomingBg.png';

const UpcomingFilm = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.upcomingTitle}>Upcoming this month</h2>
      <div className={styles.upcomingInfo}>
        <img src={UpcomingBg} alt={UpcomingBg} className={styles.upcomingImg} />
        <div className={styles.upcomingDescription}>
          <h4 className={styles.descTitle}>THE LOST CITY</h4>
          <dl className={styles.navList}>
            <div className={styles.navItem}>
              <dt className={styles.navLabel}>Release date</dt>
              <dd className={`${styles.navValue} ${styles.releaseDateValue}`}>03.03.2023</dd>
            </div>
            <div className={styles.navItem}>
              <dt className={styles.navLabel}>Vote / Votes</dt>
              <dd className={`${styles.navValue} ${styles.voteValue}`}><span>7.3</span> / <span>1260</span></dd>
            </div>
            <div className={styles.navItem}>
              <dt className={styles.navLabel}>Popularity</dt>
              <dd className={`${styles.navValue} ${styles.popularityValue}`}>99.9</dd>
            </div>
            <div className={styles.navItem}>
              <dt className={styles.navLabel}>Genre</dt>
              <dd className={`${styles.navValue} ${styles.genreValue}`}>Comedy, action</dd>
            </div>
          </dl>

          <h5 className={styles.aboutTitle}>About</h5>
          <p className={styles.aboutText}>
            Reclusive author Loretta Sage writes about exotic places in her
            popular adventure novels that feature a handsome cover model named
            Alan. While on tour promoting her new book with Alan, Loretta gets
            kidnapped by an eccentric billionaire who hopes she can lead him to
            an ancient city's lost treasure from her latest story. Determined to
            prove he can be a hero in real life and not just on the pages of her
            books, Alan sets off to rescue her.
          </p>
          <button className={styles.upcomingBtn}>Add to my library</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFilm;
