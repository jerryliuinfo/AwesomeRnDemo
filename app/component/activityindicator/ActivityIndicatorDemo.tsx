import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

interface ActivityIndicatorProps{

}

interface ActivityIndicatorStatus{

}

/**
 * animating:是否要显示指示器动画，默认为 true 表示显示，false 则隐藏。
 * color:滚轮的前景颜色。
 * size:指示器的大小，默认为'small'。目前只能在 Android 上设定具体的数值。
 */
export default class ActivityIndicatorDemo extends React.Component<ActivityIndicatorProps, ActivityIndicatorStatus>{
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator/>
        <ActivityIndicator size={'large'} animating={true}/>
        <ActivityIndicator size={'small'} color={'#0000ff'}/>
        <ActivityIndicator size={'large'} color={'#00ff00'}/>
        <ActivityIndicator size={60} color={'#ff0000'} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  }
});
