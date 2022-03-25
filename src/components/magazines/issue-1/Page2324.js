import React from 'react'
import styles from './page2324.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'


const Page2324 = () => {

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
<img className={styles.background} src='./magazine/1/2324/red23.png' />
<img className={styles.glassone} src='./magazine/1/2324/1.png' />
<img className={styles.glasstwo} src='./magazine/1/2324/4.png' />
<img className={styles.glassthree} src='./magazine/1/2324/5.png' />
<h1>Cypherline Braided Hyper Visor Lenses (Image Sequence)</h1>
<h2>Personal visual keys that secure and surround us.</h2>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton1}
  onClick={onClickCollectButton}
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<h3> <a className={styles.cc0text1} href="https://github.com/F3Manifesto/ccomaterials/blob/main/zero"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h3>
 </div>

 <video className={styles.videoglasses}  autoPlay muted loop>
      <source src='./magazine/1/videos/cyberglasses.mp4' type='video/mp4' />
</video>

<h7 className={styles.h7}>Cypherline Braided Hyper Visor Lenses (Film Edition)</h7>
<h8 className={styles.h8}>Personal visual keys that secure and surround us.</h8>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton2}
  onClick={onClickCollectButton}
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<h9 className={styles.h9}> <a className={styles.cc0text2} href="https://github.com/F3Manifesto/ccomaterials/blob/main/zero"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h9>
 </div>



<img className={styles.glovediagram} src='./magazine/1/2324/test.png' />
<h4>Cypherline Braided Hyper Visor Lenses (Croquis Edition)</h4>
<h5>Personal visual keys that secure and surround us.</h5>
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
<h6> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/zero"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h6>
 </div>

    </div>
  )
}

export default Page2324
