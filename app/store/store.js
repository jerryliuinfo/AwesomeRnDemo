import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { createLogger } from "redux-logger";
import rootReduces from "../reducer/RootReduces";

const logger = createLogger({
});

const middleWares = [
    thunk,
    logger
]

/**
 * redux-logger中间件应该放在所有中间件的最后一个，因为有的action可能不是一个平面对象，可能是一个函数（副作用函数），
 * 这时候需要在前面通过一些其它的中间件去处理，不然redux-logger会显示错误
 * @type {StoreEnhancerStoreCreator<{dispatch: ThunkDispatch<any, undefined, AnyAction>}, {}>}
 */
const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);


export default function configureStore(){
    const store = createStoreWithMiddleware(rootReduces);
    return store
}


