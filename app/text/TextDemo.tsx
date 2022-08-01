import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const TextUsage = () => {
  const react = "React Native"
  return <View style={[textStyles.viewProp]} >
      <Text style={[textStyles.whiteColor]}>平台:{Platform.OS}</Text>
      <Text style={[textStyles.whiteColor, textStyles.textProp]}>字体属性:{react}</Text>
  </View>
}


const textStyles = StyleSheet.create({
  whiteColor:{
    color:Colors.white,
    paddingHorizontal:20,
    paddingVertical:5,
    fontFamily:"serif"
  },
  viewProp:{
    backgroundColor:"#0000ff",
    borderColor:"#ff0000",
    borderWidth:2,
    borderRadius:5,
    margin:10,
    borderStyle:"dotted"
  },
  textProp:{
    color:Colors.white,
    fontFamily:"serif",
    fontSize:30,
    fontWeight:"bold",
    includeFontPadding:true,
    textAlign:"left",
    letterSpacing:10,
    lineHeight:60,
    //'auto', 'top', 'bottom', 'center'
    textAlignVertical:"center",
    //装饰线:'none', 'underline', 'line-through', 'underline line-through'
    textDecorationLine:"underline",
    textShadowColor:"#00ff00",
    textShadowOffset:{width:20,height:20}
  }
})
