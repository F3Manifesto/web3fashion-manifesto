import React, {useRef} from 'react'
import styles from './page5960.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'


const Page5960 = () => {

  const dispatch = useDispatch()
  const contentRef = useRef()

/*  const onClickOkayButton = () => {
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

<img className={styles.background} src='./magazine/1/5960/blue2525.png' />

 <video className={styles.videoglasses} playsInline autoPlay muted loop onClick={() => onClickZoomIn()}>
      <source src='./magazine/1/videos/pocketwatch.mp4' type='video/mp4' />
</video>

<div
        ref={contentRef}
        onClick={() => onClickZoomOut(true, './magazine/1/videos/pocketwatch.mp4')}
      >
        <img className={styles.zoomButton} src="/images/expandwhite.png" />
      </div>


<h7 className={styles.h7}>Celestial Flux Pocket Watch (Film Edition)</h7>
<h8 className={styles.h8}>Interesting conversations about the future. A ticking compendium of liberty. A succession of self sovereign civilisations.</h8>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton2}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/167/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<h9 className={styles.h9}> <a className={styles.cc0text2} href="https://github.com/F3Manifesto/ccomaterials/blob/main/nim"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h9>
 </div>


<img className={styles.glovediagram} src='./magazine/1/5960/pocketwatch 1.png' />
<h4>Celestial Flux Pocket Watch (Croquis Edition)</h4>
<h5>Interesting conversations about the future. A ticking compendium of liberty. A succession of self sovereign civilisations.</h5>
      <div>

<a
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
 // onClick={onClickCollectButton}
 href="https://market.f3manifesto.xyz/product/168/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<h6> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/nim"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h6>
 </div>

 <img className={styles.whiterect} src="/magazine/1/2324/whiterect.png" />
 <img className={styles.zeroglasses} src='./magazine/1/5960/pocketsnimpose 1.png' />

    </div>
    
  )
}

export default Page5960
