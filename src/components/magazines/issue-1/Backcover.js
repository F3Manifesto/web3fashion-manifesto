import React from 'react'
import styles from './backcover.module.scss'

const Backcover = () => (
  <div className={styles.wrapper}>
    <img src='/magazine/1/cover/cover.png' width='960' />
    <h1>
    The Manifesto Pages Evolve At Continuous Intervals.
    </h1>
    <h2 className={styles.h2}>
    Stay up to date across:
    </h2>
    <div className={styles.section1}>
        <ul>
          <li>
          <a href="https://twitter.com/f3manifesto" target= "_blank" rel="noreferrer">Twitter</a>
          </li>
          <li>
          <a href="https://mirror.xyz/f3manifesto.eth" target= "_blank" rel="noreferrer">Mirror</a>
          </li>
          <li>
          <a href="https://f3manifesto.medium.com/" target= "_blank" rel="noreferrer">Medium</a>
          </li>
          <li>
          <a href="https://docs.f3manifesto.xyz/" target= "_blank" rel="noreferrer">Documentation</a>
          </li>
          <li>
          <a href="https://www.tiktok.com/@f3manifesto" target= "_blank" rel="noreferrer">TikTok</a>
          </li>
          <li>
          <a href="https://www.youtube.com/channel/UC5SOYiDrdooqNusoS5vrJAw" target= "_blank" rel="noreferrer">Youtube</a>
          </li>
          <li>
          <a href="https://github.com/F3Manifesto" target= "_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
    <img className={styles.line1} src='/magazine/1/cover/line.png' width='834' />
  </div>
)

export default Backcover

