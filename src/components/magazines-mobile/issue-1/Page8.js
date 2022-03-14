import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page8.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page8 = () => {
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
      <source src='./magazine/1/videos/icoinedweb3fashion.mp4' playsInline autoPlay loop muted type='video/mp4' />
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

export default Page8