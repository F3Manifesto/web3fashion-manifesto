import React from 'react'
import styles from './coverpage.module.scss'

const CoverPage = () => (
  <div className={styles.wrapper}>
    <a href="https://polygonscan.com/tx/0x12e26a2043404817541a97523fe412256de1c432a508a2fca3e4ce59ec2c050b" target="_blank" rel="noreferrer">
    <img className={styles.nftwhite} src='/images/nftblue.png'></img></a>
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
