import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './page9.module.scss'
import {
  openModalYellow,
  closeModalYellow
} from '@actions/modals.actions'

const Page9 = () => {

  return (
    <div className={styles.wrapper}>
      <h1>The Right to Create</h1>
      <img className={styles.planes} src='./magazine/1/910/planes.png' />
      <h2>TO CREATE * TO GOVERN * TO VOTE * TO STAKE</h2>
      <h3>
        <p>
        In the business of fabricating more capital, from source manufacturers, to assemblers, to creative culture makers, the right to create is the essential active element for the ignition of this revolutionary Cambrian explosion. It’s what moves us from just catatonic statements against the corrupted regime to decisive actions with guaranteed high yielding capacity.
<br></br><br></br>
Most of the economic choices that each of us are presented with today come down to different flavours of communism with margins presented as capitalism.
<br></br><br></br>
In this case, what we mean by communism is specifically managed markets where all economic activity involves going to some bureaucrat somewhere –– it doesn't matter whether that bureaucrat is a state bureaucrat, corporate bureaucrat, or even something like a college campus or religious bureaucrat –– it's going to some kind of bureaucrat somewhere to get approval of your actions from a very limited illusion of choice. A menu of options presented as free choice that is really all ultimately the same. They pose no threat to shake up the semi-competitive status quo.
<br></br><br></br>
We are told this is what capitalism is. It’s definitely not. But ultimately, it doesn’t matter, because whichever ‘ism’ we’re living in is a distraction from our inherent right to create choices, direction, works of value, and destinies of our own.
<br></br><br></br>
What use are words saying you have a right if you don’t exercise it?
<br></br><br></br>
What use is it to say that the world is open for those with the skill to code a decentralised financial system when you have made no such skill your devotion?
<br></br><br></br>
What use to say the skill to fabricate gives you goods to sell, digital and physical, networked through content when mediums are choked by ways of complacency and fear?
<br></br><br></br>
What use again to mint keys for well governed access when space is prized more for its walls than the boundless derivatives of creativity it could enable?
<br></br><br></br>
Half-heartedness won’t achieve to change what you said you are against. You set out to transcend beyond visible limits, but you keep stopping for long periods at mean-spirited one sided portals.
<br></br><br></br>
This road demands courage and stamina. With these tools you quicken your ascent. Use them!
        </p>
      </h3>
  </div> 
  )
}

export default Page9