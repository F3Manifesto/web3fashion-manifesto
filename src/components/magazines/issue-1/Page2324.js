import React from 'react'
import styles from './page2324.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'


const Page2324 = () => {

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
<img className={styles.glovediagram} src='./magazine/1/2324/lensesgraphic.png' />
<h4>Cypherline Braided Hyper Visor Lenses (Croquis Edition)</h4>
<h5>Personal visual keys that secure and surround us.</h5>
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
<h6> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/blob/main/zero"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h6>
 </div>

    </div>
  )
}

export default Page2324
