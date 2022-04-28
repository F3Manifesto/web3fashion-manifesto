import React, {useRef} from 'react'
import styles from './page4748.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'


const Page4748 = () => {

  return (
    <div className={styles.wrapper}>
<img className={styles.backgroundimg} src='/magazine/1/4748/nimspose.png'></img>
<h1>what do you stand for</h1><h2>?</h2>
<h3>how do you stand for it </h3><h4>?</h4>
<h5>how do you stand it</h5><h6>?</h6>
<a href="https://polygonscan.com/tx/" target="_blank" rel="noreferrer">
        <img className={styles.nftwhite} src='/images/nftwhite.png'></img>
      </a>

    </div>
    
  )
}

export default Page4748
