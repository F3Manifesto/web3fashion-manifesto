import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page35.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page35 = () => {
  const dispatch = useDispatch()

  const onClickOkayButton = () => {
    dispatch(closeModalYellow())
  }
  
  const onClickCollectButton = () => {
    dispatch(
      openModalYellow({
        title: 'Coming Soon!',
        buttonText: 'Okay',
        text: 'The dedicated marketplace will launch soon so you can collect and interact with these NFTs!',
        onClick: () => onClickOkayButton()
      })
    )
  }
 

  return (
    <div className={styles.wrapper}>

<img className={styles.rect} src='/magazine/1/2122/Rectangle 1905.png'></img>

<video className={styles.zk} playsInline autoPlay muted loop>
      <source src='./magazine/1/videos/zeitgeist2.mp4' type='video/mp4' />
</video>

<p className={styles.h7}>ZK Cypherpunk Zeitgeist Jump Gate #2</p>
<p className={styles.h8}>Stranger and more wondrous with each voyage. Something so secretive, you’ve got to catch it at the right moment. 
<br></br><br></br>
The dividing point between the here and there, the now and then.</p>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  onClick={onClickCollectButton}
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/zkzeitgeist/"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

      <img className={styles.zerorender} src='/magazine/1/3940/editrender.png'></img>

 </div>
  )
}

export default Page35