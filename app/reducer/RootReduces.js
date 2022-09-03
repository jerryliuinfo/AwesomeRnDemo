import { combineReducers } from "redux";
import HomeReduces from "./HomeReduces";


//这个表示把多个reducer连接起来， 为啥不能携程 const rootReducer, 再 export default rootReducer 的方式?
const rootReducer = combineReducers({
  home:HomeReduces,
});
export default rootReducer


