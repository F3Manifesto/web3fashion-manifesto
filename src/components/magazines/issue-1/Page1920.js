//import React from 'react'
import React, { useRef, useState } from 'react'
import styles from './page1920.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'


const Page1920 = () => {

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

  const [play, setPlay] = useState(false)
  const ref = useRef()

  return (
  <div className={styles.wrapper}>
<p>hi folks, this is typing animation using CSS</p>
<p>created with ♥ by 
  <a href="https://twitter.com/@samarkandiy" title="Azik Samarkandiy">@samarkandiy</a> 
:)<span>|</span></p> 
</div>
)
}

export default Page1920
