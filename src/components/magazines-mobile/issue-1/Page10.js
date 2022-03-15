import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page10.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page10 = () => {

  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src='./magazine/1/910/rightocreatebackmob.png' />
      <video playsInline autoPlay loop muted>
        <source src='./magazine/1/videos/righttocreate.mp4' type='video/mp4' />
      </video>
      <h1>The Right to Create</h1>
      <h2>In the rise of this computer state, computer state, we must stand up for our right to create. 
<br></br><br></br>
pgp --gen-key [user ID] --key-type [key type] --bits [bits #] --passphrase [passphrase]
<br></br><br></br>
Not your keys not your creativity.</h2>
<div>

<a
  className={styles.collectbutton}
  onClick={onClickCollectButton}
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
</div>
<h3>
  <a
    className={styles.cc0text}
    href="https://github.com/F3Manifesto/ccomaterials/tree/main/therighttocreate"
    target="_blank"
    rel="noreferrer"
  >
    Gather Source Materials & Make A Derivative of this CC0 NFT.
  </a>
</h3>
  </div> 
  )
}

export default Page10