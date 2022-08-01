import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export class ActivityIndicatorDemo extends React.Component{
  render() {
    return (
      <View style={[indicatorStyles.container,indicatorStyles.horizontal]}>
        <ActivityIndicator/>
        <ActivityIndicator size="large"/>
        <ActivityIndicator size="small" color={"#00ff00"}/>
        <ActivityIndicator size="large"  color={"#ffff00"}/>
      </View>
    );
  }
}

const indicatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
