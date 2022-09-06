import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { showLog } from "../../util/ComUtils";

export interface IPressableState {
  timesPressed: number,
}

export class PressableDemoPage extends React.Component<any, IPressableState> {

  constructor(props: any) {
    super(props);
    this.state = {
      timesPressed: 0
    };
  }

  private onPressIn() {
    showLog(`onPressIn`);
  }

  private onPressOut() {
    showLog(`onPressOut`);
  }

  private onLongPress() {
    showLog(`onLongPress`);
  }

  private textLog(): string {
    const { timesPressed } = this.state;
    let textLog = "";
    if (timesPressed > 1) {
      textLog = timesPressed + "x onPress";
    } else if (timesPressed > 0) {
      textLog = "onPress";
    }
    return textLog;
  }

  render() {
    const { timesPressed } = this.state;
    return (
      <View style={styles.container}>
        <Pressable
          onPressIn={() => {
            this.onPressIn();
          }}
          onPressOut={() => {
            this.onPressOut();
          }}
          onLongPress={() => {
            this.onLongPress();
          }}

          onPress={() => {
            this.setState({
              timesPressed: (timesPressed+1)
            });
          }}
         >



          <Text style={styles.text}>
            {"Press Me"}
          </Text>
        </Pressable>
        <View style={styles.logBox}>
          <Text testID="pressable_press_console">{this.textLog()}</Text>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9"
  }
});
