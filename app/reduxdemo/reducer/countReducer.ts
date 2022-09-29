import * as types from '../actions/countactionTypes';


export interface ICountReducerState{
  count:number,
}
const initialState:ICountReducerState = {
  count: 0
};

export default function CountReducer(state = initialState, action:any = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: action.count
      };
    case types.DECREMENT:
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
}
