import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getWindowHeight } from "../../util/ComUtils";


export interface IFootProps{
  msg?:string
}

export class FooterContainer extends React.Component<IFootProps, any>{
  render() {
    const {msg} = this.props
    return (
      <View style={[styles.container]}>
        <Text>{msg}</Text>
      </View>
    );
  }
}


const styles= StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:8,
  }
})
