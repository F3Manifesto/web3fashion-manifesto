import React, {useRef} from 'react'
import styles from './page2526.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'


const Page2526 = () => {

  const dispatch = useDispatch()
  const contentRef = useRef()

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
  }
*/
  const onClickZoomOut = (isVideo, link) => {
    dispatch(
      openModalContent({
        isVideo,
        link
      })
    )
  }

  return (
    <div className={styles.wrapper}>

<img className={styles.background} src='./magazine/1/2526/blue25.png' />

 <video className={styles.videoglasses} playsInline autoPlay muted loop onClick={() => onClickZoomIn()}>
      <source src='./magazine/1/videos/gloves.mp4' type='video/mp4' />
</video>

<div
        ref={contentRef}
        onClick={() => onClickZoomOut(true, './magazine/1/videos/gloves.mp4')}
      >
        <img className={styles.zoomButton} src="/images/expandwhite.png" />
      </div>


<h7 className={styles.h7}>Cypherline Braided Gloves (Film Edition)</h7>
<h8 className={styles.h8}>Personal tactile keys that secure and surround us.</h8>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton2}
 // onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/62/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<h9 className={styles.h9}> <a className={styles.cc0text2} href="https://github.com/F3Manifesto/ccomaterials/blob/main/zero"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h9>
 </div>


<img className={styles.glovediagram} src='./magazine/1/2526/test3.png' />
<h4>Cypherline Braided Gloves (Croquis Edition)</h4>
<h5>Personal tactile keys that secure and surround us.</h5>
      <div>

<a
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
 // onClick={onClickCollectButton}
 href="https://market.f3manifesto.xyz/product/64/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<h6> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/zero"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h6>
 </div>

 <img className={styles.whiterect} src="/magazine/1/2324/whiterect.png" />
 <img className={styles.zeroglasses} src='./magazine/1/2526/gloveimage.png' />

    </div>
    
  )
}

export default Page2526
