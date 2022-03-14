import React from 'react';
import styles from './backcover.module.scss';

const Backcover = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/backcover/mobilecover.png" className={styles.background} />
      <h1>The Manifesto Pages Evolve At Continuous Intervals.</h1>
      <h2>Check Back Soon for More.</h2>
    </div>
  );
};

export default Backcover;
