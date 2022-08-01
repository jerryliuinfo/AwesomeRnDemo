import { Platform, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function isAndroid():boolean{
  return Platform.OS === "android"
}


export const ComStyle = StyleSheet.create(
  {
     whiteText:{
       color:Colors.white,
       paddingHorizontal:20,
       paddingVertical:5,
       fontFamily:"serif"
     }
  }
)
