//import React from 'react'
import React, { useRef, useState } from 'react'
import styles from './page3738.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'


const Page3738 = () => {

  const dispatch = useDispatch()
  const contentRef = useRef()


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

  const [play, setPlay] = useState(false)
  const ref = useRef()

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
      <video muted loop autoPlay className={styles.imageBackground}>
        <source
          src='/magazine/1/videos/timescene.mp4'
          type='video/mp4'
        />
      </video>


     <a href="https://polygonscan.com/tx/0x9acc61d00caeda0dfefffb75b4d89220ac68087b26585fc903c7e7d8069629b5" target="_blank" rel="noreferrer">
    <img className={styles.nftwhite} src='/images/nftwhite.png'></img></a>   

    <video ref={ref} autoPlay muted loop>
      <source src='./magazine/1/videos/timescene.mp4' type='video/mp4' onClick={() => onClickZoomIn()}/>
</video>
<img
        src={`./magazine/1/1516/15_16_${!play ? 'pause' : 'play'}.png`}
        className={styles.play}
        onClick={() => {
          setPlay(!play)
          ref.current.muted = play
        }}
      />

<div
        ref={contentRef}
        
        onClick={() => onClickZoomOut(true, './magazine/1/videos/timescene.mp4')}
      >
        <img className={styles.zoomButton} src="/images/expandwhite.png" />
      </div>

<h5 className={styles.h7}>All History Lost</h5>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
 // onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/78/2/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/mypocketempire/allhistorylost"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

     
    </div>
    
  )
}

export default Page3738
