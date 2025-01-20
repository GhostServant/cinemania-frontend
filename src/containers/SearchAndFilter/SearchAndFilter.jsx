import { useState } from 'react';
import styles from './SearchAndFilter.module.scss';
import { ReactComponent as Cross } from './../../assets/image/icons/cross.svg';

const SearchAndFilter = () => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');

  const handleChange = (e, state) => {
    const value = e.target.value;
    if (state === 'genre') {
      setGenre(value);
    } else if (state === 'search') {
      setSearch(value);
    }
  };
  const clearSearch = () => {
    setSearch('');
  };
  return (
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
        onChange={(e) => handleChange(e, 'genre')}
      >
        <option value="">Year</option>
        <option value="Comedy">1999</option>
        <option value="Action">2000</option>
        <option value="Drama">2001</option>
        <option value="Horror">2002</option>
      </select>
      <div className={styles.searchIcon}>
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
  );
};

export default SearchAndFilter;
