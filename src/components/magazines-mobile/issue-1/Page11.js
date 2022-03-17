import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page11.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page11 = () => {

  return (
    <div className={styles.wrapper}>
    <img className={styles.back1} src='./magazine/1/1112/mobileback11.png' />
    <a href="https://polygonscan.com/tx/0xc3dc438c2c01fe9c33429730fcaed429952d3f50c65d7992a47ca7656f79139c" target="_blank" rel="noreferrer">
    <img className={styles.nftwhite} src='/images/nftwhite.png'></img></a>
    <h1>The CC0 Arcade</h1>
    <h2><strong>This wonderful world is filled with things with far more power than us. But if you’re smart about where you are, when you show up and which devices you know how to ride, you can catch a wave and go places.</strong></h2>
    <h3><strong>Yet, yes, you need ammunition, not a ride.</strong></h3>
    <h4>This amplification thing–is it a grind, a dare, or a windfall? <br></br><br></br>
What’s the difference?</h4>
<img className={styles.arcadelines} src='./magazine/1/1112/arcadelines.png' />
<img className={styles.line2} src='./magazine/1/1112/line2.png' /> 
  </div> 
  )
}

export default Page11