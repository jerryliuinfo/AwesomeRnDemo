import { AsyncStorageUtil } from "../../../util/AsyncStorageUtil";
import { UPDATE_AUTHENTICATION_INFO } from "./AuthenticationActionTypes";
import { isEmptyStr } from "../../../util/ComUtils";


export const checkToken = () => async (dispatch: Function, getState: any) =>{
    dispatch({
      type:UPDATE_AUTHENTICATION_INFO,
      isLoading:true
    })
   const token = await AsyncStorageUtil.get("token")

   setTimeout(() => {
     dispatch({
       type:UPDATE_AUTHENTICATION_INFO,
       isLoading:false,
       isSignOut:isEmptyStr( token),
       token:token
     })
   },2000)

 /* isLoading: action.isLoading,
    isSignOut: action.isSignOut,
    token: action.token*/
}

export const doLogin = (username:string,pwd:string) => async (dispatch: Function, getState: any) =>{
  const token = `${username}_${pwd}`
   AsyncStorageUtil.save("token", pwd).then(() => {
    dispatch({
      type:UPDATE_AUTHENTICATION_INFO,
      isLoading:false,
      isSignOut:false,
      token:token
    })
  })
}

export const signOut = () => async (dispatch: Function, getState: any) =>{
  AsyncStorageUtil.delete("token").then(() => {
    dispatch({
      type:UPDATE_AUTHENTICATION_INFO,
      isSignOut:true,
      token:undefined
    })
  })
}
