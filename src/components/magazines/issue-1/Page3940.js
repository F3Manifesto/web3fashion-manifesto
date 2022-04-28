import React, { useEffect, useRef } from 'react'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'
import { useDispatch } from 'react-redux'
import styles from './page3940.module.scss'

const Page3940 = () => {

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
     <a href="https://polygonscan.com/tx/0x001e2ee9e6858aeb8b6258a38a605590fd3b9f8a647b734a9b477b66f4b7557b" target="_blank" rel="noreferrer">
    <img className={styles.nftwhite} src='/images/nftblack.png'></img></a>   
      <p>Strange, deeply personal and highly subjective. 
<br></br><br></br>
The Red Door. 
<br></br><br></br>
Above him, three storeys up and slightly to the right. It stood striking against the bare white walls, held firmly in place by the trained Jasmine vines hugging the frame with spotted bursts of wildly sweet floral scents. Next to the door, a severely overridden bicycle leaned as an image of patience, showing no desire to ever move from its spot again. Its days in motion now over. 
<br></br><br></br>
Edit’s enthusiasm for the Red Door lay somewhere in between the mundane and the magical, the mad and the impossible. It tasted of adventure, of another world. The prospect so tantalising, he couldn’t help himself but to indulge infinitely in the idea of where it might possibly lead. 
<br></br><br></br>
A tingle of familiarity. The warm breeze lay to rest on the top of his hands, bringing light into his eyes and pulling him back into full consciousness.
<br></br><br></br>
Edit’s shabby oversized suit covered the rest of his skin and the gray-haloed birth spots that spiraled around his arms and torso, twisted through his upper chest, all the way to cross the left side of his lower lip. Each mark was a seasoned reminder— connected to his permanent discontent with the ordinary and intense dissatisfaction for the all too common combinations of totally un-novel rebellion. 
<br></br><br></br>
He strode up each flight of stairs until he reached the entrance way. 
<br></br><br></br>
What good are keys without a door? 
<br></br><br></br>
One click left and a small struggle of downward pressure on the handle before he could execute on the lock.  
<br></br><br></br>
Open. 
<br></br><br></br>
Boxes and more boxes covered the entire floor of the entrance way. Cardboard overload. 
<br></br><br></br>
The larger boxes are the best place to start. Filled with clippings. The words certainly not recognisable in any form of remotely coherent English. Rather, some kind of translation AI had made a pass— a hybridisation of signs, symbols, runes and letters. 
<br></br><br></br>
He continued his search through the boxes. It took him a couple more rounds of unpackaging to recall where he’d seen those cyphers before.  
<br></br><br></br>
And then it came into direct view. A skinny rectangular box, sorely frayed at the edges, etched with the same character marked graphical cover. 
<br></br><br></br>
Ever so delicately he unfolded the top flaps of the box. Like all precious things, they are fragile. Mesh electronics woven into the glass gemstones— so powerful it could rip a whole in the shape of the world. Pressing down on one of the gems between his thumb and index finger, he verified the make and model. 
<br></br><br></br>
And just like that, without even the slightest hesitation, Edit pierced the earring through the lobe of his right ear. 
<br></br><br></br>
It was so evident. So clear. He found the dividing point. The door was akin to a magical passage. Loot treasures buried at its roots. Every time he opened it, he could be sure to gain just what he needed. And this time, the Forgotten Logic Dangle Earrings were that.
<br></br><br></br>
“I’ll extend my stay”, he thought to himself. The words held total finality. The other Navigators would have to wait. Zero just might understand this time, or, at least she would play pretend. But he doesn’t have time to think about this. 
<br></br><br></br>
One thing remains constant. Another way forward. And, in a small way that afternoon, contributed a reason to stay alive. He’s no longer left wandering. 
</p>

<img className={styles.rect} src='/magazine/1/2122/Rectangle 1905.png'></img>

<video className={styles.zk} playsInline autoPlay muted loop onClick={() => onClickZoomIn()}>
      <source src='./magazine/1/videos/zeitgeist2.mp4' type='video/mp4' />
</video>

<div
        ref={contentRef}
        onClick={() => onClickZoomOut(true, './magazine/1/videos/zeitgeist2.mp4')}
      >
        <img className={styles.zoomButton} src="/images/expandwhite.png" />
      </div>

<h7 className={styles.h7}>ZK Cypherpunk Zeitgeist Jump Gate #2</h7>
<h8 className={styles.h8}>Stranger and more wondrous with each voyage. Something so secretive, you’ve got to catch it at the right moment. 
<br></br><br></br>
The dividing point between the here and there, the now and then.
</h8>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton2}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/60/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<h9 className={styles.h9}> <a className={styles.cc0text2} href="https://github.com/F3Manifesto/ccomaterials/tree/main/zkzeitgeist"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h9>
 </div>

      <img className={styles.zerorender} src='/magazine/1/3940/editrender.png'></img>

    </div>
  )
}

export default Page3940