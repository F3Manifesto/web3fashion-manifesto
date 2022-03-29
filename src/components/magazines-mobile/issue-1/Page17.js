import React from 'react'
import styles from './page17.module.scss'

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


const Page17 = () => {


  return (
    <div className={styles.wrapper}>
    <a href="https://polygonscan.com/tx/0xc3dc438c2c01fe9c33429730fcaed429952d3f50c65d7992a47ca7656f79139c" target="_blank" rel="noreferrer">
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

 </div>
  )
}

export default Page17