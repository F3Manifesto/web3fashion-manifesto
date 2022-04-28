import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page40.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page40 = () => {
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
       <a href="https://polygonscan.com/tx/0xdc510996713f08530372bfaa4b7e7f6be6df668aa34f048c390d0151c17b34d4" target="_blank" rel="noreferrer">
      <img className={styles.nftblack} src='/images/nftblack.png'></img></a>
<h1>Hyperutility Packs for </h1>
<h2>Practical Fashion Revolutionaries</h2>
<h3> The destination was not really the point. The true desire was to get away—to go, as he concluded, ‘anywhere! anywhere! so long as it is out of the world!</h3>
<h4>― Alain de Botton</h4>
<h5>Before the real city could be seen it had to be imagined, the way rumours and tall tales were a kind of charting.”</h5>
<h6>― Michael Ondaatje</h6>
<p className={styles.h7}>He went on a distant journey, pushing himself to exhaustion,
but then was brought to peace....They tied together a raft...Enkidu steered it...while Gilgamesh held the head of Humbaba.</p>
<p className={styles.h8}>― The Epic of Gilgamesh</p>
<p className={styles.h9}>It is an extremely powerful mathematical tool that allows you to view your signals in a different domain, inside which several difficult problems become very simple to analyze. The transform is energy preserving.</p>

<p className={styles.h10}>― Commentary on Fourier Transform</p>
<p className={styles.title}>Hyperutility Pack: Edit 1.0</p>
<p className={styles.message}>Edit’s interactive closet- each thread intertwined with his desire to know and embrace everything around him. Can you forbid a man from that?</p>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/58/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.cc0}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/hyperutilitypacks/edit"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

 </div>
  )
}

export default Page40