import { useAppContext } from '@utils/AppContext'
import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import styles from './styles.module.scss'

export default function swipePage({ children }) {
  const { pageIndex, setPageIndex } = useAppContext()

  return (
    <div className={styles.wrapper}>
      <SwipeableViews enableMouseEvents onChangeIndex={index => setPageIndex(index)}>
        { children }
      </SwipeableViews>
    </div>
  )
}
