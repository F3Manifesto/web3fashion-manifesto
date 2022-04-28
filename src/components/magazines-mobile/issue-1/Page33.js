import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './page33.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page33 = () => {
  const dispatch = useDispatch()
  const [play, setPlay] = useState(false)
  const ref = useRef()

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
      <a href="https://polygonscan.com/tx/0x9acc61d00caeda0dfefffb75b4d89220ac68087b26585fc903c7e7d8069629b5" target="_blank" rel="noreferrer">
      <img className={styles.nftblack} src='/images/nftwhite.png'></img></a>

      <video ref={ref} playsInline autoPlay loop muted> 
      <source src='./magazine/1/videos/timescene.mp4' type='video/mp4' />
    </video>
    <img
        src={`./magazine/1/1516/15_16_${!play ? 'play' : 'pause'}.png`}
        className={styles.play}
        onClick={() => {
          setPlay(!play)
          ref.current.muted = play
        }}
      />
    <h4>All History Lost</h4>
<div>

<a
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/78/2/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
</div>
<h6> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/mypocketempire/allhistorylost"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h6>


 </div>
  )
}

export default Page33