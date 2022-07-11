import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page54.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page54 = () => {
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

<img className={styles.rect} src='/magazine/1/2122/Rectangle 1905.png'></img>

<video className={styles.zk} playsInline autoPlay muted loop>
      <source src='./magazine/1/videos/zeitgeist3.mp4' type='video/mp4' />
</video>

<p className={styles.h7}>ZK Cypherpunk Zeitgeist Jump Gate #3</p>
<p className={styles.h8}>Not even remotely abiotic once you know where to look.
<br></br><br></br> 
Through a sea of white noise and hard randomised static. On the rare occasion you decide to come up for air.</p>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/164/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/zkzeitgeist/"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

      <img className={styles.zerorender} src='/magazine/1/5556/nimrender.png'></img>

 </div>
  )
}

export default Page54