import { Dimensions, NativeModules, ToastAndroid } from "react-native";

// export const LogUtils = NativeModules.LogUtil;


export function showLog(msg) {
  console.log(msg);
  // LogUtils.d(msg);
}

export function showToast(msg) {
  ToastAndroid.show(msg, ToastAndroid.SHORT);
}


export function showLongToast(msg) {
  ToastAndroid.show(msg, ToastAndroid.LONG);
}


export function encryptPhone(phone) {
  if (isEmptyStr(phone)) {
    return "";
  }
  let needReplace = phone.substring(3, 7);
  return phone.replace(needReplace, "****");
}


export function isPoneAvailable(str) {
  const myreg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}

export function isEmptyStr(s) {
  if (s == null || s === "" || s === undefined) {
    return true;
  }
  return false;
}

//不要轻易用这个方法，除非明确传入的参数为字符串类型
export function isNotEmptyStr(s) {
  if (typeof s == "string" && s.length > 0) {
    return true;
  }
  return false;
}

export function checkNetWork() {

}


export function getWindowWidth() {
  const width = Dimensions.get("window").width;
  // console.log(`getWindowWidth width:${width}`)
  return width;
}

export function getWindowHeight() {
  let height = Dimensions.get("window").height;
  // console.log(`getWindowHeight height:${height}`)
  //todo 发现这里返回的高度不是整个屏幕的高度，导致底部会流出一部分空白，先这么写后面再替换
  // height = 3000
  return height;
}


export function isEmptyArray(arr) {
  showLog(`isEmptyArray arr:${arr}`);
  if (arr && arr.length > 0) {
    return false;
  }
  return true;
}

export function base64Url(str) {
  return `data:image/png;base64,${str}`;
}

