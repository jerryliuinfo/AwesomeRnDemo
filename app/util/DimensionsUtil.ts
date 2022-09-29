import {Dimensions} from "react-native";



//设计稿的宽度 是按
const DESIGN_WIDTH = 853
const DESIGN_HEIGHT = 533

//屏幕适配
export function getDp(pixel: number) {
    const {width} = Dimensions.get('window')
    return width * pixel / DESIGN_WIDTH
}
