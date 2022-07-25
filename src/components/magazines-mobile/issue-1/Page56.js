import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page56.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page56 = () => {
  const dispatch = useDispatch()

  /*const onClickOkayButton = () => {
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
  
<img className={styles.glovediagram} src='./magazine/1/5758/Group 42 1.png' />
<p className={styles.h7}>Sunken Cat Eye Sunglasses (Croquis Edition)</p>
<p className={styles.h8}>Striking out. The before and after. You might have never seen the relentless dedication otherwise. To the cause of freedom, truth and knowledge.</p>
<div>

<a 
  /*className={styles.collectbutton}
  href="https://docs.f3manifesto.xyz/"
  target="_blank"
  rel="noreferrer"*/
  className={styles.collectbutton}
  //onClick={onClickCollectButton}
  href="https://market.f3manifesto.xyz/product/171/3/0/"
  target="_blank"
  rel="noreferrer"
  >
  {" "}Collect{" "}
</a> 
<p className={styles.h9}> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/nim"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></p>
 </div>

 </div>
  )
}

export default Page56