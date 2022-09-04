import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export class ImageBackgroundDemoPage extends React.Component<any, any>{
  IMAGE = {uri: 'https://zh-hans.reactjs.org/logo-og.png'}
  render() {
    return (
      <View style={[styles.container]}>
        <ImageBackground source={this.IMAGE} style={[styles.image]} imageStyle={styles.imageStyle}  >
          <Text style={[styles.text]}>Inside</Text>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  imageStyle:{
    // width:300,
    // height:300
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    // background: "#000000a0"
  }
});
