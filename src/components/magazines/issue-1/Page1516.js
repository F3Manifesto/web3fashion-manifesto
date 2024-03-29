//import React from 'react'
import React, { useRef, useState } from 'react'
import styles from './page1516.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'


const Page1516 = () => {

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
    <h1>Welcome to the CC0 Arcade. 
<br></br>
<br></br>
<br></br>
<br></br>
Are you ready to play the infinite game? 
<br></br>
<br></br>
<br></br>
<br></br>
Choose your destiny. 
<br></br>
<br></br>
<br></br>
Craft<br></br>
Defend<br></br>
Scale<br></br>
<br></br>
<br></br>
<br></br>
(_claim your stake_)
<br></br>
<br></br>
<br></br>
<br></br>
Insert CC0 to begin. 
<br></br>
</h1>
<h2>
Down through the street level entrance you find yourself winding through the back alley. Passing by poorly lit street art, trash cans in the way, and uncertain looking flaneurs who might be tenants or fellow players, wasting time smoking expired cigars. You wonder if nothing else works as planned, you have a back up career in teaching people like these how to take up less space with their poses and how to not block the path of the next people like you to come along this way. 
<br></br><br></br>
Finally you see the entrance way. A red door. 
<br></br><br></br>
You enter the Konami code on the keypad. 
</h2>
<img className={styles.code} src='./magazine/1/1516/code.png' />
<h3>Door unlocked. You got in.</h3>
<video ref={ref} autoPlay muted loop>
      <source src='./magazine/1/videos/finalwithaudio.mp4' type='video/mp4' onClick={() => onClickZoomIn()}/>
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
        
        onClick={() => onClickZoomOut(true, './magazine/1/videos/finalwithaudio.mp4')}
      >
        <img className={styles.zoomButton} src="/images/expandwhite.png" />
      </div>


    <h4>The CC0 Arcade</h4>
<h5>Walking into an arcade in the early days of the Metaverse was basically a goddamn religious experience. With quietly spoken words, “I've never really had a religious experience in a religious place”. 
<br></br><br></br>
This is the first NFT in a series for the CC0 Arcade and your entry ticket to the next game.</h5>
<div>

<a
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/54/2/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
</div>
<h6> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/cc0arcade"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h6>
 </div>
)
}

export default Page1516
