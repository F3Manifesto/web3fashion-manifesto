import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './styles.module.scss'

const BottomLine = ({ borderWhite = true }) => {
  const items = [
    'CC0',
    'OPEN ACCESS',
    'WEB3',
    'SELF SOVEREIGN',
    'WEB3 FASHION',
    'THE MANIFESTO',
    'dezinformatsiya',
    'ZERO KNOWLEDGE'
  ]

  return (
    <div className={styles.bottomLine} style={{ borderColor: borderWhite ? 'white' : 'black' }}>
      <div className={styles.animationForm}>
        <div className={styles.node}>
          {items.map((item, index) => <div className={styles.bottomItem} key={index} style={{ color: borderWhite ? 'white' : 'black' }}>{item}</div>)}
        </div>
        <div className={styles.node}>
          {items.map((item, index) => <div className={styles.bottomItem} key={index} style={{ color: borderWhite ? 'white' : 'black' }}>{item}</div>)}
        </div>
        <div className={styles.node}>
          {items.map((item, index) => <div className={styles.bottomItem} key={index} style={{ color: borderWhite ? 'white' : 'black' }}>{item}</div>)}
        </div>
        <div className={styles.node}>
          {items.map((item, index) => <div className={styles.bottomItem} key={index} style={{ color: borderWhite ? 'white' : 'black' }}>{item}</div>)}
        </div>
      </div>
    </div>
  )
}

export default BottomLine
