import { showLog } from "../util/ComUtils";

const initialState = {


};

export default (state = initialState, action = {}) => {
    showLog(`HomeReducer action:${JSON.stringify(action)}`)
    switch (action.type) {
        default:
            return state;
    }
}
