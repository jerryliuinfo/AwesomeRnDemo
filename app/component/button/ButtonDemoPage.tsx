import { Alert, Button, StyleSheet, View } from "react-native";
import React from "react";
import { Separator } from "../common/Seperator";

export default class ButtonDemoPage extends React.Component<any, any> {

  render() {
    return (
      <View style={[styles.container]}>

        <Button title={"I am a button"}
                onPress={() => Alert.alert('Simple button pressed')}
                accessibilityLabel={'我是阅读的内容'}
        />
        <Separator/>
        <Button title={'按钮设置颜色'}
                color="#841584"
                onPress={() => Alert.alert('Simple button pressed')}
        />
        <Separator/>

        <Button title={"不允许点击"}
                disabled={true}
                onPress={() => Alert.alert('Cannot press')}
        />
        <Separator/>

        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
        <Separator/>
        <Button title={"点击不发出声音"}
                touchSoundDisabled={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    marginHorizontal:16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
