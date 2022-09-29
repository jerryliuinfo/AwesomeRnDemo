import {Dimensions, NativeModules, StatusBar, ToastAndroid} from "react-native";

export const LogUtils = NativeModules.LogUtil


export function showLog(msg:string){
    console.log(msg)
    // LogUtils.d(msg)
}

export function showToast(msg:string){
    if (!isEmptyStr(msg)){
        ToastAndroid.show(msg,ToastAndroid.SHORT)
    }
}


export function showLongToast(msg:string){
    ToastAndroid.show(msg,ToastAndroid.LONG)
}


export function encryptPhone(phone:string){
    if (isEmptyStr(phone)){
        return ""
    }
    let needReplace = phone.substring(3,7)
    return phone.replace(needReplace, '****')
}


export function isPoneAvailable(str:string) {
    const myreg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}

export function isEmptyStr(s:string|undefined|null) {
    if (s == null || s === '' || s === undefined) {
        return true
    }
    if (s.trim().length === 0){
        return true
    }
    return false
}

//不要轻易用这个方法，除非明确传入的参数为字符串类型
export function isNotEmptyStr(s:string) {
    if (typeof s == 'string' && s.length > 0) {
        return true
    }
    return false
}

export const ERROR_CODE_MAP = new Map([
    [100001, '请求数据异常'],
    [100002, '参数为空'],

])



export function showErrorToast(code:number){
    if (isEmptyStr(code.toString())){
        return
    }
    let msg = ERROR_CODE_MAP.get(code)
    if (msg ==undefined || isEmptyStr(msg)){
        msg = '未知错误'
    }
    showToast(msg)
}

export function getWindowWidth(){
    const width =  Dimensions.get('window').width
    // console.log(`getWindowWidth width:${width}`)
    return width
}



export function getWindowHeight(){
    let height =  Dimensions.get('window').height
    // console.log(`getWindowHeight height:${height}`)
    //todo 发现这里返回的高度不是整个屏幕的高度，导致底部会流出一部分空白，先这么写后面再替换
    // height = 3000
    return height
}

export interface WindowSize{
    width:number,
    height:number,
}

export function getWindowSize():WindowSize{
    const {width,height} = Dimensions.get('window')
    return {width,height}
}


export function isEmptyArray(arr:Array<any> | undefined) {
    showLog(`isEmptyArray arr:${arr}`)
    if (arr && arr.length > 0 ){
        return false
    }
    return true;
}

export function base64Url(str:string){
    return `data:image/png;base64,${str}`
}

// 获取状态栏高度
export function getStatusBarHeight() {
    return StatusBar.currentHeight;
}
