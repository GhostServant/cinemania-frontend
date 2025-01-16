import styles from './TrendsCard.module.scss';
import StarRating from './../../containers/StarRating/StarRating';

const TrendsCard = ({ filmImage, title, genres, rating, year }) => {
  return (
    <div
      className={styles.trendsItem}
      style={{ backgroundImage: `url(${filmImage})` }}
    >
      <div className={styles.filmDescription}>
        <h5 className={styles.filmTitle}>{title}</h5>
        <p className={styles.filmGenres}>
          {genres} | {year}
        </p>
      </div>
      <StarRating rating={rating} size={16} />
    </div>
  );
};

export default TrendsCard;
