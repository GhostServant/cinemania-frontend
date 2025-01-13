import styles from './NotFound.module.scss';
import NotFoundImg from './../../assets/image/bg/404.png';

const NotFound = () => {
  return (
    <div className={styles.container}>
      Page Not Found
      <img src={NotFoundImg} alt={NotFoundImg} className={styles.notfoundImg} />
    </div>
  );
};

export default NotFound;
