import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page27.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page27 = () => {
  const dispatch = useDispatch()

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
       <a href="https://polygonscan.com/tx/0x455f23ff2e51b3edb74a2050af63df267b474bef0785bddc886cee4c92c862f5" target="_blank" rel="noreferrer">
      <img className={styles.nftblack} src='/images/nftblack.png'></img></a>
<h1>Hyperutility Packs for </h1>
<h2>Practical Fashion Revolutionaries</h2>
<h3>Take for example, a hammer: it is ready-to-hand; we use it without theorizing... we see the hammer in a context or world of equipment that is handy or remote, and that is there ”in order to” do something.</h3>
<h4>- Commentary on Heideggerian</h4>
<h5>If you find yourself asking yourself (and your friends), "Am I really a writer? Am I really an artist?" chances are you are. The counterfeit innovator is wildly self-confident. The real one is scared to death.</h5>
<h6>- Steven Pressfield, The War of Art: Winning the Inner Creative Battle</h6>
<p className={styles.h7}>A thing is a thing, not what is said of that thing.</p>
<p className={styles.h8}>- Susan Sontag</p>
<p className={styles.h9}>Always like this.</p>

<p className={styles.h10}>- Léon, Léon the Professional</p>
<p className={styles.title}>Hyperutility Pack: Zero 1.0</p>
<p className={styles.message}>The first pack to be revealed bundles items from Zero's wardrobe and toolset- inclusive of fashionable workarounds, new styles that skirt restrictions and uncanny gadgets to expedite her own metaversal passage.</p>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  onClick={onClickCollectButton}
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.cc0}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/hyperutilitypacks/zero"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

 </div>
  )
}

export default Page27