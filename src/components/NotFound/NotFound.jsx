import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.scss';
import NotFoundImg from './../../assets/image/bg/404.png';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        <p className={styles.notFoundText}>
          OOPS...
          <br />
          We are very sorry! <br />
          But we couldn’t find the page.
        </p>
        <img
          src={NotFoundImg}
          alt={NotFoundImg}
          className={styles.notfoundImg}
        />
      </div>
      <div className={styles.notFoundLinks}>
        <Link to="/cinemania-frontend/" className={styles.goHome}>
          Go home
        </Link>
        <Link
          to="/cinemania-frontend/"
          className={styles.goBack}
          onClick={() => navigate(-1)}
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
