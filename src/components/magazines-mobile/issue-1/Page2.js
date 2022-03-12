import React from 'react'
import styles from './page2.module.scss'

const Page2 = () => {
  return (
  <div>
    <img className={styles.cover} src='./magazine/1/12/cover (2).png' />
    <a href="https://polygonscan.com/tx/0x9273adf519c05fab9048d7c6bcb78361f9b8f738ca9655ae7a3c3481ffa27b51" target="_blank" rel="noreferrer">
  <img className={styles.nftblack} src='/images/nftwhite.png'></img></a>
    <img className={styles.survival} src='./magazine/1/12/survival.png' />
    <img className={styles.isnt} src='./magazine/1/12/isnt.png' />
    <img className={styles.enough} src='./magazine/1/12/enough.png' />
    <img className={styles.iwaslate} src='./magazine/1/12/iwaslate.png' />
    <img className={styles.oryouwereearly} src='./magazine/1/12/oryouwereearly.png' />
    <img className={styles.eitherone} src='./magazine/1/12/eitherone.png' />
    <img className={styles.samemission} src='./magazine/1/12/samemission.png' />
</div>
  )
}

export default Page2