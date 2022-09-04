import { StyleSheet, View } from "react-native";
import React from "react";

export const Separator = () => {
  return <View style={[CommonStyles.separator]}/>
}

const CommonStyles = StyleSheet.create({
  separator:{
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})
