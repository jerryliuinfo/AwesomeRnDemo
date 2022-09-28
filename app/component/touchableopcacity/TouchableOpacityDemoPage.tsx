import React from "react";
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { showLog } from "../../util/ComUtils";

interface ITouchableOpacityState {
  count: number,
}

export class TouchableOpacityDemoPage extends React.Component<any, ITouchableOpacityState> {

  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }

  private _onPress() {
    showLog(`_onPress`);
    this.setState({
      count: (this.state.count + 1)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          //指定封装的视图在被触摸操作激活时以多少不透明度显示（0 到 1 之间）。默认值为 0.2。
          activeOpacity={0.5}
          onPress={() => {
          this._onPress();
        }}>
          <View style={[styles.button]}>
           <Text>Touch here</Text>
          </View>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count ? this.state.count : null}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});
