import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page36.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page36 = () => {
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
      

<img className={styles.rect} src='./magazine/1/4142/red23 (3).png'></img>

<video playsInline autoPlay muted loop>
      <source src='./magazine/1/videos/fuzzyhat.mp4' type='video/mp4' />
</video>

<p className={styles.h7}>Fuzzy Logic Bucket Hat (Film Edition)</p>
<p className={styles.h8}>Employed to handle the concept of veracity with many degrees of comfort for weavers of progressive decentralisation. </p>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/71/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/edit"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

      <img className={styles.zerorender} src='/magazine/1/4142/edithatimage 1.png'></img>

 </div>
  )
}

export default Page36