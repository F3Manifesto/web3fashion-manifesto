import React, { useEffect, useRef } from 'react'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'
import { useDispatch } from 'react-redux'
import styles from './page5556.module.scss'

const Page5556 = () => {

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
      <p>As well as wondering about what fish, greenland sharks and other aquatic life thought, Nim also wondered about programmable oceanic machinery— how to better arrange the masts and scopes to minimise drag, how to increase the efficiency and thrust of the propeller and two upper control blades, and how to more effectively modify the forebody in such a way that the transition between laminar and turbulent flow is moved further downstream to reduce the total acoustic energy by an increasing proportion of the laminar boundary layer. 
<br></br><br></br>
Like food to her, Nim’s love for all of these things: physics, math, the sea, exploring the underwater world, the wonders of marine life. Holding her breath until she is blue in the face. Simply bold, mischievous sometimes, but consistently evermore pragmatic. A good mechanic and one of the only Navigators to live off of the sea.  
<br></br><br></br>
Somersaults in the water and kicking herself downward, staring through a mosaic of cosmetic distractions, a tacit agreement with the creatures of the chasmic swimming around her. 
<br></br><br></br>
This long descent towards the deep end of the mesopelagic zone and far beyond that to the abyssopelagic region charms her mind into interlacing endless loops, no functional exit, continuous curiosity, delayed closure on some of her most defeating mysteries. 
<br></br><br></br>
Crying sometimes, thinking, remembering.
<br></br><br></br>
She hated how it pinched at her nerves, wasted her time, wore her down. Almost physically painful to sort through such sleuths and persist in asking questions that no one seems to know how to answer.
<br></br><br></br>
The sea has taken its fair share. 
<br></br><br></br>
But she always comes back.
<br></br><br></br>
Hastening her disappearance downward into the expanse. Totally spellbound by the emporium of it all.
<br></br><br></br>
Do you want to talk about the sea or be in it? 
<br></br><br></br>
We come from water. We belong to it.
<br></br><br></br>
Reflecting off of the glistening backs of Beluga whales all around, the Chamber takes shape through the coral reef. Wrapped in seagrass, jagged swells form around the mass. The sea awakes.
<br></br><br></br>
Verifying coordinates with time, Nim winds up her pocketwatch. Antique, round, brass, chain attached and acquired through somewhat peculiar circumstances—  circumstances that probably only Zero will reveal in time, it is her room afterall. 
<br></br><br></br>
Delicate inner workings at the heart of the device. The metal pendulum reverses its cadence before locking into a bright expressive tempo. The intricate sets of resonators vibrate to signal the end of the sequence. The Chamber entrance begins to unseal.
<br></br><br></br>
Nim hopes this time will be different. That it will mean something more. She closes her eyes, reaches through the hatch. Feeling her way through, tiny white messages drift about, floating to lay rest in the palm of her hand. Her skin like reams of powered blue silver.
<br></br><br></br>
“Write to me?”, ink etched messily into the note.
<br></br><br></br>
She again checks her pocketwatch. She’s shocked to see that only half an hour has gone by. She’ll just have to count the weeks. Either way, the message is all to clear. She’d found the underlying mathematical skeleton to it all. 
</p>

<img className={styles.rect} src='/magazine/1/2122/Rectangle 1905.png'></img>

<video className={styles.zk} playsInline autoPlay muted loop onClick={() => onClickZoomIn()}>
      <source src='./magazine/1/videos/zeitgeist3.mp4' type='video/mp4' />
</video>

<div
        ref={contentRef}
        onClick={() => onClickZoomOut(true, './magazine/1/videos/zeitgeist3.mp4')}
      >
        <img className={styles.zoomButton} src="/images/expandwhite.png" />
      </div>

<h7 className={styles.h7}>ZK Cypherpunk Zeitgeist Jump Gate #3</h7>
<h8 className={styles.h8}>Not even remotely abiotic once you know where to look.
<br></br><br></br> 
Through a sea of white noise and hard randomised static. On the rare occasion you decide to come up for air. 
</h8>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton2}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/164/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<h9 className={styles.h9}> <a className={styles.cc0text2} href="https://github.com/F3Manifesto/ccomaterials/tree/main/zkzeitgeist"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h9>
 </div>

      <img className={styles.zerorender} src='/magazine/1/5556/nimrender.png'></img>

    </div>
  )
}

export default Page5556