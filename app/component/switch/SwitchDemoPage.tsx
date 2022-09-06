import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";


interface ISwitchProps {
  enable: boolean;
}

export class SwitchDemoPage extends React.Component<any, ISwitchProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      enable: true
    };
  }

  render() {
    const { enable } = this.state;
    return (
      <View style={styles.container}>
        <Text>开关状态:{enable? "开":"关"}</Text>
        <Switch
          //关闭状态时的边框颜色(iOS)或背景颜色(Android)。
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={enable ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={(value) => {
            this.setState({
              enable: value
            });
          }}
          value={enable}
          //是否禁用
          disabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  }
});
