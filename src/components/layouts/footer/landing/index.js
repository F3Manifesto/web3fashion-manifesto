import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.textLogo}>
          <img className={styles.imageLogo} src='/images/logoBig.png' alt='logo_big' />
        </div>
        
        <div className={styles.centerWrapper}>
          <div className={styles.description}>
            Reach out across any of our social media channels to get more involved with the manifesto, cc0 web3 fashion & the open metaverse. ALL ENGINEERING AND ARCHITECTURE IS FORKED FROM THE DIGITALAX OPEN SOURCE PROTOCOL STACK.
          </div>

          <div className={[styles.dFlex, styles.iconsLine].join(' ')}>
            <a href="https://www.tiktok.com/@f3manifesto" target="_blank" rel="noreferrer">
              <img
                src="/images/tiktok-icon.png"
                alt="tiktok-icon"
                className={styles.tiktokIcon}
              />
            </a>
            <a href="https://www.youtube.com/channel/UC5SOYiDrdooqNusoS5vrJAw" target="_blank" rel="noreferrer">
              <img
                src="/images/youtube-icon.png"
                alt="youtube-icon"
                className={styles.youtubeIcon}
              />
            </a>
            <a href="https://f3manifesto.medium.com/" target="_blank" rel="noreferrer">
              <img
                src="/images/medium-icon.png"
                alt="medium-icon"
                className={styles.mediumIcon}
              />
            </a>
            <a href="https://mirror.xyz/f3manifesto.eth" target="_blank" rel="noreferrer">
              <img
                src="/images/mirror.png"
                alt="mirror-icon"
                className={styles.mirrorIcon}
              />
            </a>
            <a href="https://twitter.com/f3manifesto" target="_blank" rel="noreferrer">
              <img
                src="/images/twitter-icon.png"
                alt="twitter-icon"
                className={styles.twitterIcon}
              /> 
            </a>
            <a href="https://docs.f3manifesto.xyz/" target="_blank" rel="noreferrer">
              <img
                src="/images/gitbook.png"
                alt="gitbook-icon"
                className={styles.gitbookIcon}
              /> 
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

