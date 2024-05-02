import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.box}>
      <BallTriangle
        height="100"
        width="100"
        color=" #E44848"
        ariaLabel="loading"
      />
    </div>
  );
};
