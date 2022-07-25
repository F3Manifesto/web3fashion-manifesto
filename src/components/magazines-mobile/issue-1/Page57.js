import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page57.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page57 = () => {
  const dispatch = useDispatch()

  /*const onClickOkayButton = () => {
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
      

<img className={styles.rect} src='./magazine/1/5960/blue2525.png'></img>

<video playsInline autoPlay muted loop>
      <source src='./magazine/1/videos/pocketwatch.mp4' type='video/mp4' />
</video>

<p className={styles.h7}>Celestial Flux Pocket Watch (Film Edition)</p>
<p className={styles.h8}>Interesting conversations about the future. A ticking compendium of liberty. A succession of self sovereign civilisations.</p>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/167/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/nim"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

      <img className={styles.zerorender} src='/magazine/1/5960/pocketsnimpose 1.png'></img>

 </div>
  )
}

export default Page57