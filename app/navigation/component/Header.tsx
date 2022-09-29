import React from "react";
import { StyleSheet, Text, View } from "react-native";


export interface IMyHeaderProps{
  title:string,
  leftButton: React.Component
}

export class MyHeader extends React.Component<any, any>{

  render() {
    const {title,leftButton} = this.props
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        {
          leftButton
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:50,
    alignItems:'center',
    paddingHorizontal:16,
    backgroundColor:'#f4511e',
  }
})
