import TrendsCard from './../../components/TrendsCard/TrendsCard';
import styles from './MovieList.module.scss';

const MovieList = ({movies}) => {
  return (
    <div className={styles.content}>
    {
      movies.map((movie) => <TrendsCard key={movie.filmId || movie.kinopoiskId} movie={movie} />)
    }
    </div>
  );
};

export default MovieList;