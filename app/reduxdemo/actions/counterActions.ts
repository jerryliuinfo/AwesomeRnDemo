import * as types from './countactionTypes';
import { showLog, showToast } from "../../util/ComUtils";

export const increment = () => (dispatch: Function, getState: any) => {
  let oldCount = getState().countReducer.count
  showToast(`increment oldCount:${oldCount} --->`)

  dispatch({
      type: types.INCREMENT,
      count:(oldCount + 1)
    })
}

export const decrement = () => (dispatch: Function, getState: any) => {
  showLog(`decrement --->`)
  let oldCount = getState().countReducer.count
  dispatch({
    type: types.DECREMENT,
    count:(oldCount - 1)
  })
}


