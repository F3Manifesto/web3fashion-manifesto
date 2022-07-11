import React, { forwardRef } from 'react'
import windowSize from 'react-window-size'
import styles from './styles.module.scss'
import MapItem from '../../components/magazines/common/MapItem'
import ViewerSwitch from '../../components/magazines/common/ViewerSwitch'
import ViewerSwitchMobile from '@components/magazines-mobile/common/ViewerSwitch'

const mapList = [
  {
    issueId: '1',
    content: [
      {
        pageNum: 0,
        x: '10',
        y: '10',
        rotate: '0'
      },
      {
        pageNum: 1,
        x: '17',
        y: '10',
        rotate: '0'
      },
      {
        pageNum: 2,
        x: '24',
        y: '10',
        rotate: '0'
      },
      {
        pageNum: 3,
        x: '31',
        y: '10',
        rotate: '0'
      },
      {
        pageNum: 4,
        x: '38',
        y: '10',
        rotate: '0'
      },
      {
        pageNum: 5,
        x: '45',
        y: '10',
        rotate: '0'
      },
      {
        pageNum: 9,
        x: '52',
        y: '10',
        rotate: '0'
      },
      {
        pageNum: 11,
        x: '59',
        y: '10',
        rotate: '0'
      },
      {
        pageNum: 17,
        x: '66',
        y: '10',
        rotate: '0'
      },
     {
        pageNum: 19,
        x: '73',
        y: '10',
        rotate: '0'
      },
      {
        pageNum: 21,
        x: '80',
        y: '10',
        rotate: '0'
      },
     {
        pageNum: 27,
        x: '10',
        y: '24',
        rotate: '0'
      },
      {
        pageNum: 29,
        x: '17',
        y: '24',
        rotate: '0'
      },
      {
        pageNum: 31,
        x: '24',
        y: '24',
        rotate: '0'
      },
      {
        pageNum: 33,
        x: '31',
        y: '24',
        rotate: '0'
      },
      {
        pageNum: 35,
        x: '38',
        y: '24',
        rotate: '0'
      },
      {
        pageNum: 37,
        x: '45',
        y: '24',
        rotate: '0'
      },
      {
        pageNum: 39,
        x: '52',
        y: '24',
        rotate: '0'
      },
      {
        pageNum: 45,
        x: '59',
        y: '24',
        rotate: '0'
      },
      {
        pageNum: 47,
        x: '66',
        y: '24',
        rotate: '0'
      }
      ,
      {
        pageNum: 49,
        x: '73',
        y: '24',
        rotate: '0'
      }
      ,
      {
        pageNum: 55,
        x: '80',
        y: '24',
        rotate: '0'
      }
    ]
  }
]

const MapViewer = forwardRef((props, ref) => {
  const {
    issueId, windowWidth, onClickItem, onSwitchViewer
  } = props
  const currentMap = mapList.find((item) => item.issueId === issueId)
  console.log('currentMap: ', currentMap)
  const width = window.innerWidth
  return (
    <>
      <div className={styles.mapViewerWrapper}>
        <div className={styles.contentWrapper}>
          <img src='./magazine/map.png' alt='map-background' className={styles.mapImage} />
          {
            currentMap && currentMap.content
            && currentMap.content.map((item, index) => (
              <MapItem
                key={index}
                windowWidth={windowWidth}
                itemData={item}
                issueId={issueId}
                onClick={() => {
                  onClickItem(item.pageNum)
                }}
              />
            ))
          }
        </div>
      </div>
      {
        width < 768 ?
        <ViewerSwitchMobile
          mapSwitch
          viewers={['magazineview', 'exit']}
          onSwitchViewer={onSwitchViewer}
        /> :
        <ViewerSwitch
          mapSwitch
          viewers={['webview', 'magazineview', 'exit']}
          onSwitchViewer={onSwitchViewer}
        />
      }
    </>
  )
})

export default windowSize(MapViewer)
