//import React from 'react'
import React, { useEffect, useRef } from 'react'
import styles from './page2122.module.scss'
import  {openModalContent} from '@actions/modals.actions'


const Page2122 = () => {

  const contentRef = useRef()

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
         <a href="https://polygonscan.com/tx/0x02d8c80ae1e0ffeb3fa6d485b30dec8c90c3c7b06f6a7342bee410d09dd8d668" target="_blank" rel="noreferrer">
    <img className={styles.nftwhite} src='/images/nftblack.png'></img></a> 
    <h1>She steps onto the platform, subway doors fast closing behind her. 
<br></br><br></br>
They've hidden this station beneath a thick coat of costumed tourists, all eagerly awaiting to catch their thrill ride to 15 minutes of obscurity. How could Andy Warhol have gotten it all so exactly backwards? 
<br></br><br></br>
She can feel it, all this stasis and the kinetic urge to be heard for all its worth. Bits to pixels to an unencrypted pulse.  Enough with these somatic sedatives, you jerks. The opiate of these masses lost all meaning in the pre-digital times before this everlasting now.
<br></br><br></br>
Zero is being extra. 
<br></br><br></br>
There is something she shouldn't need to tell for these streetwear suited culture flippers to ride the upside, and she definitely can’t wait for the contenders to wise up.
<br></br><br></br>
She's far into phase 3. Collected enough keys to last at least through the week. Lens time is expensive in these parts. Snap to it, breaking the haze of daydream synchronicity, the familiar-rare chime of ideograff recognition  breaks the charm of her distraction. Rewind the tape and there it is, obscured behind cover at the CQC perimeter’s edge. 
<br></br><br></br>
Pixel sprayed, with flare only the keyed in lenses can appreciate. Glowing like some kind of quantum entrapment. Roulette with runes. All it does is forestall the inevitable. 
<br></br><br></br>
Д13а
<br></br><br></br>
Like a weekend in Vegas, set in a far better city: Maybe she'll get lucky, probably she won’t. She really thought she had made it — forever, not just for a moment. 
<br></br><br></br>
Now where’d that guide go to exfil those fancy handwarmers?
<br></br><br></br>
Slip, slide, and skip the acrobatic montage. The art of arrival is always more of a let down than it’s promised to be.
<br></br><br></br>
She picks up the gloves, glides them onto each hand, playing with the fit. They feel generous,  simultaneously retro and futuristic. They described this as a hardware upgrade for the semantically enhanced. 
<br></br><br></br>
Catching light in the reflection of the cypherline braided glass strands layered between threads of the dark linen fabric, like a secret mirrorgate into forgotten thoughts, stored keys begin to unravel. That ZK retrofit works sweet, eating zettabyte data samples by the microsecond. 
<br></br><br></br>
Can’t help but admire the ASCII aesthetic glitching the outlines of a barcode tattoo.
<br></br><br></br>
Next level?
<br></br><br></br>
Thirty minutes of proof later. Maybe a myth no more. 
<br></br><br></br>
Time to hightail it out the door.
<br></br><br></br>
As she leaves, she realises she could have played it slightly better. She could have taken the sandwich. 
<br></br><br></br>
There's until next week to prepare. Probably the least of her worries. 
</h1>

<img className={styles.rect} src='/magazine/1/2122/Rectangle 1905.png'></img>

<video className={styles.zk} playsInline autoPlay muted loop onClick={() => onClickZoomIn()}>
      <source src='./magazine/1/videos/zeitgeist.mp4' type='video/mp4' />
</video>

<div
        ref={contentRef}
        className={styles.zoomButton}
        onClick={() => onClickZoomOut(true, './magazine/1/videos/zeitgeist.mp4')}
      >
        <img src="/images/expandwhite.png" />
      </div>

    </div>
  )
}

export default Page2122
