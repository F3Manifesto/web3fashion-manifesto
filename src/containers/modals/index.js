import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import ModalConnectWallet from '@containers/modals/modal-connect-wallet'
import ModalSignup from '@containers/modals/modal-sign-up'
import ModalConnectMatic from './modal-connect-matic'
import BuyNowNftSubscription from './buy-now-nft-subscription'
import ModalNftSubscriptionAReady from './modal-nft-subscription-ready'
import BuyNowNftCooldown from './buy-now-nft-cooldown'
import BuyNowNftLimit from './buy-now-nft-limit'
import ModalYellow from './modal-yellow'
import Unlock from './modal-unlock'

const Modals = () => {
  const modals = useSelector((state) => state.modals.toJS())
  const {
    isShowModalConnectMetamask,
    isShowModalSignup,
    isShowModalConnectMatic,
    isShowBuyNowNftSubscription,
    isNftSubscriptionReady,
    isShowBuyNowNftCooldown,
    isShowBuyNowNftLimit,
    isShowModalUnlock,
    isShowModalYellow
  } = modals

  return (
    <>
      {isShowModalConnectMetamask && <ModalConnectWallet />}
      {isShowModalSignup && <ModalSignup />}
      {isShowModalConnectMatic && <ModalConnectMatic />}
      {isShowBuyNowNftSubscription && <BuyNowNftSubscription />}
      {isNftSubscriptionReady && <ModalNftSubscriptionAReady />}
      {isShowBuyNowNftCooldown && <BuyNowNftCooldown />}
      {isShowBuyNowNftLimit && <BuyNowNftLimit />}
      {isShowModalUnlock && <Unlock />}
      {isShowModalYellow && <ModalYellow />}
    </>
  )
}

export default memo(Modals)
