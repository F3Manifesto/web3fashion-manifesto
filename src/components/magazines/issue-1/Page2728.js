import React, {useRef} from 'react'
import styles from './page2728.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'


const Page2728 = () => {

  const dispatch = useDispatch()
  const contentRef = useRef()

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
<h1>Hyperutility Packs for </h1>
<h2>Practical Fashion Revolutionaries</h2>
<a href="https://polygonscan.com/tx/0x02d8c80ae1e0ffeb3fa6d485b30dec8c90c3c7b06f6a7342bee410d09dd8d668" target="_blank" rel="noreferrer">
        <img className={styles.nftwhite} src='/images/nftblack.png'></img>
      </a>
<h3>Take for example, a hammer: it is ready-to-hand; we use it without theorizing... we see the hammer in a context or world of equipment that is handy or remote, and that is there ”in order to” do something.</h3>
<h4>- Commentary on Heideggerian</h4>
<p className={styles.steven}>If you find yourself asking yourself (and your friends), "Am I really a writer? Am I really an artist?" chances are you are. The counterfeit innovator is wildly self-confident. The real one is scared to death.</p>
<p className={styles.steventag}>- Steven Pressfield, The War of Art: Winning the Inner Creative Battle</p>
<p className={styles.susan}>A thing is a thing, not what is said of that thing.</p>
<p className={styles.susantag}>- Susan Sontag</p>
<p className={styles.leon}>Always like this.</p>
<p className={styles.leontag}>- Léon, Léon the Professional</p>

<h5 className={styles.h7}>Hyperutility Pack: Zero 1.0</h5>
<h6 className={styles.h8}>something something</h6>
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
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/hyperutilitypacks/zero"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

<img className={styles.zeropack} src='./magazine/1/2728/zeropack1.png' />

    </div>
    
  )
}

export default Page2728
