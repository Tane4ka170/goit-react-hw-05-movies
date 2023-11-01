import React from 'react';
import { Bars } from 'react-loader-spinner';
import s from './Loader.module.css';

const Spinner = () => {
  return (
    <div className={s.loaderContainer}>
      <Bars
        height="80"
        width="80"
        color="#e7379e"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
