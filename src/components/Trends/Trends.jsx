import { useState,useEffect } from 'react';
import { getPopularFilms } from './../../services/api';
import styles from './Trends.module.scss';
import TrendsCard from './../TrendsCard/TrendsCard';


const Trends = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [movies, setMovies] = useState([]);
  const allVisible = () => {
    setVisibleCount(6);
  };

  const getMovies = async () =>{
    try {
      const {films} = await getPopularFilms();
      setMovies(films)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
      getMovies();
    },[])
  return (
    <div className={styles.content}>
      <div className={styles.trendsTop}>
        <h2 className={styles.trendsTitle}>WEEKLY TRENDS</h2>
        <button className={styles.trendsAll} onClick={allVisible}>
          See all
        </button>
      </div>
      <div className={styles.trendsList}>
        {movies.length > 0 && movies.slice(0, visibleCount).map((movie) => (
          <TrendsCard
            key={movie.filmId || movie.kinopoiskId}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Trends;
