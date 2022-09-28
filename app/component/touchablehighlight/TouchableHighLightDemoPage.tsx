import React from "react";
import { Button, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { showLog } from "../../util/ComUtils";

interface ITouchableHighLightState {
  count: number,
}

export class TouchableHighLightDemoPage extends React.Component<any, ITouchableHighLightState> {

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
        <TouchableHighlight
          //指定封装的视图在被触摸操作激活时以多少不透明度显示（0 到 1 之间，默认值为 0.85）。需要设置underlayColor。
          activeOpacity={0.5}
          //有触摸操作时显示出来的底层的颜色。
          underlayColor={'#ff0000'}

          onPress={() => {
          this._onPress();
        }}>
          <View style={[styles.button]}>
           <Text>Touch here</Text>
          </View>

        </TouchableHighlight>
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
