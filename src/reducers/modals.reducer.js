import { createModule } from 'redux-modules'
import cloneDeep from 'lodash.clonedeep'
import { Map } from 'immutable'

const DEFAULT_FIELDS = Map({
  isShowModalConnectMetamask: false,
  isShowModalSignup: false,
  isShowNotificationConnectMetamask: false,
  isShowBuyNowNftSubscription: false,
  isShowBuyNowNftCooldown: false,
  isShowBuyNowNftLimit: false,
  isShowModalUnlock: false,
  isShowModalYellow: false,
  isShowModalContent: false,
  params: null
})

export default createModule({
  name: 'modals',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: {
    setValue: {
      reducer: (state, { payload }) => {
        state = state.set(payload.field, payload.value)
        return state
      }
    }
  }
})
