import styles from './StarRating.module.scss';
import useWindowWidth from './../../hooks/useWindowWidth';

const StarRating = ({ rating, size }) => {
  const { width } = useWindowWidth();
  const fullStar = (
    <svg
      width={width <= 768 ? '12px' : size}
      height={width <= 768 ? '12px' : size}
      viewBox="0 0 22.498 21.0029"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient
          x1="2.748049"
          y1="1.500731"
          x2="17.748047"
          y2="21.500727"
          id="paint_linear_84_160_0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F84119" />
          <stop offset="1.000000" stopColor="#F89F19" stopOpacity="0.678431" />
        </linearGradient>
      </defs>
      <path
        id="Vector"
        d="M17.71 21C17.55 21 17.4 20.95 17.27 20.86L11.24 16.48L5.21 20.86C5.08 20.95 4.93 21 4.77 21C4.61 21 4.46 20.95 4.33 20.85C4.2 20.76 4.11 20.62 4.06 20.47C4.01 20.32 4.01 20.16 4.06 20.01L6.41 13.04L0.32 8.86C0.19 8.77 0.09 8.64 0.04 8.49C-0.02 8.34 -0.02 8.18 0.03 8.02C0.08 7.87 0.17 7.74 0.3 7.64C0.43 7.55 0.58 7.5 0.74 7.5L8.26 7.5L10.53 0.51C10.58 0.36 10.67 0.23 10.8 0.14C10.93 0.05 11.08 0 11.24 0C11.4 0 11.56 0.05 11.68 0.14C11.81 0.23 11.91 0.36 11.96 0.51L14.23 7.5L21.74 7.5C21.9 7.5 22.06 7.55 22.19 7.64C22.32 7.74 22.41 7.87 22.46 8.03C22.51 8.18 22.5 8.34 22.45 8.49C22.4 8.65 22.3 8.78 22.17 8.87L16.07 13.04L18.42 20.01C18.46 20.12 18.47 20.24 18.45 20.36C18.43 20.47 18.39 20.59 18.32 20.68C18.25 20.78 18.16 20.86 18.05 20.91C17.95 20.97 17.83 21 17.71 21Z"
        fill="url(#paint_linear_84_160_0)"
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
  const halfStar = (
    <svg
      width={width <= 768 ? '12px' : size}
      height={width <= 768 ? '12px' : size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip84_163">
          <rect
            id="star-half"
            rx="0.000000"
            width="23.000000"
            height="23.000000"
            transform="translate(0.500000 0.500000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
        <linearGradient
          x1="4.065027"
          y1="3.643339"
          x2="18.066019"
          y2="22.212143"
          id="paint_linear_84_164_0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F84119" />
          <stop offset="1.000000" stopColor="#F89F19" stopOpacity="0.678431" />
        </linearGradient>
        <linearGradient
          x1="2.782516"
          y1="3.643340"
          x2="9.783010"
          y2="22.212139"
          id="paint_linear_84_165_0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F84119" />
          <stop offset="1.000000" stopColor="#F89F19" stopOpacity="0.678431" />
        </linearGradient>
      </defs>
      <rect
        id="star-half"
        rx="0.000000"
        width="23.000000"
        height="23.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip84_163)">
        <path
          id="Vector"
          d="M14.43 9.75L12 2.25L9.56 9.75L1.5 9.75L8.06 14.25L5.53 21.75L12 17.06L18.46 21.75L15.93 14.25L22.5 9.75L14.43 9.75Z"
          stroke="url(#paint_linear_84_164_0)"
          strokeOpacity="1.000000"
          strokeWidth="1.000000"
          strokeLinejoin="round"
        />
        <path
          id="Vector"
          d="M12 2.25L12 17.06L5.53 21.75L8.06 14.25L1.5 9.75L9.56 9.75L12 2.25Z"
          fill="url(#paint_linear_84_165_0)"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
  const emptyStar = (
    <svg
      width={width <= 768 ? '12px' : size}
      height={width <= 768 ? '12px' : size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip148_6994">
          <rect
            id="star-outline"
            rx="0.000000"
            width="17.000000"
            height="17.000000"
            transform="translate(0.500000 0.500000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
        <linearGradient
          x1="3.048773"
          y1="2.732504"
          x2="13.549517"
          y2="16.659101"
          id="paint_linear_148_6995_0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F84119" />
          <stop offset="1.000000" stopColor="#F89F19" stopOpacity="0.678431" />
        </linearGradient>
      </defs>
      <rect
        id="star-outline"
        rx="0.000000"
        width="17.000000"
        height="17.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip148_6994)">
        <path
          id="Vector"
          d="M10.82 7.31L9 1.68L7.17 7.31L1.12 7.31L6.04 10.68L4.14 16.31L9 12.79L13.85 16.31L11.95 10.68L16.87 7.31L10.82 7.31Z"
          stroke="url(#paint_linear_148_6995_0)"
          strokeOpacity="1.000000"
          strokeWidth="1.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
  const stars = [];
  const fullStarsCount = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStarsCount) {
      stars.push(fullStar);
    } else if (i === fullStarsCount && hasHalfStar) {
      stars.push(halfStar);
    } else {
      stars.push(emptyStar);
    }
  }
  return (
    <div className={styles.contentRating}>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating;
