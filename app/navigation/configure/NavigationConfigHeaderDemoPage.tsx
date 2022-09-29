import React from "react";
import { StyleSheet, View } from "react-native";
import RadiusBtn from "../../widget/RadiusBtn";


export class NavigationConfigHeaderDemoPage extends React.Component<any, any> {

  private updateOptions(){
    const {navigation} = this.props
    navigation.setOptions({
      title:'Hello'
    })
  }

  render() {
    return (
      <View style={styles.container}>

        {
          <RadiusBtn
            btnStyle={{ marginTop: 10 }}
            btnName={"修改标题"}
            onPress={() => this.updateOptions()}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
