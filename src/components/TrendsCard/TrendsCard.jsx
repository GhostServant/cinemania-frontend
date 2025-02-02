import styles from './TrendsCard.module.scss';
import StarRating from './../../containers/StarRating/StarRating';

const TrendsCard = ({movie}) => {
  return (
    <div
      className={styles.trendsItem}
      style={{ backgroundImage: `url(${movie.posterUrl})` }}
    >
      <div className={styles.filmDescription}>
        <h5 className={styles.filmTitle}>{movie.nameRu || movie.nameOriginal}</h5>
        <p className={styles.filmGenres}>
          {movie.genres[0]?.genre} | {movie.year} 
        </p>
      </div>
      <StarRating rating={movie?.rating/2 || movie?.ratingKinopoisk/2} size={16} />
    </div>
  );
};

export default TrendsCard;
