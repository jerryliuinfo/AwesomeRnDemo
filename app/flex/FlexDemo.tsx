import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export const FlexBasic = () => {
  return <View style={[styles.container,{height:200, flexDirection:"row"}]}>
      <Text style={{color:Colors.white}}>Flex弹性宽高:</Text>
      <View style={{flex:1, backgroundColor:"powderblue"}}/>
      <View style={{flex:2, backgroundColor:"skyblue"}}/>
      <View style={{flex:2, backgroundColor:"steelblue"}}/>
  </View>
}

export const FlexPercentageBasic = () => {
   return <View style={[styles.container,{height:200, flexDirection:"column"}]}>
      <Text style={{color:Colors.white}}>Flex百分比宽高:</Text>
      <View style={{height: "15%", backgroundColor:"powderblue"}}/>
      <View style={{width:"65%", height:"35%", backgroundColor:"skyblue"}}/>
      <View style={{width:"33%", height:"50%", backgroundColor:"steelblue"}}/>
   </View>
}

export const FlexJustifyContent = () => {
   return <View >
      <Text style={{color:Colors.white}}>Flex justifyContent :</Text>
      <View style={[styles.container,{ height:300, flexDirection:"column", justifyContent:"space-around"}]}>

         <View style={ [styles.box, {backgroundColor:"powderblue"}] }/>
         <View style={ [styles.box, {backgroundColor:"skyblue"}] }/>
         <View style={ [styles.box, {backgroundColor:"steelblue"}] }/>
      </View>

   </View>
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      flexDirection:"row",
      padding:20,
   },
   box:{
     width:50,
     height:50.
   }
})


