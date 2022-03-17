import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page15.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page15 = () => {

  return (
    <div className={styles.wrapper}>
   <h1>Welcome to the CC0 Arcade. 
<br></br>
<br></br>
<br></br>
<br></br>
Are you ready to play the infinite game? 
<br></br>
<br></br>
<br></br>
<br></br>
Choose your destiny. 
<br></br>
<br></br>
<br></br>
Craft<br></br>
Defend<br></br>
Scale<br></br>
<br></br>
<br></br>
<br></br>
(_claim your stake_)
<br></br>
<br></br>
<br></br>
<br></br>
Insert CC0 to begin. 
<br></br>
</h1>
 </div>
  )
}

export default Page15