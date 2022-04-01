import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './page18.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page18 = () => {
  const dispatch = useDispatch()
  const [play, setPlay] = useState(false)
  const ref = useRef()
  

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
     <video ref={ref} playsInline autoPlay loop muted> 
        <source src='./magazine/1/videos/dezinformatsiya.mp4' type='video/mp4' />
      </video>
      <img
        src={`./magazine/1/1516/15_16_${!play ? 'play' : 'pause'}.png`}
        className={styles.play}
        onClick={() => {
          setPlay(!play)
          ref.current.muted = play
        }}
      />
      <h1>д13а</h1>
      <h2>Dezinformatisya. Dezinformatsiya Et Cetera. The art of disinformation. Awake and aware, but not quite conscious, your signals have been pre-programmed, pre-scripted in the code. You get paid in crypto. Sometimes in digital machines. You’re a human computer.
      <br></br><br></br>
 Another walking logic bomb.</h2>
<div>

<a
  className={styles.collectbutton}
  onClick={onClickCollectButton}
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
</div>
<h3>
  <a
    className={styles.cc0text}
    href="https://github.com/F3Manifesto/ccomaterials/tree/main/d13a"
    target="_blank"
    rel="noreferrer"
  >
    Gather Source Materials & Make A Derivative of this CC0 NFT.
  </a>
</h3>
 </div>
  )
}

export default Page18