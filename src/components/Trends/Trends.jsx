import { useState } from 'react';
import styles from './Trends.module.scss';
import filmImage from './../../assets/image/bg/test.png';
import TrendsCard from './../TrendsCard/TrendsCard';

const testData = [
  {
    id: 1,
    title: 'GHOSTED',
    genres: 'Drama, Action',
    year: 2023,
    rating: 4.5,
    image: filmImage,
  },
  {
    id: 2,
    title: 'AVATAR: THE WAY OF WATER',
    genres: 'Sci-Fi, Adventure',
    year: 2022,
    rating: 4.8,
    image: filmImage,
  },
  {
    id: 3,
    title: 'OPPENHEIMER',
    genres: 'Biography, History',
    year: 2023,
    rating: 4.7,
    image: filmImage,
  },
  {
    id: 4,
    title: 'BARBIE',
    genres: 'Comedy, Fantasy',
    year: 2023,
    rating: 4.6,
    image: filmImage,
  },
  {
    id: 5,
    title: 'MISSION: IMPOSSIBLE - DEAD RECKONING',
    genres: 'Action, Thriller',
    year: 2023,
    rating: 4.4,
    image: filmImage,
  },
];

const Trends = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const allVisible = () => {
    setVisibleCount(testData.length);
  };
  return (
    <div className={styles.content}>
      <div className={styles.trendsTop}>
        <h2 className={styles.trendsTitle}>WEEKLY TRENDS</h2>
        <button className={styles.trendsAll} onClick={allVisible}>
          See all
        </button>
      </div>
      <div className={styles.trendsList}>
        {testData.slice(0, visibleCount).map((movie, index) => (
          <TrendsCard
            key={index}
            filmImage={movie.image}
            title={movie.title}
            genres={movie.genres}
            rating={movie.rating}
            year={movie.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Trends;
