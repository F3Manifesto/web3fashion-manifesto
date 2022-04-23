import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page38.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page38 = () => {
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
      

<img className={styles.rect} src='./magazine/1/4344/blue2525 (2).png'></img>

<video playsInline autoPlay muted loop>
      <source src='./magazine/1/videos/dropearrings.mp4' type='video/mp4' />
</video>

<p className={styles.h7}>Forgotten Logic Dangle Earrings (Film Edition)</p>
<p className={styles.h8}>A mesmorising shimmer. The royal blue gemstones contain all the most vital components for efficient navigation across whimsical and strange worlds.  </p>
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
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/edit"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

      <img className={styles.zerorender} src='/magazine/1/4344/editear.png'></img>

 </div>
  )
}

export default Page38