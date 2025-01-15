import { useState } from 'react';
import StarRating from './../../containers/StarRating/StarRating';
import styles from './Trends.module.scss';
import filmImage from './../../assets/image/bg/test.png';

const Trends = () => {
  const [visibleCount, setVisibleCount] = useState();
  return (
    <div className={styles.content}>
      <div className={styles.trendsTop}>
        <h2 className={styles.trendsTitle}>WEEKLY TRENDS</h2>
        <button className={styles.trendsAll}>See all</button>
      </div>
      <div className={styles.trendsList}>
        {/* {movies.slice(0, visibleCount).map((movie, index) => (
          <div key={index} className={styles.trendsItem}>
            <h5 className="filmTitle">GHOSTED</h5>
          </div>
        ))} */}
        <div className={styles.trendsItem} style={{backgroundImage:`url(${filmImage})`}}>
          <div className={styles.filmDescription}>
            <h5 className={styles.filmTitle}>GHOSTED</h5>
            <p className={styles.filmGenres}>Drama, Action | 2023</p>
          </div>
          <StarRating rating={4} size={16}/>
        </div>
        <div className={styles.trendsItem} style={{backgroundImage:`url(${filmImage})`}}>
          <div className={styles.filmDescription}>
            <h5 className={styles.filmTitle}>GHOSTED</h5>
            <p className={styles.filmGenres}>Drama, Action | 2023</p>
          </div>
          <StarRating rating={4} size={16}/>
        </div>
        <div className={styles.trendsItem} style={{backgroundImage:`url(${filmImage})`}}>
          <div className={styles.filmDescription}>
            <h5 className={styles.filmTitle}>GHOSTED</h5>
            <p className={styles.filmGenres}>Drama, Action | 2023</p>
          </div>
          <StarRating rating={4} size={16}/>
        </div>
      </div>
    </div>
  );
};

export default Trends;
