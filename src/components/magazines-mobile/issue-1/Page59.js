import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page59.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page59 = () => {
  const dispatch = useDispatch()

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
 

  return (
    <div className={styles.wrapper}>
       <a href="https://polygonscan.com/tx/0x446b4cc6f2f0dd933701fd662d4dd7e04d034ee0710952b644264425b770e7d9" target="_blank" rel="noreferrer">
      <img className={styles.nftblack} src='/images/nftblack.png'></img></a>
<h1>Hyperutility Packs for </h1>
<h2>Practical Fashion Revolutionaries</h2>
<h3>Supposedly Cousteau and his cronies invented the idea of putting walkie-talkies into the helmet. But we made ours with a special rabbit ear on the top so we could pipe in some music.</h3>
<h4>― Steve Zissou</h4>
<h5>You get paid for the seven and a half hours a day you put in here,” Kelly often told new Bell Labs employees in his speech to them on their first day, “but you get your raises and promotions on what you do in the other sixteen and a half hours.</h5>
<h6>― The Idea Factory</h6>
<p className={styles.h7}>No, no. Don't say where we are! Once we know where we are, then the world becomes as narrow as a map. When we don't know, the world feels unlimited.</p>
<p className={styles.h8}>― The Dark Forest</p>
<p className={styles.h9}>He knew that when the time came he wouldn't just do nothing. He couldn't do nothing.</p>
<p className={styles.h10}>― Blueback</p>
<p className={styles.title}>Hyperutility Pack: Nim 1.0</p>
<p className={styles.message}>Cross curricular explorations of both mathematics and weaving. Nim’s inventory could easily substitute as her crafting table.</p>
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
<p className={styles.cc0}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/hyperutilitypacks/nim"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

 </div>
  )
}

export default Page59