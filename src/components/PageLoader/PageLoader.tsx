import { RotatingLines } from 'react-loader-spinner';

import s from './PageLoader.module.css';

const PageLoader = () => {
  return (
    <div className={s.loaderContainer}>
      <RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        strokeColor="lightblue"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default PageLoader;
