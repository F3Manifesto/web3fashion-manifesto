import React, { memo, useEffect } from 'react';
//import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import BottomLine from '@components/bottom-line';
import api from '@services/api/api.service';
import { getAccount } from '@selectors/user.selectors';
import globalActions from '@actions/global.actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';


const LandingPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const account = useSelector(getAccount);

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('485692459240447');
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, []);

  useEffect(() => {
    const fetchDigitalaxSubscriptionCollectors = async () => {
      const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account);
      if (
        digitalaxSubscriptionCollectors[0] &&
        digitalaxSubscriptionCollectors[0].parentsOwned.length
      ) {
        dispatch(globalActions.setContentUnlocked(true));
      }
    };

    fetchDigitalaxSubscriptionCollectors();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <video autoPlay muted playsinline loop className={styles.videoBackground}>
          <source src={'/video/background.mp4'} />
        </video>
        <div className={styles.bodyWrapper}>

          <div className={styles.header}> Web3 Fashion Manifesto</div>
          <div className={styles.subTitle}>A rally flag for the entire web3 fashion movement.</div>
          <div className={styles.magazineWrapper}>
            <img
              className={styles.mainMagazine}
              src="/images/nft/1/cover.png"
              onClick={() => {
                router.push('/manifesto/1');;
              }}
            />
          </div>
        </div>
        <BottomLine transparent={false} />
      </div>
    </>
  );
};

export default memo(LandingPage);

/*
//import React, { useState, useEffect } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
//import Router, { useRouter } from 'next/router'
//import WebViewer from '@containers/web-view'
import MagazineViewer from '@containers/magazine-view'
import MagazineMobile from '@containers/magazine-mobile'
//import api from '@services/api/api.service'
import MapViewer from '@containers/map-view'
import magazineIssues from '@constants/magazines'
import { details } from '@constants/nft_subscription_issues'
//import { getAccount } from '@selectors/user.selectors'
//import globalActions from '@actions/global.actions'
import { getViewMethod } from '@selectors/global.selectors'

const LandingPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { slug } = router.query
  const [currentPage, setCurrentPage] = useState(-1)
  const account = useSelector(getAccount)
  const viewMethod = useSelector(getViewMethod)
  const width = window.innerWidth

  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId

  useEffect(() => {
    const fetchDigitalaxSubscriptionCollectors = async () => {
      try {
        console.log('account: ', account)
        let contentUnlocked = false
        const issueIndex = magazineIssues.findIndex((item) => item.issueId === issueId)

        if (account) {
          const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account)

          if (
            digitalaxSubscriptionCollectors[0]
            && digitalaxSubscriptionCollectors[0].parentsOwned.filter((value) => value.name.includes(`Web3 Fashion Manifesto ${details[issueIndex][0].issueIndex}`)).length
          ) {
            dispatch(globalActions.setContentUnlocked(true))
            contentUnlocked = true
          } else {
            dispatch(globalActions.setContentUnlocked(false))
          }
        }

        if (issueIndex < 0) {
          Router.push(`/manifesto/${magazineIssues[0].issueId}`)
          return
        }

        const pageNumber = slug.length > 1
          ? slug[1] === 'hidden'
            ? magazineIssues[issueIndex].freePageCount + 1
            : parseInt(slug[1])
          : 0

        if (pageNumber > magazineIssues[issueIndex].freePageCount && !contentUnlocked) {
          console.log('redirecting... to : ', magazineIssues[issueIndex].freePageCount)
          Router.push(`/manifesto/${issueId}/${magazineIssues[issueIndex].freePageCount}`)
          return
        }
        setCurrentPage(pageNumber)

      } catch (e) {
        console.log('e: ', e)
      }
    }

    fetchDigitalaxSubscriptionCollectors()
  }, [slug, account])

  const switchViewer = (viewer) => {
    if (viewer === 'exit') {
      Router.push('/')
      return
    }
    dispatch(globalActions.setViewMethod(viewer))
  }

  if (currentPage < 0) {
    return <></>
  }

  if (viewMethod === 'webview') {
    return (
      <WebViewer
        issueId={issueId}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
        onChangePageNumber={(number) => {
          setCurrentPage(number)
        }}
      />
    )
  } if (viewMethod === 'magazineview') {
    if (width > 768) {
      return (
        <MagazineViewer
          issueId={issueId}
          initPage={currentPage}
          onSwitchViewer={switchViewer}
        />
      )
    }
    return (
      <MagazineMobile
        issueId={issueId}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
      />
    )

  }

  return (
    <MapViewer
      issueId={issueId}
      onClickItem={(pageNumber) => {
        setCurrentPage(pageNumber)
        dispatch(globalActions.setViewMethod('webview'))
      }}
      onSwitchViewer={switchViewer}
    />
  )
}

export default memo(LandingPage);*/


