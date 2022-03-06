import React from 'react'
import styles from './backcover.module.scss'

const Backcover = () => (
  <div className={styles.wrapper}>
    <img src='/magazine/1/cover/cover.png' width='960' />
    <h1>
    The Manifesto Pages Evolve At Continuous Intervals.
    </h1>
    <h2 className={styles.h2}>
    Check Back Soon for More.
    </h2>
  <img className={styles.line1} src='/magazine/1/cover/line.png' width='834' />
  </div>
)

export default Backcover

