import styles from './ToggleSwitch.module.scss';

import Dark1 from './../../assets/image/icons/dark-1.svg';
import Dark2 from './../../assets/image/icons/dark-2.svg';
import Light2 from './../../assets/image/icons/light-2.svg';
import { useEffect, useState } from 'react';

const ToggleSwitch = () => {
  const [isDark, setIsDark] = useState(()=>{
    const currTheme = localStorage.getItem("theme");
    return currTheme === "light" ? true : false;
  });
  
  useEffect(()=>{
    localStorage.setItem("theme",isDark ? "dark" : "light");

    document.documentElement.style.setProperty("--secondary-color", isDark ? "#111111" :"#FFFFFF");
    document.documentElement.style.setProperty("--background-color", isDark ? "#FFFFFF" :"#282828");
    document.documentElement.style.setProperty("--quinary-color", isDark ? "#B7B7B7" :"#595959");
  },[isDark])
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${isDark ? styles.buttonDark : styles.buttonLight}`}
        onClick={toggleTheme}
      >
        {isDark ? (
          <div className={styles.content}>
            <img src={Dark2} alt={Dark2} className={styles.image}/>
            <img src={Dark1} alt={Dark1} className={styles.image}/>
          </div>
        ) : (
          <div className={styles.content}>
            <img src={Dark1} alt={Dark1} className={`${styles.reverse} ${styles.image}`} />
            <img src={Light2} alt={Light2} className={styles.image}/>
          </div>
        )}
      </button>
    </div>
  );
};

export default ToggleSwitch;
