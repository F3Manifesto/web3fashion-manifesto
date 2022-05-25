import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './styles.module.scss'

const HeaderTopLine = ({
  isMagazineContents
}) => {
  const [isCollapse, setIsCollapse] = useState(false)

  const router = useRouter()
  const { pathname } = router

  const isMobile = !(window.innerWidth > 768)

  if (isMagazineContents) {
    return null
  }

  const onIconHander = () => {
    setIsCollapse(!isCollapse)
  }

  return (
    <div
      className={styles.headerWrapper}
    >
      <img src="/images/logo.png" className={styles.logo} />

      <div className={cn(styles.links, isCollapse ? styles.expandedMenu : '')}>
        <button className={styles.mobileBtn} onClick={() => setIsCollapse(!isCollapse)}>
          <div></div>
          <div></div>
          <div></div>
          <img src='/images/icons/close-button.svg' />
        </button>

        <div className={styles.menuBar}>
          <a href="https://f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Home Port
          </a>
          <a href="https://popup.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Pop Up
          </a>
          
          <a href="https://market.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Digital Fashion Market
          </a>
          <a href="https://themanifest.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            The Manifest Gallery
          </a>
          <a href="https://web3cc0openlibrary.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Web3 CC0 Open Library
          </a>
        </div>
      </div>
    </div>
  )
}

HeaderTopLine.propTypes = {
  className: PropTypes.string,
  isShowStaking: PropTypes.bool,
  buttonText: PropTypes.string,
  linkText: PropTypes.string
}

HeaderTopLine.defaultProps = {
  className: '',
  isShowStaking: false,
 // buttonText: 'SIGN IN',
}

export default HeaderTopLine
