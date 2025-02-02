import { useEffect, useState } from 'react';
import MovieList from './../../components/MovieList/MovieList';
import { getPopularFilms,filterFilmsByYear,searchMovies } from './../../services/api';

import { ReactComponent as Cross } from './../../assets/image/icons/cross.svg';

import styles from './SearchAndFilter.module.scss';

const SearchAndFilter = () => {
  const [search, setSearch] = useState('');
  const [movies,setMovies] = useState([]);
  const [genre, setGenre] = useState('');

  const handleChange = async (e, state) => {
    const value = e.target.value;
    if (state === 'year') {
      setGenre(value);
      clearSearch();
      if(value !== "Year"){
        const {items} = await filterFilmsByYear(value);
        setMovies(items);
      }else{
        getMovies();
      }
    } else if (state === 'search') {
      setSearch(value);
    }
  };
  const getMovies = async () =>{
    try {
      const {films} = await getPopularFilms();
      setMovies(films)
    } catch (error) {
      console.log(error);
    }
  }
  const searchFilm = async() => {
    const {data} = await searchMovies(search);
    setMovies(data.films)
  }
  const clearSearch = () => {
    setSearch('');
    getMovies();
  };
  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className={styles.containerCatalog}>
      <div className={styles.content}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          className={styles.searchInput}
          value={search}
          onChange={(e) => handleChange(e, 'search')}
          placeholder="Search"
        />
        {search && <Cross className={styles.crossIcon} onClick={clearSearch} />}
      </div>
      <select
        className={styles.filterSelect}
        value={genre}
        onChange={(e) => handleChange(e, 'year')}
      >
        <option value="Year">Year</option>
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
      </select>
      <div className={styles.searchIcon} onClick={searchFilm}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9.16"
            cy="9.16"
            r="6.66"
            stroke="#FFFFFF"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <line
            x1="17.5"
            y1="17.5"
            x2="13.87"
            y2="13.87"
            stroke="#FFFFFF"
            strokeWidth="1.3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
    {movies.length > 0 
    ? (<MovieList movies={movies}/>)
    : (
      <p className={styles.trendsOps}>OOPS... <br />
          We are very sorry! <br />
          We don’t have any results matching your search.</p>
    )}
    </div>
  );
};

export default SearchAndFilter;
