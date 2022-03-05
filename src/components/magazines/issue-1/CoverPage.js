import React from 'react'
import styles from './coverpage.module.scss'

const CoverPage = () => (
  <div className={styles.wrapper}>
    <img src='/magazine/1/cover/cover.png' width='960' />
    <h1>
      The Web3 Fashion Manifesto
    </h1>
    <h2 className={styles.h2}>
      A rally flag for the entire web3 fashion and open metaverse movement.
    </h2>
    <h3 className={styles.h3}>By F</h3><h4 className={styles.h4}>3</h4><h5 className={styles.h5}>Manifesto</h5>
    <img className={styles.line1} src='/magazine/1/cover/line.png' width='834' />
  </div>
)

export default CoverPage
