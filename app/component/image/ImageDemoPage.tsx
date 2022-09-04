import React from "react";
import { StyleSheet, View } from "react-native";
import { CommonImageTs } from "../common/CommonImageTs";

export class ImageDemoPage extends React.Component<any, any>{
  render() {
    return (
      <View style={[styles.container]}>
        <CommonImageTs
            source={'https://reactnative.dev/img/tiny_logo.png'}
            style={styles.tinyLogo}
        />
        <CommonImageTs
          source={'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}
          style={styles.logo}
        />


        <CommonImageTs
          source={'https://reactnative.dev/img/xxx.png'}
          style={styles.tinyLogo}
          defaultSource={require("../../../images/ic_retry.png")}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    justifyContent:'center',
    alignItems:'center'
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  logo: {
    width: 66,
    height: 58,
    marginTop:16,
  },
});
