import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getWindowHeight } from "../../util/ComUtils";

export interface IHeaderPros{
  title?:string | undefined
}

export class HeaderContainer extends React.Component<IHeaderPros, any>{
  render() {
    return (
      <View style={[styles.container]}>
        <Text>{this.props.title || '我是头部'}</Text>
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
