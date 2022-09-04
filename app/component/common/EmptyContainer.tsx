import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getWindowHeight } from "../../util/ComUtils";


export class EmptyContainer extends React.Component<any, any>{
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={{textAlign:'center'}}>暂无内容哦</Text>
      </View>
    );
  }
}


const styles= StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red',
    height:getWindowHeight(),
  }
})
