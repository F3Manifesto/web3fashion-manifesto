import React from 'react'
import styles from './coverpage.module.scss'

const CoverPage = () => (
  <div className={styles.wrapper}>
    <img src='/magazine/1/images/cover/cover.png' width='960' />
    <h1>
      The Web3 Fashion Manifesto
    </h1>
    <h2 className={styles.india}>
      A rally flag for the entire web3 fashion and open metaverse movement.
    </h2>
    <h2 className={styles.forweb3}>
      By F<h3>3</h3>Manifesto
    </h2>
    <img src='/magazine/1/images/cover/line.png' width='834' />
  </div>
)

export default CoverPage
