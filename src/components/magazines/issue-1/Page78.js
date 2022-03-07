import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page78.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page78 = () => {
  const dispatch = useDispatch()

  const onClickOkayButton = () => {
    dispatch(closeModalYellow())
  }
  
  const onClickCollectButton = () => {
    dispatch(
      openModalYellow({
        title: 'Coming, Soon!',
        buttonText: 'Okay',
        text: 'The dedicated marketplace will launch soon so you can collect and interact with these NFTs!',
        onClick: () => onClickOkayButton()
      })
    )
  }

  return ( 
  <div className={styles.wrapper}>
    <h1><p>The power of liquidity in how it shapes the flows of capital to each moment and market participant playing the game to decide in countless increments at all scales who governs the rules to change the rules of the game.
    <br></br><br></br>
The composability of these liquidity pools when built to deliver real capital growth for all involved auto-adjust through dynamic rebalancing that surfaces key information to those who wield the comprehensively decentralised social coordination and cultural delivery mechanisms now available to us. 
<br></br><br></br>
The all accessible record keeping of this key information is stored and shared on a transparent record that seems simple enough but hides yet another special power, when combined interoperably in a seamless, flexible backend for many front facing interfaces. 
<br></br><br></br>
The free flow of creative exchange & production is the ultimate and all too forgotten originating source for every ingenious use of primary capital in human history. It has always been an unforgivable distortion of personal wealth creation and societal wellbeing to dangle creativity precariously at the whims of censorship and constraint by any who feel like it. For the first time, we now have self reinforcing systems of permissionless collaboration. 
<br></br><br></br>
In Web3, value creation and the ability to capture revenue operates differently than in Web2. NFTs give clear and provable histories of scarce ownership, because what really determines value is rarity of ownership, not rarity of content. Free content removes the market leverage from those that would use their counterfeit positions against you, granting you more space and freedom to create. 
<br></br><br></br>
The sum of all of these factors makes for a greater whole through the new means of production— decentralised fabrication across all software and hardware, digital and physical layers. 
<br></br><br></br>
With the bare minimum of tools now available to us, those of us with the professional boldness and courage to wield them can now outproduce even all the factories of Shenzhen combined, right from our at home desktops or mobile pockets. 
<br></br><br></br>
Of course, if we have learned anything, it is that any sufficiently promising system will attract every attempt to tear it down. That’s why it isn’t enough to have plain vanilla Byzantine Consensus in place. Our systems are intermittently vulnerable to capture at all points, as with a long enough timeline at all points along that curve the possibility of a catastrophic black swan event is 100%. 
<br></br><br></br>
To complete the unfulfilled revolutions of industry, commerce and personal freedom, we must nest concentric circles of decentralisation within and beyond base technology layers to include the full primary capital, governance and cultural stacks. 
<br></br><br></br>
Once we have embraced our own sovereignty, the unlocking of hidden knowledge by these mechanisms simply can’t be shut down. We can use repeatable, instructive and shareable patterns in cloth and code to our hearts content. 
<br></br><br></br>
The infamous trilemma dissolves in favour of a properly understood and well defined perpetual consensus mechanism. 
<br></br><br></br>
We are now free to decide our own fate. 
</p></h1>
<img className={styles.cover} src='./magazine/1/78/bluecover.png' />
<h2><p>“Because here is a secret that only fractured souls know: We decide our stories.
<br></br><br></br>
What happens to you is not the story, the plot is not the story, the conflict is not the story, the world is not the story.
<br></br><br></br>
The story is you. You, the character. You, the reader. And the liminal watercolor of magic that happens between those two.
<br></br><br></br>
Love a story, hate a story, tire of a story, all the possible magic a story has is contained between those two immovable, unknowable forces.
<br></br><br></br>
Everything else, well it matters, but this is another story.“
<br></br><br></br>
Well it matters, but this is a funny story that speaks to a greater pattern; I Coined Web3 Fashion.
<br></br><br></br>
Come and claim your stake. 
</p></h2>
<video autoPlay muted loop>
      <source src='./magazine/1/videos/icoinedweb3fashion.mp4' type='video/mp4' />
    </video>
<h3>I Coined Web3 Fashion</h3>
<h4>A patchwork jacket woven with textile patterns of textual self sovereignty, named “I Coined Web3 Fashion”. Shaking off the shackles of a world where it is far more common to take credit for what you haven’t done, it’s exceptionally rare to have the near superpower of a transparent decentralised record and occasionally stand up in contrast to take credit for what you have done. That’s one small part of the message contained within “I Coined Web3 Fashion”. </h4>
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
<h5> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/icoinedweb3fashion"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h5>
 </div>

) 
}

export default Page78
