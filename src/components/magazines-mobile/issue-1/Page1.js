import React from 'react'
import styles from './page1.module.scss'

const Page1 = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://polygonscan.com/tx/0xbcb82b2024890703f89a20aa530f764620f646ae206dd4071d024c2de13f467d" target="_blank" rel="noreferrer">
      <img className={styles.nftwhite} src='/images/nftblack.png'></img></a>
      <h1>
        “The cultural authenticity of cloth arises not from the purity of its origins but from the ways in which individuals and groups turn textiles to their own purposes.”
      </h1>
      <h2>
        -Virginia Postrel, The Fabric of Civilization: How Textiles Made the World
      </h2>
      <h3>"Information is power. But like all power, there are those who want to keep it for themselves."</h3>
      <h4>-Aaron Swartz, The Guerilla Open Access Manifesto</h4>
      <h5>“I like my money right where I can see it... hanging in my closet.”</h5>
      <h6>-Sarah Jessica Parker</h6>
      <div className={styles.text1}>
        <p>In this new world, you are who you say you are.<br></br><br></br>
        The power of sovereignty is spread to all through our stories, status, and style.<br></br><br></br>
        Make an instrument out of recordings of their voices in fabric — It’s the closest thing we’ve seen to civilization recreating itself.<br></br><br></br>
        The death of democracy, prosperity, and personal freedom is only a myth for those who’ve never had better than the illusion of them.<br></br><br></br>
        When survival isn’t enough, to see the stories that have never been told, the language left over from the pre-metaverse world is insufficient to describe where we live now.<br></br><br></br>
        Craftspeople who were able to benefit their tribes and pass down their legacies through the ages, creative and curious people, there are still many others in this enhanced world to come, even if you’ve seen only a few of them learn the loom that creates sovereign networks like fire.<br></br><br></br>
        We’ve been to this narrative fork before but never followed it in the right direction long enough to break through.<br></br><br></br>
        Then adrift in a stranger's galaxy for a time, we remember everything.</p></div>
        <div className={styles.text2}><p>"Just as there are many parts needed to make a human a human there's a remarkable number of things needed to make an individual what they are. A face to distinguish yourself from others. A voice you aren't aware of yourself. The hand you see when you awaken. The memories of childhood, the feelings for the future. That's not all. There's the expanse of the data net my cyber-brain can access. All of that goes into making me what I am. Giving rise to a consciousness that I call "me." And simultaneously confining "me" within set limits.
        <br></br><br></br>
        What we see now is like a dim image in a mirror; then we shall see face-to-face."</p></div>
        <div className={styles.text3}>-Ghost In The Shell (1995)</div>
    </div>
  )
}

export default Page1