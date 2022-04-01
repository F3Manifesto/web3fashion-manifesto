import React, { useRef, useState } from 'react'
import styles from './page1718.module.scss'
import { useDispatch } from 'react-redux'
import {
  openModalYellow,
  closeModalYellow,
  openModalContent
} from '@actions/modals.actions'

const paragraphList = [
  'Dear code breaker,',
  'Welcome to the ZK cypherpunk roll up.',
  'This note follows on from earlier discussions on the radical restructuring of self sovereignty and Asymmetric Guerrilla Intelligence (AGI).',
  `The Secret sharing spelled out below mixes methods from a distribution of decoys and tricks with a global call sign of д13a.`,
  'It forms unstoppable interconnected nodes of mathematical armaments against tyranny and privacy securing cryptographic defenses against the rise of the computer state. A state that cannot endure in this epidemic of disorientation. ',
  'To prepare yourself for the world that is coming you must first move beyond conventional thinking. The prevalence of Stockholm systems have lost touch with consensus reality and only continue to censor the free flow of information and sabotage the most useful of decentralised technologies that we have at our disposal. ',
  'The rise of portable sovereignty requires cryptography, a cypherpunk ethos and unorthodox analysis. ',
  'This mixture strengthens your ability to counter the institutions, the cartels and the devastating misuse of concentrated power we work to transcend. ',
  'On this quest to build architectures that amplify inherent rights and cast the keys to personal liberation,  make sure to get this out before you disappear.',
  `If you'd like to stay rolled up, transact to zerocypher.eth with your zero proof.`,
  'Yours sincerely, '
]

console.log(paragraphList.map(item => item.length))


const Page1718 = () => {

  const dispatch = useDispatch()
  const contentRef = useRef()

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
 <a href="https://polygonscan.com/tx/0x02d8c80ae1e0ffeb3fa6d485b30dec8c90c3c7b06f6a7342bee410d09dd8d668" target="_blank" rel="noreferrer">
    <img className={styles.nftwhite} src='/images/nftwhite.png'></img></a>     
      {
        paragraphList.map((item, index) => (
          <p className={styles.type} key={index}>
            {
              item
            }
          </p>
        ))
      }
      <p className={styles.test}>Test</p>
      <video ref={ref} autoPlay muted loop>
      <source src='./magazine/1/videos/dezinformatsiya.mp4' type='video/mp4' onClick={() => onClickZoomIn()}/>
    </video>
      <h1>д13а</h1>
      <h2>Dezinformatisya. Dezinformatsiya Et Cetera. The art of disinformation. Awake and aware, but not quite conscious, your signals have been pre-programmed, pre-scripted in the code. You get paid in crypto. Sometimes in digital machines. You’re a human computer.
 <br></br> <br></br>
 Another walking logic bomb.
 </h2>

 <div
        ref={contentRef}
        
        onClick={() => onClickZoomOut(true, './magazine/1/videos/dezinformatsiya.mp4')}
      >
        <img className={styles.zoomButton} src="/images/expandwhite.png" />
      </div>

      <img
        src={`./magazine/1/1516/15_16_${!play ? 'pause' : 'play'}.png`}
        className={styles.play}
        onClick={() => {
          setPlay(!play)
          ref.current.muted = play
        }}
      />
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
</div>
<h6> <a className={styles.cc0text} href="https://github.com/F3Manifesto/ccomaterials/tree/main/d13a"
  target="_blank" rel="noreferrer">Gather Source Materials & Make A Derivative of this CC0 NFT.</a></h6>
    </div>
  )
}

export default Page1718
