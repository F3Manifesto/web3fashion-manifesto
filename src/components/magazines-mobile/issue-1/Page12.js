import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page12.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page12 = () => {

  return (
    <div className={styles.wrapper}>
      <img className={styles.back1} src='./magazine/1/1112/mobileback12.png' />
    <h5><p>Have a sandwich. You’ve reached the escape hatch. Beaten the game. 
<br></br><br></br>
Take your winnings and go home for good, or step right up to play again. 
<br></br><br></br>
Was it a fluke? Can you do better? Can you get a higher score? 
<br></br><br></br>
In the afterglow of amplification, an unavoidable spark has ignited waves of concurrent repetition spread by derivatives of original works each built on those that have risen and fallen alongside them, and in the times before them, until they have grown to a climax and left you with the credit, the reputation, the defensibility, the profit, and the threaded histories of it all. 
</p></h5>
<h6><p>In the postscript of this game, here’s your story, and within it your reward. 
<br></br><br></br>
But what’s a reward worth if you can’t take it apart into its barest functions and spin it all back up together again? 
<br></br><br></br>
In the glow of a snow crashed screen you have wondered how you’ve found your way here. Run it back to the interactive midpoint. Here’s where you broke away from the plot. The amplification device itself, in perpetual motion. 
</p></h6>
  </div> 
  )
}

export default Page12