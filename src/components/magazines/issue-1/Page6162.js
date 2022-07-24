import React, {useRef} from 'react'
import styles from './page6162.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'


const Page6162 = () => {

  const dispatch = useDispatch()
  const contentRef = useRef()

/*  const onClickOkayButton = () => {
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
<h1>Hyperutility Packs for </h1>
<h2>Practical Fashion Revolutionaries</h2>
<a href="https://polygonscan.com/tx/0x446b4cc6f2f0dd933701fd662d4dd7e04d034ee0710952b644264425b770e7d9" target="_blank" rel="noreferrer">
        <img className={styles.nftwhite} src='/images/nftblack.png'></img>
      </a>
<h3>Supposedly Cousteau and his cronies invented the idea of putting walkie-talkies into the helmet. But we made ours with a special rabbit ear on the top so we could pipe in some music.</h3>
<h4>― Steve Zissou</h4>
<p className={styles.steven}>You get paid for the seven and a half hours a day you put in here,” Kelly often told new Bell Labs employees in his speech to them on their first day, “but you get your raises and promotions on what you do in the other sixteen and a half hours.</p>
<p className={styles.steventag}>― The Idea Factory</p>
<p className={styles.susan}>No, no. Don't say where we are! Once we know where we are, then the world becomes as narrow as a map. When we don't know, the world feels unlimited.</p>
<p className={styles.susantag}>― The Dark Forest</p>
<p className={styles.leon}>He knew that when the time came he wouldn't just do nothing. He couldn't do nothing.</p>
<p className={styles.leontag}>― Blueback</p>

<h5 className={styles.h7}>Hyperutility Pack: Nim 1.0</h5>
<h6 className={styles.h8}>Cross curricular explorations of both mathematics and weaving. Nim’s inventory could easily substitute as her crafting table.</h6>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/173/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/hyperutilitypacks/nim"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

<img className={styles.zeropack} src='./magazine/1/6162/nimpack.png' />

    </div>
    
  )
}

export default Page6162
