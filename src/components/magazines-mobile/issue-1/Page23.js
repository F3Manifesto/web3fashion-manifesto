import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page23.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page23 = () => {
  const dispatch = useDispatch()

 /* const onClickOkayButton = () => {
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
  }*/
 

  return (
    <div className={styles.wrapper}>
      

<img className={styles.rect} src='./magazine/1/2324/red23.png'></img>

<video playsInline autoPlay muted loop>
      <source src='./magazine/1/videos/cyberglasses.mp4' type='video/mp4' />
</video>

<p className={styles.h7}>Cypherline Braided Hyper Visor Lenses (Film Edition)</p>
<p className={styles.h8}>Personal visual keys that secure and surround us.</p>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
 // onClick={onClickCollectButton}
 href="https://market.f3manifesto.xyz/product/61/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/zero"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

      <img className={styles.zerorender} src='/magazine/1/2324/zeroglasses.png'></img>

 </div>
  )
}

export default Page23