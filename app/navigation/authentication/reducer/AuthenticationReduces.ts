import { showLog } from "../../../util/ComUtils";

interface IHomeReducerState {
  isLoading: boolean,
  isSignOut: boolean,
  token:string,
}

const initialState: IHomeReducerState = {
  isLoading: true,
  isSignOut: true,
  token: ""
};


export default (state = initialState, action: any = {}) => {
  showLog(`HomeReducer action:${JSON.stringify(action)}`);
  switch (action.type) {
    case "UPDATE_AUTHENTICATION":
      return {
        ...state,
        isLoading: action.isLoading,
        isSignOut: action.isSignOut,
        token: action.token
      };

    default:
      return state;
  }
}
